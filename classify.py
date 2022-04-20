# use natural language toolkit
import nltk
from nltk.stem.lancaster import LancasterStemmer
# word stemmer
stemmer = LancasterStemmer()

# 3 classes of training data
training_data = []
# capture unique stemmed words in the training corpus
corpus_words = {}
class_words = {}

def train_data():
    training_data.append({"class":"positive", "sentence":"alright"})
    training_data.append({"class":"positive", "sentence":"ok"})
    training_data.append({"class":"positive", "sentence":"okay"})
    training_data.append({"class":"positive", "sentence":"amazing"})
    training_data.append({"class":"positive", "sentence":"appreciate"})
    training_data.append({"class":"positive", "sentence":"awesome"})
    training_data.append({"class":"positive", "sentence":"balanced"})
    training_data.append({"class":"positive", "sentence":"beautiful"})
    training_data.append({"class":"positive", "sentence":"best"})
    training_data.append({"class":"positive", "sentence":"blessed"})
    training_data.append({"class":"positive", "sentence":"bliss"})
    training_data.append({"class":"positive", "sentence":"bright"})
    training_data.append({"class":"positive", "sentence":"brilliant"})
    training_data.append({"class":"positive", "sentence":"brisk"})
    training_data.append({"class":"positive", "sentence":"calm"})
    training_data.append({"class":"positive", "sentence":"capable"})
    training_data.append({"class":"positive", "sentence":"careful"})
    training_data.append({"class":"positive", "sentence":"caring"})
    training_data.append({"class":"positive", "sentence":"cautious"})
    training_data.append({"class":"positive", "sentence":"charming"})
    training_data.append({"class":"positive", "sentence":"cheerful"})
    training_data.append({"class":"positive", "sentence":"clever"})
    training_data.append({"class":"positive", "sentence":"committed"})
    training_data.append({"class":"positive", "sentence":"communicative"})
    training_data.append({"class":"positive", "sentence":"compassionate"})
    training_data.append({"class":"positive", "sentence":"competent"})
    training_data.append({"class":"positive", "sentence":"competitive"})
    training_data.append({"class":"positive", "sentence":"complete"})
    training_data.append({"class":"positive", "sentence":"confident"})
    training_data.append({"class":"positive", "sentence":"conscientious"})
    training_data.append({"class":"positive", "sentence":"considerate"})
    training_data.append({"class":"positive", "sentence":"consistent"})
    training_data.append({"class":"positive", "sentence":"constructive"})
    training_data.append({"class":"positive", "sentence":"cooperative"})
    training_data.append({"class":"positive", "sentence":"courage"})
    training_data.append({"class":"positive", "sentence":"determined"})
    training_data.append({"class":"positive", "sentence":"devoted"})
    training_data.append({"class":"positive", "sentence":"easy"})
    training_data.append({"class":"positive", "sentence":"efficient"})
    training_data.append({"class":"positive", "sentence":"effortless"})
    training_data.append({"class":"positive", "sentence":"excellent"})
    training_data.append({"class":"positive", "sentence":"excitement"})
    training_data.append({"class":"positive", "sentence":"fascinating"})
    training_data.append({"class":"positive", "sentence":"fine"})
    training_data.append({"class":"positive", "sentence":"fortunate"})
    training_data.append({"class":"positive", "sentence":"fulfilled"})
    training_data.append({"class":"positive", "sentence":"fun"})
    training_data.append({"class":"positive", "sentence":"excitement"})
    training_data.append({"class":"positive", "sentence":"glad"})
    training_data.append({"class":"positive", "sentence":"good"})
    training_data.append({"class":"positive", "sentence":"natural"})
    training_data.append({"class":"positive", "sentence":"great"})
    training_data.append({"class":"positive", "sentence":"happy"})
    training_data.append({"class":"positive", "sentence":"impressive"})
    training_data.append({"class":"positive", "sentence":"incredible"})
    training_data.append({"class":"positive", "sentence":"inspired"})
    training_data.append({"class":"positive", "sentence":"interesting"})
    training_data.append({"class":"positive", "sentence":"joy"})
    training_data.append({"class":"positive", "sentence":"kind"})
    training_data.append({"class":"positive", "sentence":"knowledgable"})
    training_data.append({"class":"positive", "sentence":"learning"})
    training_data.append({"class":"positive", "sentence":"like"})
    training_data.append({"class":"positive", "sentence":"love"})
    training_data.append({"class":"positive", "sentence":"lucky"})
    training_data.append({"class":"positive", "sentence":"magical"})
    training_data.append({"class":"positive", "sentence":"marvellous"})
    training_data.append({"class":"positive", "sentence":"mastered"})
    training_data.append({"class":"positive", "sentence":"merry"})
    training_data.append({"class":"positive", "sentence":"mighty"})
    training_data.append({"class":"positive", "sentence":"motivated"})
    training_data.append({"class":"positive", "sentence":"natural"})
    training_data.append({"class":"positive", "sentence":"nice"})
    training_data.append({"class":"positive", "sentence":"outgoing"})
    training_data.append({"class":"positive", "sentence":"passionate"})
    training_data.append({"class":"positive", "sentence":"peaceful"})
    training_data.append({"class":"positive", "sentence":"perfect"})
    training_data.append({"class":"positive", "sentence":"pleasing"})
    training_data.append({"class":"positive", "sentence":"polite"})
    training_data.append({"class":"positive", "sentence":"precise"})
    training_data.append({"class":"positive", "sentence":"prepared"})
    training_data.append({"class":"positive", "sentence":"productive"})
    training_data.append({"class":"positive", "sentence":"progressive"})
    training_data.append({"class":"positive", "sentence":"prosperous"})
    training_data.append({"class":"positive", "sentence":"proud"})
    training_data.append({"class":"positive", "sentence":"refreshing"})
    training_data.append({"class":"positive", "sentence":"relax"})
    training_data.append({"class":"positive", "sentence":"reliable"})
    training_data.append({"class":"positive", "sentence":"relieved"})
    training_data.append({"class":"positive", "sentence":"respect"})
    training_data.append({"class":"positive", "sentence":"safe"})
    training_data.append({"class":"positive", "sentence":"satisfied"})
    training_data.append({"class":"positive", "sentence":"secure"})
    training_data.append({"class":"positive", "sentence":"sincere"})
    training_data.append({"class":"positive", "sentence":"smart"})
    training_data.append({"class":"positive", "sentence":"sociable"})
    training_data.append({"class":"positive", "sentence":"special"})
    training_data.append({"class":"positive", "sentence":"spectacular"})
    training_data.append({"class":"positive", "sentence":"sophisticated"})
    training_data.append({"class":"positive", "sentence":"super"})
    training_data.append({"class":"positive", "sentence":"surprised"})
    training_data.append({"class":"positive", "sentence":"thrilling"})
    training_data.append({"class":"positive", "sentence":"thriving"})
    training_data.append({"class":"positive", "sentence":"trust"})
    training_data.append({"class":"positive", "sentence":"understanding"})
    training_data.append({"class":"positive", "sentence":"well"})
    training_data.append({"class":"positive", "sentence":"wise"})
    training_data.append({"class":"positive", "sentence":"wonderful"})
    training_data.append({"class":"positive", "sentence":"worth"})


    training_data.append({"class":"greetings", "sentence":"Hi"})
    training_data.append({"class":"greetings", "sentence":"Hello"})
    training_data.append({"class":"greetings", "sentence":"sup"})
    training_data.append({"class":"greetings", "sentence":"what's up"})
    training_data.append({"class":"greetings", "sentence":"wazzup"})

    training_data.append({"class":"thanks", "sentence":"thanks"})
    training_data.append({"class":"thanks", "sentence":"grateful"})
    training_data.append({"class":"thanks", "sentence":"appreciate"})
    training_data.append({"class":"thanks", "sentence":"gratitude"})
    training_data.append({"class":"thanks", "sentence":"nice"})
    
    training_data.append({"class":"quit", "sentence":"Honestly, I fell like I'd like to quit schooling."})

    training_data.append({"class":"test", "sentence":"i want to take a test"})
    training_data.append({"class":"test", "sentence":"i want to choose a test"})
    training_data.append({"class":"test", "sentence":"i want to directly take a test"})

    training_data.append({"class":"anxietytest", "sentence":"anxiety test"})
    training_data.append({"class":"anxietytest", "sentence":"1"})  
    training_data.append({"class":"stresstest", "sentence":"stress test"})
    training_data.append({"class":"stresstest", "sentence":"2"})  
    training_data.append({"class":"depressiontest", "sentence":"depression"})
    training_data.append({"class":"depressiontest", "sentence":"3"})  

    training_data.append({"class":"give", "sentence":"Give out symptom to chatbot for assessment"})

    training_data.append({"class":"depression", "sentence":"not having interest"})
    training_data.append({"class":"depression", "sentence":"lost interest"})
    training_data.append({"class":"depression", "sentence":"sad"})
    training_data.append({"class":"depression", "sentence":"change appetite"})
    training_data.append({"class":"depression", "sentence":"depressed"})
    training_data.append({"class":"depression", "sentence":"doesn't care"})
    training_data.append({"class":"depression", "sentence":"weight loss"})
    training_data.append({"class":"depression", "sentence":"loss appetite"})
    training_data.append({"class":"depression", "sentence":"dont have appetite"})
    training_data.append({"class":"depression", "sentence":"can't sleep"})
    training_data.append({"class":"depression", "sentence":"feel tired"})
    training_data.append({"class":"depression", "sentence":"no energy"})
    training_data.append({"class":"depression", "sentence":"loss of energy"})
    training_data.append({"class":"depression", "sentence":"easily to irritate"})
    training_data.append({"class":"depression", "sentence":"useless"})
    training_data.append({"class":"depression", "sentence":"lonely"})
    training_data.append({"class":"depression", "sentence":"worthless"})
    training_data.append({"class":"depression", "sentence":"pathetic"})
    training_data.append({"class":"depression", "sentence":"helpless"})
    training_data.append({"class":"depression", "sentence":"hopeless"})
    training_data.append({"class":"depression", "sentence":"can't think properly"})
    training_data.append({"class":"depression", "sentence":"can't concentrate"})
    training_data.append({"class":"depression", "sentence":"make reckless decisions"})
    training_data.append({"class":"depression", "sentence":"thinking of death or thinks about dying or attempts to suicide"})
    training_data.append({"class":"depression", "sentence":"thinking about dying jumping at the highest floor"})
    training_data.append({"class":"depression", "sentence":"trouble sleeping"})
    training_data.append({"class":"depression", "sentence":"sleeping too much"})
    training_data.append({"class":"depression", "sentence":"increase fatigue"})
    training_data.append({"class":"depression", "sentence":"Increase in purposeless physical activity"})
    training_data.append({"class":"depression", "sentence":"guilty"})
    training_data.append({"class":"depression", "sentence":"difficulty thinking"})
    training_data.append({"class":"depression", "sentence":"depress"})

    training_data.append({"class":"anxiety", "sentence":"anxiety"})
    training_data.append({"class":"anxiety", "sentence":"nervous"})
    training_data.append({"class":"anxiety", "sentence":"restless"})
    training_data.append({"class":"anxiety", "sentence":"tense"})
    training_data.append({"class":"anxiety", "sentence":"sense of impending danger"})
    training_data.append({"class":"anxiety", "sentence":"sense of panic"})
    training_data.append({"class":"anxiety", "sentence":"sense of doom."})
    training_data.append({"class":"anxiety", "sentence":"increased heart rate."})
    training_data.append({"class":"anxiety", "sentence":"Sweating easily"})
    training_data.append({"class":"anxiety", "sentence":"Trembling with no reason"})
    training_data.append({"class":"anxiety", "sentence":"weak"})
    training_data.append({"class":"anxiety", "sentence":"tired"})
    training_data.append({"class":"anxiety", "sentence":"Trouble concentrating"})
    training_data.append({"class":"anxiety", "sentence":"thinking about anything other than the present worry"})
    training_data.append({"class":"anxiety", "sentence":"trouble sleeping"})
    training_data.append({"class":"anxiety", "sentence":"Experiencing gastrointestinal (GI) problems"})
    training_data.append({"class":"anxiety", "sentence":"difficulty controlling worry"})
    training_data.append({"class":"anxiety", "sentence":"Having the urge to avoid things that trigger anxiety"})
    training_data.append({"class":"anxiety", "sentence":"intense panic"})
    training_data.append({"class":"anxiety", "sentence":"sudden feelings of intense anxiety and fear or terror"})
    training_data.append({"class":"anxiety", "sentence":"worrying"})
    training_data.append({"class":"anxiety", "sentence":"interfering with my work"})
    training_data.append({"class":"anxiety", "sentence":"my fear, worry or anxiety upsetting to me and difficult to control"})
    
    training_data.append({"class":"stress", "sentence":"headache"})
    training_data.append({"class":"stress", "sentence":"overeating"})
    training_data.append({"class":"stress", "sentence":"stress stressing stressed"})
    training_data.append({"class":"stress", "sentence":"undereating"})
    training_data.append({"class":"stress", "sentence":"muscle tension"})
    training_data.append({"class":"stress", "sentence":"pain restlessness"})
    training_data.append({"class":"stress", "sentence":"angry outbursts"})
    training_data.append({"class":"stress", "sentence":"chest pain"})
    training_data.append({"class":"stress", "sentence":"lack of motivation"})
    training_data.append({"class":"stress", "sentence":"drug or alchohol misuse"})
    training_data.append({"class":"stress", "sentence":"fatigue"})
    training_data.append({"class":"stress", "sentence":"feeling overwhelmed"})
    training_data.append({"class":"stress", "sentence":"tobacco use"})
    training_data.append({"class":"stress", "sentence":"change in sex drive"})
    training_data.append({"class":"stress", "sentence":"easily to irritate or anger"})
    training_data.append({"class":"stress", "sentence":"social withdrawal"})
    training_data.append({"class":"stress", "sentence":"stomach upset"})
    training_data.append({"class":"stress", "sentence":"sleep problem"})
    
    print ("%s sentences of training data" % len(training_data))

