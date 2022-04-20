const recommendation = '<br><p class="botText"><span>HERE ARE SOME LISTS OF PSYCHIATRIST/MENTAL HEALTH PROFFESSIONAL THAT YOU MAY CONTACT:<br><br>ROWENA COSCA, MD, FPPA<br>Address: Room 309, Saint Paul\'s Hospital Iloilo, Gen. Luna Street, Iloilo City, 5000<br>Phone: (033) 337 2741<br><br>HENRIETTA C. ESPANOLA, MD<br>Address: Saint Paul\'s Hospital Iloilo Department 256 Cardinal Dougherty Annex, Gen. Luna Street, Iloilo City, 5000<br>Phone: (033) 337 2741<br><br>Victor A. Amantillo Jr., MD, FPPA<br>Address: Room 256, Saint Paul\'s Hospital Iloilo, Gen. Luna Street, Iloilo City<br>Phone: (033) 337 2741<br><br>Dr. Kathryn R. Beluso<br>Address: Department of Psychiatry, West Visayas State University Medical Center, Eugenio Lopez Street, Jaro, Iloilo City, 5000 Iloilo<br>Phone: (033) 320 2431<br><br>Japhet F. De Leon, MD<br>Address: 207, West Ave, Molo, Iloilo City, 5000 Iloilo<br>Phone: (033) 337 8646<br><br>Mariano S. Hembra, MD<br>Address: Western Visayas Medical Center, Q. Abeto St, Manduriao, Iloilo City, Iloilo<br>Phone: (033) 321 2841<br><br>Dynamic Psychiatry Institude<br>Address: Pakiad Rd, Oton, Iloilo<br>Phone: (033) 337 1290</span></p>';
var typeTest;
var botHtml;  
var record;
var username = null;
var testFlag = false;
var okay = false;
var okay2 = false;
var cont = false;
var dep_flag = false;
var anx_flag = false;
var str_flag = false;
var yes = false;
var no = false;
var give = false;
var school = false;
var option = false;
var classify = false;
var currentTest = 0;
var totalscore = 0;
var an = 0;
var de = 0;
var st = 0;
var count = 5;
function getBotResponse() {
  var rawText = $("#textInput").val();
  var userHtml = '<br><p class="userText"><span>' + rawText + '</span></p>';
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  $.get("/record_userText", { usertext: rawText }).done(function(data) {
    if(okay == true){
      if(username == null){
        
        if(rawText.toLowerCase().includes("call me")){
          rawText = rawText.split(" ");
          username = 'Hello '+rawText[rawText.length-1]+". Before we proceed i would like to know that like you, we know that mental health conditions are real and treatable.<br>The test in this software has gone through process of psychiametric validation that's why we can guarantee you that this is the quickest way to determine whether you are experiencing some symptoms of a specific mental health condition.<br>(Please Type 'continue' if you want to proceed).";
          botHtml = '<br><p class="botText"><span> '+ username +' </span></p>';
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
          $.get("/record_botText", { bottext: username }).done(function(data) {
            console.log(data);
          });
        }
        else{
          rawText = rawText.split(" ");
          if(rawText.length == 1){
            username =  rawText[rawText.length-1];
            record = "Hello "+ username +". Before we proceed i would like to know that like you, we know that mental health conditions are real and treatable.<br>The test in this software has gone through process of psychiametric validation that\'s why we can guarantee you that this is the quickest way to determine whether you are experiencing some symptoms of a specific mental health condition.<br>(Please Type \'continue\' if you want to proceed).";
            botHtml = '<br><p class="botText"><span>'+ record +'</span></p>';            
            $("#chatbox").append(botHtml);
            document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
            $.get("/record_botText", { bottext: record }).done(function(data) {
              console.log(data);
            });
          }
          else {
            record = "(Please enter your nickname in one word Ex.: John, Michael_123 or MR.Ben)";
            botHtml = '<br><p class="botText"><span>'+record+'</span></p>';
            $("#chatbox").append(botHtml);
            document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
            $.get("/record_botText", { bottext: record }).done(function(data) {
              console.log(data);
            });
          }
          
        }
      }
      else if(username != null){
        if(testFlag === false && cont == true && okay2 == true){
          if(rawText.toLowerCase() == 'yes'){
            yes = true;
          }
          $.get("/gets", { msg: rawText }).done(function(data) {
            console.log(dep_flag)
            console.log(yes)
            if(give == false){
              if(school == false && option == false){
                if(data == "Please choose a specific type of test" || rawText.toUpperCase() == "A"){
                  tests = "<br>1.Anxiety Test<br>2.Stress Test<br>3.Depression Test"
                  record = data + test;
                  botHtml = '<br><p class="botText"><span>' + record + '</span></p>';
                  $("#chatbox").append(botHtml);              
                }
                else if(data == "anxietytest" || (anx_flag == true && yes == true)) {
                  testFlag = true;
                  typeTest = "anxiety";
                  record = "Anxiety Test.<br>Instruction: please enter the letter of your answer.";
                  botHtml = '<br><p class="botText"><span> Anxiety Test.<br>Instruction: please enter the letter of your answer. </span></p>';
                  $("#chatbox").append(botHtml);
                  getAnxQuestion();
                }
                else if(data == "stresstest" || (str_flag == true && yes == true)) {
                  testFlag = true;
                  typeTest = "stress";
                  record = "Stress Test.<br>Instruction: please enter the letter of your answer."
                  botHtml = '<br><p class="botText"><span> Stress Test.<br>Instruction: please enter the letter of your answer. </span></p>';
                  $("#chatbox").append(botHtml);
                  getStrQuestion();
                }
                else if(data == "depressiontest" || (dep_flag == true && yes == true)) {
                  testFlag = true;
                  typeTest = "depression";
                  record = "Depression Test.<br>Instruction: please enter the letter of your answer.";
                  botHtml = '<br><p class="botText"><span> Depression Test.<br>Instruction: please enter the letter of your answer. </span></p>';
                  $("#chatbox").append(botHtml);
                  getDepQuestion();
                }
                else if(data == "greetings"){     
                  record = "Hello again ' + username+ '! How would you like to proceed?<br><br>A.)Choose a test<br>B.) Give out symptom";   
                  botHtml = '<br><p class="botText"><span>Hello again ' + username+ '! How would you like to proceed?<br><br>A.)Choose a test<br>B.) Give out symptom</span></p>';
                  $("#chatbox").append(botHtml);
                }
                else if(data == "give" || rawText.toUpperCase() == "B"){
                  give = true;
                  record = "(Give atleast 5 unusual things that you are feeling for the past 7 days)";
                  botHtml = '<br><p class="botText"><span>(Give atleast 5 unusual things that you are feeling for the past 7 days)</span></p>';
                  $("#chatbox").append(botHtml);   
                }
                else if(data == "depression" && classify == true){
                  dep_flag = true;
                  record = 'Based on what i found. You seem to be having a sign of depression would you like to take a test?<br>(Please Type "yes" or "no")';
                  botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of depression would you like to take a test? <br>(Please Type "yes" or "no")<br>(Please Type "yes" or "no")</span></p>';
                  $("#chatbox").append(botHtml);   
                }
                else if(data == "anxiety" && classify == true){
                  anx_flag = true;
                  record = 'Based on what i found. You seem to be having a sign of anxiety would you like to take a test?<br>(Please Type "yes" or "no")';
                  botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of anxiety would you like to take a test?<br>(Please Type "yes" or "no")</span></p>';
                  $("#chatbox").append(botHtml);   
                }
                else if(data == "stress" && classify == true){
                  str_flag = true;
                  record = 'Based on what i found. You seem to be having a sign of stress would you like to take a test?<br>(Please Type "yes" or "no")';
                  botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of stress would you like to take a test?<br>(Please Type "yes" or "no")</span></p>';
                  $("#chatbox").append(botHtml);   
                }
                else if(data == "thanks"){
                  record = 'I was happy to be able to assist you. Please feel free to say "hi" to me if need help in the future.';
                  botHtml = '<br><p class="botText"><span>I was happy to be able to assist you. Please feel free to say "hi" to me if need help in the future.</span></p>';
                  $("#chatbox").append(botHtml);   
                }
                else {         
                  record = "I'm sorry I didn't get that.As I am still learning. Could you please try again?"
                  botHtml = "<br><p class='botText'><span>I'm sorry I didn't get that.As I am still learning. Could you please try again?</span></p>";
                  $("#chatbox").append(botHtml);
                }
                $.get("/record_botText", { bottext: record }).done(function(data) {
                  console.log(data);
                });
              }
              if(school == false && option == true){
                if(rawText.toUpperCase() == "A" || data == "Please choose a specific type of test"){
                  option = false;                
                  tests = "<br>1.Anxiety Test<br>2.Stress Test<br>3.Depression Test"
                  botHtml = '<br><p class="botText"><span>' + data + tests + '</span></p>';
                  record = data + tests;
                  $("#chatbox").append(botHtml);
                }
                else if(rawText.toUpperCase() == "B" || data == "give"){
                  option = false;
                  give = true;
                  classify = true;
                  record ="(Give atleast 5 unusual things that you are feeling for the past 7 days)";
                  botHtml = '<br><p class="botText"><span>(Give atleast 5 unusual things that you are feeling for the past 7 days)</span></p>';
                  $("#chatbox").append(botHtml);   
                }              
                else{
                  record = "Please choose your answer within these choices only. " + "How would you like to proceed? <br><br>A.) Choose a test<br>B.) Give out symptom to chatbot for assessment"
                  botHtml = '<br><p class="botText"><span>Please choose your answer within these choices only.</span></p>';
                  $("#chatbox").append(botHtml,"<br><p class='botText'><span>How would you like to proceed? <br><br>A.) Choose a test<br>B.) Give out symptom to chatbot for assessment</span></p>");  
                }
                $.get("/record_botText", { bottext: record }).done(function(data) {
                  console.log(data);
                });
              }
              
              if(data == "positive" && school == true && option == false){
                school = false; 
                option = true;        
                record = "That\'s good to hear!. Would you like to try some of the options below? <br><br>A.) Choose a test<br>B.) Give out symptom to chatbot for assessment";    
                botHtml = '<br><p class="botText"><span>That\'s good to hear!. Would you like to try some of the options below? <br><br>A.) Choose a test<br>B.) Give out symptom to chatbot for assessment </span></p>';
                $("#chatbox").append(botHtml);   
                $.get("/record_botText", { bottext: record }).done(function(data) {
                  console.log(data);
                });
              }
              else if ((data == "anxiety" || data == "stress" || data == "depression" || data == "quit") && school == true ){
                school = false;   
                option = true;     
                record = "School can be quite stressful and fun at the same time. With that in mind, I am here to help you with whatever you are going through. How would you like to proceed? <br><br>A.) Choose a test<br>B.) Give out symptom to chatbot for assessment ";      
                botHtml = '<br><p class="botText"><span>School can be quite stressful and fun at the same time. With that in mind, I am here to help you with whatever you are going through. How would you like to proceed? <br><br>A.) Choose a test<br>B.) Give out symptom to chatbot for assessment </span></p>';
                $("#chatbox").append(botHtml);  
                $.get("/record_botText", { bottext: record }).done(function(data) {
                  console.log(data);
                });
              }
              else if(school == true && option == false){
                record = "I'm sorry I didn't get that.As I am still learning. Could you please try again?";
                botHtml = "<br><p class='botText'><span>I'm sorry I didn't get that.As I am still learning. Could you please try again?</span></p>";              
                $("#chatbox").append(botHtml);
                $.get("/record_botText", { bottext: record }).done(function(data) {
                  console.log(data);
                });
              }
              
            }
            else{
              if(data == "anxiety" && count > 0){
                an++;
                count--;                
              }
              else if(data == "depression" && count > 0){
                de++;
                count--;
              }
              else if(data == "stress" && count > 0){
                st++;
                count--;
              }
              else{
                count--;
              }

              if(count > 0){
                record = count+" more to go";
                botHtml = '<br><p class="botText"><span>'+count+' more to go</span></p>';
                $("#chatbox").append(botHtml);

              }
              else if(count == 0){
                give = false;
                count == 5;
                if(an > st && an > de){               
                  anx_flag = true;
                  record = 'Based on what i found. You seem to be having a sign of anxiety would you like to take a test?<br>(Please Type "yes" or "no")';
                  botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of anxiety would you like to take a test?<br>(Please Type "yes" or "no")</span></p>';
                  $("#chatbox").append(botHtml);   
                }
                else if(st > de && st > an){                
                  str_flag = true;
                  record = 'Based on what i found. You seem to be having a sign of stress would you like to take a test?<br>(Please Type "yes" or "no")';
                  botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of stress would you like to take a test?<br>(Please Type "yes" or "no")</span></p>';
                  $("#chatbox").append(botHtml);   
                }
                else if(de > st && de > an){                
                  dep_flag = true;
                  record = 'Based on what i found. You seem to be having a sign of depression would you like to take a test?<br>(Please Type "yes" or "no")';
                  botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of depression would you like to take a test?<br>(Please Type "yes" or "no")</span></p>';
                  $("#chatbox").append(botHtml);   
                }
                else{            
                    
                  botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having normal issues that far from depression, anxiety and stress</span></p>';
                  var newHtml = '<br><p class="botText"><span>How would you like to proceed?<br>A.)Choose a test<br>B.)Give out symptom</span></p>';
                  record = botHtml + newHtml; 
                  $("#chatbox").append(botHtml, newHtml);   
                }
              }
              $.get("/record_botText", { bottext: record }).done(function(data) {
                console.log(data);
              });
            }
            document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
          });
        }
        else if(testFlag === true && cont == true && okay2 == true){
          //alert("no")
          if(currentTest < 7 && typeTest == "anxiety"){
            nextQuestion(rawText);
            getAnxQuestion(); 
          }
          else if(currentTest >= 7 && typeTest == "anxiety"){
            console.log("entered else if anxiety");
            nextQuestion(rawText);
            record ="Please Wait...";
            botHtml = "<p class='botText'><span>"+record+" </span></p>";
            $("#chatbox").append(botHtml);
            document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
            $.get("/record_botText", { bottext: record }).done(function(data) {
              console.log(data);
            });
            getFuzz();
            anx_flag = false;
          }
          else if(currentTest < 7 && typeTest == "stress"){
            nextQuestion(rawText);
            getStrQuestion(); 
          }
          else if(currentTest >= 7 && typeTest == "stress"){
            console.log("entered else if stress");
            nextQuestion(rawText);
            record ="Please Wait...";
            botHtml = "<p class='botText'><span>"+record+" </span></p>";
            $("#chatbox").append(botHtml);
            document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
            $.get("/record_botText", { bottext: record }).done(function(data) {
              console.log(data);
            });
            getFuzz();
            str_flag = false;
          }
          else if(currentTest < 7 && typeTest == "depression"){
            nextQuestion(rawText);
            getDepQuestion(); 
          }
          else if(currentTest >= 7 && typeTest == "depression"){
            console.log("entered else if depression");
            nextQuestion(rawText);
            record ="Please Wait...";
            botHtml = "<p class='botText'><span>"+record+" </span></p>";
            $("#chatbox").append(botHtml);
            document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
            $.get("/record_botText", { bottext: record }).done(function(data) {
              console.log(data);
            });
            getFuzz();
            dep_flag = false;
          }
          else{
            alert("entered else "+ typeTest);
          }
          
          if(rawText.toUpperCase() == 'EXIT' || rawText.toUpperCase() == 'STOP' || rawText.toUpperCase() == 'QUIT' || rawText.toUpperCase() == 'END'){
            testFlag = false;
            currentTest = 0;
            record = "Hi " + username +"! How can i help you?";
            totalscore = 0;
            botHtml = '<br><p class="botText"><span> Hi ' + username +'! How can i help you?</span></p>';
            $("#chatbox").append(botHtml);
            document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
            $.get("/record_botText", { bottext: record }).done(function(data) {
              console.log(data);
            });
          }
        }
        else if(rawText.toLowerCase() == "continue" && okay2 == false){
          cont = true;
          record ="Each test consists of series of questions which should be answered honeslty.<br>(Please type 'ok' if you agree)";
          botHtml = "<br><p class='botText'><span> Each test consists of series of questions which should be answered honeslty.<br>(Please type 'ok' if you agree)</span></p>";
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
          $.get("/record_botText", { bottext: record }).done(function(data) {
            console.log(data);
          });
        } 
        else if((rawText.toLowerCase() == "ok" || rawText.toLowerCase() == "okay") && cont == true && okay2 == false){
          okay2 = true;
          school = true;
          record = "Oh that's good to hear. So how's school nowadays?";
          botHtml = "<br><p class='botText'><span> Oh that's good to hear. So how's school nowadays?</span></p>";
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
          $.get("/record_botText", { bottext: record }).done(function(data) {
            console.log(data);
          });
        }
        else if((rawText.toLowerCase() == "no" || rawText.toLowerCase() == "nope") && no == false){
          no = true;
          record="are u sure you dont want to proceed?";
          botHtml = "<br><p class='botText'><span> are u sure you dont want to proceed?</span></p>";
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
          $.get("/record_botText", { bottext: record }).done(function(data) {
            console.log(data);
          });
        }
        else if(rawText.toLowerCase() == "yes" && no == true ){
          record = "Okay "+ username +" Thank you for your time and have a good day 😊"
          botHtml = "<br><p class='botText'><span> Okay "+ username +" Thank you for your time and have a good day 😊</span></p>";
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});   
          $.get("/record_botText", { bottext: record }).done(function(data) {
            console.log(data);
          });       
        }
        else if(rawText.toLowerCase() == "no" && no == true ){
          no = false;
          if (cont == false){
            record = "(Please Type 'continue' if you want to proceed)";
            botHtml = "<p class='botText'><span><br>"+record+"</span></p>";
          }
          else{
            record = "(Please type 'ok' if you agree)";
            botHtml = "<p class='botText'><span>(Please type 'ok' if you agree)</span></p>";
          }
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
          $.get("/record_botText", { bottext: record }).done(function(data) {
            console.log(data);
          });
        }
        else{
          invalid_botHtml = "<p class='botText'><span> I'm sorry but i cannot understand you. If you want to continue please type according to the instruction or type 'exit' if you want to stop this conversation</span></p>"
          if (cont == false){
            record = "(Please Type 'continue' if you want to proceed)";
            botHtml = "<p class='botText'><span><br>"+record+"</span></p>";
          }
          else{
            record = "Is that okay? (Please type 'ok' if you agree)";
            botHtml = "<p class='botText'><span>"+record+"</span></p>";
          }          
          $("#chatbox").append(invalid_botHtml,botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
          record = "I'm sorry but i cannot understand you. If you want to continue please type according to the instruction or type 'exit' if you want to stop this conversation. "+record;
          $.get("/record_botText", { bottext: record }).done(function(data) {
            console.log(data);
          });
        }
        
      }
      
    }
    else if(okay == false){
      if(rawText.toLowerCase() == 'ok' || rawText.toLowerCase() == "okay"){
        okay = true;
        record= "That's good. What should i call you?<br>(Please Enter your name in one word)"
        botHtml = "<p class='botText'><span> "+record+"</span></p>";
        $("#chatbox").append(botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      }
      else{
        okay = false;
        record = "I'm sorry but you need to agree first before proceeding. <br>(Type 'ok' if you agree)"
        invalid_botHtml = "<p class='botText'><span> I'm sorry but you need to agree first before proceeding.</span></p>"
        botHtml = "<p class='botText'><span>Is that okay?(Type 'ok' if you agree)</span></p>";
        $("#chatbox").append(invalid_botHtml,botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      }
      $.get("/record_botText", { bottext: record }).done(function(data) {
        console.log(data);
      });
    }
    console.log(data);
  });
  
  
}

$("#textInput").keypress(function(e) {
      if(e.which == 13) {        
          getBotResponse();
      }
});

function nextQuestion(answers){
  
  if(answers.toUpperCase() == 'A'){
    totalscore = totalscore + 0;
    console.log(totalscore)   
    $.get("/answer", { ans: 1 }).done(function(data) {
      console.log(data)
    });   
  }
  else if(answers.toUpperCase() == 'B'){
    totalscore = totalscore + 1;
    console.log(totalscore)  
    $.get("/answer", { ans: 3 }).done(function(data) {
      console.log(data)
    });    
  }
  else if(answers.toUpperCase() == 'C'){
    totalscore = totalscore + 2;
    console.log(totalscore)  
    $.get("/answer", { ans: 5 }).done(function(data) {
      console.log(data)
    });   
  }
  else if(answers.toUpperCase() == 'D'){  
    totalscore = totalscore + 3;
    console.log(totalscore)  
    $.get("/answer", { ans: 7 }).done(function(data) {
      console.log(data)
    });
  }
  else{
    currentTest--;
    record = 'Invalid answer. please choose your answer only in the selection';
    var invalid = '<br><p class="botText"><span> Invalid answer. please choose your answer only in the selection </span></p>';
    $("#chatbox").append(invalid);
    document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    $.get("/record_botText", { bottext: record }).done(function(data) {
      console.log(data);
    });
  }
}

function getFuzz(){
  console.log(totalscore)
  $.get("/fuzz", { test: typeTest }).done(function(data) {
    totalscore*2;
    if(data.toLowerCase() == "normal" ){
      if(typeTest == "anxiety"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you have no or very few symptoms of anxiety. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you have no or very few symptoms of anxiety. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.</span></p>';
      }
      else if(typeTest == "stress"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a low sensitive to stress-induced health issues. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with have the same situation as you so that you can talk openly about your feelings. This can help you control your worries.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a low sensitive to stress-induced health issues. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with have the same situation as you so that you can talk openly about your feelings. This can help you control your worries.</span></p>';
      }
      else{
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you have no or very few symptoms of depression. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you have no or very few symptoms of depression. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.</span></p>';
      }
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else if(data.toLowerCase() == "mild" ){
      if(typeTest == "anxiety"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of mild anxiety. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of mild anxiety. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.</span></p>';
      }
      else if(typeTest == "stress"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a mild sensitive to stress-induced health issues. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider joining a support group for people with have the same situation as you so that you can talk openly about your feelings. This can help you control your worries.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a mild sensitive to stress-induced health issues. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider joining a support group for people with have the same situation as you so that you can talk openly about your feelings. This can help you control your worries.</span></p>';
      }
      else{
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.</span></p>';
      }
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else if(data.toLowerCase() == "moderate" ){
      if(typeTest == "anxiety"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderate anxiety. Based on your answers, living with these symptoms could be causing difficulty managing relationships and even the tasks of your everyday life. These results do not mean that you have anxiety, but you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderate anxiety. Based on your answers, living with these symptoms could be causing difficulty managing relationships and even the tasks of your everyday life. These results do not mean that you have anxiety, but you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.</span></p>';
      }
      else if(typeTest == "stress"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a moderate sensitive to stress-induced health issues if the sources of stress are not resolved. These results do not mean that you will get stress-related illness, but it may be time to start a conversation with a mental health professional. Or you might also consider joining a support group for people with have the same situation as you so that you can talk openly about your feelings. Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a moderate sensitive to stress-induced health issues if the sources of stress are not resolved. These results do not mean that you will get stress-related illness, but it may be time to start a conversation with a mental health professional. Or you might also consider joining a support group for people with have the same situation as you so that you can talk openly about your feelings. Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      else{
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderate depression. Based on your answers, living with these symptoms could be causing difficulty managing relationships and even the tasks of your everyday life. These results do not mean that you have depression, but you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderate depression. Based on your answers, living with these symptoms could be causing difficulty managing relationships and even the tasks of your everyday life. These results do not mean that you have depression, but you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.</span></p>';
      }
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else if(data.toLowerCase() == "severe" ){
      if(typeTest == "anxiety"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of severe anxiety. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have anxiety, but you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of severe anxiety. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have anxiety, but you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.</span></p>';
      }
      else if(typeTest == "stress"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to stress-induced health issues if the sources of stress are not addressed or managed. The result of your test does not mean that you will get stress-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to stress-induced health issues if the sources of stress are not addressed or managed. The result of your test does not mean that you will get stress-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
        }
      else{
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of severe depression. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have depression, but you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.';
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of severe depression. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have depression, but you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.</span></p>';
      
      }
      $("#chatbox").append(botHtml,recommendation,'<br><p class="botText"><span> REMEMBER: TRY NOT TO DELAY YOUR TREATMENT. THE EARLIER YOU BEGIN, THE MORE EFFECTIVE IT WILL BE.</span></p>');
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else if(data.toLowerCase() == "very severe" ){
      if(typeTest == "anxiety"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to anxiety-induced health issues if the sources of anxiety are not addressed or managed. The result of your test does not mean that you will get anxiety-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.'
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to anxiety-induced health issues if the sources of anxiety are not addressed or managed. The result of your test does not mean that you will get anxiety-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      else if(typeTest == "stress"){
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to stress-induced health issues if the sources of stress are not addressed or managed. The result of your test does not mean that you will get stress-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.'
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to stress-induced health issues if the sources of stress are not addressed or managed. The result of your test does not mean that you will get stress-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      else{
        record = 'Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderately severe depression. Based on your answers, these symptoms are causing difficulty managing with relationships and even the tasks of everyday life. The result of your test does not mean that you have depression but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.'
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderately severe depression. Based on your answers, these symptoms are causing difficulty managing with relationships and even the tasks of everyday life. The result of your test does not mean that you have depression but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      $("#chatbox").append(botHtml,recommendation,'<br><p class="botText"><span> REMEMBER: TRY NOT TO DELAY YOUR TREATMENT. THE EARLIER YOU BEGIN, THE MORE EFFECTIVE IT WILL BE.</span></p>');
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      record = record +" "+ recommendation + " REMEMBER: TRY NOT TO DELAY YOUR TREATMENT. THE EARLIER YOU BEGIN, THE MORE EFFECTIVE IT WILL BE.";
      $.get("/record_botText", { bottext: record }).done(function(data) {
        console.log(data);
      });
    }
    totalscore = 0;
    currentTest = 0;
    testFlag = false;
  });
  
}

function getAnxQuestion(){
  const currentTestData = anx[currentTest];
  botHtml = '<br><p class="botText"><span>' + currentTestData.question +'<br> A.) '+currentTestData.a+'<br> B.) '+currentTestData.b+'<br> C.) '
                +currentTestData.c+ '<br> D.) '+currentTestData.d+'</span></p>';
  $("#chatbox").append(botHtml);
  document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  record = currentTestData.question +'<br> A.) '+currentTestData.a+'<br> B.) '+currentTestData.b+'<br> C.) '
  +currentTestData.c+ '<br> D.) '+currentTestData.d;
  $.get("/record_botText", { bottext: record }).done(function(data) {
    console.log(data);
  });
  currentTest++;

} 
function getStrQuestion(){
 
  const currentTestData = stress[currentTest];
  botHtml = '<br><p class="botText"><span>' + currentTestData.question +'<br> A.) '+currentTestData.a+'<br> B.) '+currentTestData.b+'<br> C.) '
                +currentTestData.c+ '<br> D.) '+currentTestData.d+'</span></p>';
  $("#chatbox").append(botHtml);
  document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  record = currentTestData.question +'<br> A.) '+currentTestData.a+'<br> B.) '+currentTestData.b+'<br> C.) '
  +currentTestData.c+ '<br> D.) '+currentTestData.d;
  $.get("/record_botText", { bottext: record }).done(function(data) {
    console.log(data);
  });
  currentTest++;
  
} 
function getDepQuestion(){ 
  const currentTestData = dep[currentTest];
  botHtml = '<br><p class="botText"><span>' + currentTestData.question +'<br> A.) '+currentTestData.a+'<br> B.) '+currentTestData.b+'<br> C.) '
                +currentTestData.c+ '<br> D.) '+currentTestData.d+'</span></p>';
  $("#chatbox").append(botHtml);
  document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  record = currentTestData.question +'<br> A.) '+currentTestData.a+'<br> B.) '+currentTestData.b+'<br> C.) '
  +currentTestData.c+ '<br> D.) '+currentTestData.d;
  $.get("/record_botText", { bottext: record }).done(function(data) {
    console.log(data);
  });
  currentTest++;
  
} 
document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});