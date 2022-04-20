import classify as cl
import fuzzy as fuzz
from flask import Flask, render_template, request
import os
try:
	os.remove("db.sqlite3")
	print("Old database removed. Training new database")
except:
	print('No database found. Creating new database.')
    
filenumber = 0
for file in os.listdir('saved_conversations'):
    if file.endswith(".txt"):
        filenumber += 1

filenumber = filenumber+1

file= open('saved_conversations/'+str(filenumber)+'.txt',"w+")
file.write('bot : Hi There! I am a medical chatbot. You can begin conversation by typing in a message and pressing enter.\n')
file.close()
all_answer = list()

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/record_userText")
def get_userText():
    get_usertext= request.args.get('usertext')    
    appendfile= open('saved_conversations/'+str(filenumber)+'.txt',"a")
    appendfile.write('user : '+get_usertext+'\n')
    appendfile.close()

    return "User Text Saved!"

@app.route("/record_botText")
def get_botText():
    get_bottext= request.args.get('bottext')
    print(get_bottext)
    appendfile= open('saved_conversations/'+str(filenumber)+'.txt',"a")
    appendfile.write('bot : '+get_bottext+'\n')
    appendfile.close()

    return "Bot Text Saved!"

@app.route("/gets")

def get_bot_response():
    
    userText = request.args.get('msg')
    cl.train_data()
    cl.preprocess()
    classs = str(cl.classify(str(userText)))
    if classs == "test":
        response = "Please choose a specific type of test"
    else:
        response = classs   
    return response

@app.route("/fuzz")
def getFuzz():
    test = request.args.get('test')
    print(test)
    f = fuzz.fuzzyInput(all_answer[len(all_answer)-7],all_answer[len(all_answer)-6],all_answer[len(all_answer)-5],all_answer[len(all_answer)-4],all_answer[len(all_answer)-3],all_answer[len(all_answer)-2],all_answer[len(all_answer)-1],str(test))
    return fuzz.defuzz(next(iter(f.values())))


@app.route("/answer")
def getAnswer():
    ans = request.args.get('ans')
    try:
        all_answer.append(int(ans))
    except:
        print("here")
    print(all_answer)
    return str(ans)


if __name__ == "__main__":
    app.run()