def preprocess():
    nltk.download('punkt')
    # turn a list into a set (of unique items) and then a list again (this removes duplicates)
    classes = list(set([a['class'] for a in training_data]))
    for c in classes:
        # prepare a list of words within each class
        class_words[c] = []

    # loop through each sentence in our training data
    for data in training_data:
        # tokenize each sentence into words
        for word in nltk.word_tokenize(data['sentence']):
            # ignore a some things
            if word not in ["?", "'s"]:
                # stem and lowercase each word
                stemmed_word = stemmer.stem(word.lower())
                # have we not seen this word already?
                if stemmed_word not in corpus_words:
                    corpus_words[stemmed_word] = 1
                else:
                    corpus_words[stemmed_word] += 1

                # add the word to our words in class list
                class_words[data['class']].extend([stemmed_word])

    # we now have each stemmed word and the number of occurances of the word in our training corpus (the word's commonality)
    print ("Corpus words and counts: %s \n" % corpus_words)
    # also we have all words in each class
    print ("Class words: %s" % class_words)

# calculate a score for a given class taking into account word commonality
def calculate_class_score(sentence, class_name, show_details=True):
    score = 0
    # tokenize each word in our new sentence
    for word in nltk.word_tokenize(sentence):
        # check to see if the stem of the word is in any of our classes
        if stemmer.stem(word.lower()) in class_words[class_name]:
            # treat each word with relative weight
            score += (1 / corpus_words[stemmer.stem(word.lower())])

            if show_details:
                print ("   match: %s (%s)" % (stemmer.stem(word.lower()), 1 / corpus_words[stemmer.stem(word.lower())]))
    return score

# return the class with highest score for sentence
def classify(sentence):
    high_class = None
    high_score = 0
    # loop through our classes
    for c in class_words.keys():
        # calculate score of sentence for each class
        score = calculate_class_score(sentence, c, show_details=False)
        # keep track of highest score
        if score > high_score:
            high_class = c
            high_score = score

    print("class:",high_class,"score:",high_score)
    return high_class
