var typeTest;
var currentTest = 0;
var totalscore = 0;
var botHtml;
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
  
  if(okay == true){
    if(username == null){
      
      if(rawText.toLowerCase().includes("call me")){
        rawText = rawText.split(" ");
        username = 'Hello '+rawText[rawText.length-1]+". Before we proceed i would like to know that like you, we know that mental health conditions are real and treatable.<br>The test in this software has gone through process of psychiametric validation that's why we can guarantee you that this is the quickest way to determine whether you are experiencing some symptoms of a specific mental health condition.<br>(Please Type 'continue' if you want to proceed).";
        botHtml = '<br><p class="botText"><span> '+ username +' </span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      }
      else{
        rawText = rawText.split(" ");
        if(rawText.length == 1){
          username =  rawText[rawText.length-1];
          botHtml = '<br><p class="botText"><span>Hello '+ username +'. Before we proceed i would like to know that like you, we know that mental health conditions are real and treatable.<br>The test in this software has gone through process of psychiametric validation that\'s why we can guarantee you that this is the quickest way to determine whether you are experiencing some symptoms of a specific mental health condition.<br>(Please Type \'continue\' if you want to proceed).</span></p>';
          
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
        }
        else {
          botHtml = '<br><p class="botText"><span> Invalid Input! </span></p>';
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
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
            if(data == "Please choose a specific type of test"){
              tests = "<br>1.Anxiety Test<br>2.Stress Test<br>3.Depression Test"
              botHtml = '<br><p class="botText"><span>' + data + tests + '</span></p>';
              $("#chatbox").append(botHtml);
            }
            else if(data == "anxietytest" || (anx_flag == true && yes == true)) {
              testFlag = true;
              typeTest = "anxiety";
              botHtml = '<br><p class="botText style="color: red;"><span> Anxiety Test.<br>Instruction: please enter the letter of your answer. </span></p>';
              $("#chatbox").append(botHtml);
              getAnxQuestion();
            }
            else if(data == "stresstest" || (str_flag == true && yes == true)) {
              testFlag = true;
              typeTest = "stress";
              botHtml = '<br><p class="botText style="color: red;"><span> Stress Test.<br>Instruction: please enter the letter of your answer. </span></p>';
              $("#chatbox").append(botHtml);
              getStrQuestion();
            }
            else if(data == "depressiontest" || (dep_flag == true && yes == true)) {
              testFlag = true;
              typeTest = "depression";
              botHtml = '<br><p class="botText" style="color: red;"><span> depression Test.<br>Instruction: please enter the letter of your answer. </span></p>';
              $("#chatbox").append(botHtml);
              getDepQuestion();
            }
            else if(data == "greetings"){            
              botHtml = '<br><p class="botText"><span>' + username+ '</span></p>';
              $("#chatbox").append(botHtml);
            }
            else if(data == "quit"){
              botHtml = '<br><p class="botText"><span>School can be quite stressful and fun at the same time. With that in mind, I am here to help you with whatever you are going through. How would you like to proceed? <br><br> *Choose a test<br>*Give out symptom to chatbot for assessment </span></p>';
              $("#chatbox").append(botHtml);          
            }
            else if(data == "give"){
              give = true;
              botHtml = '<br><p class="botText"><span>(Give atleast 5 unusual things that you are feeling for the past 7 days)</span></p>';
              $("#chatbox").append(botHtml);   
            }
            else if(data == "positive"){
              botHtml = '<br><p class="botText"><span>That\'s good to hear!. Would you like to try some of the options below? <br><br> *Choose a test<br>*Give out symptom to chatbot for assessment </span></p>';
              $("#chatbox").append(botHtml);   
            }
            else if(data == "depression"){
              dep_flag = true;
              botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of depression would you like to take a test?</span></p>';
              $("#chatbox").append(botHtml);   
            }
            else if(data == "anxiety"){
              anx_flag = true;
              botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of anxiety would you like to take a test?</span></p>';
              $("#chatbox").append(botHtml);   
            }
            else if(data == "stress"){
              str_flag = true;
              botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of stress would you like to take a test?</span></p>';
              $("#chatbox").append(botHtml);   
            }
            else {         
              botHtml = "<br><p class='botText'><span>I'm sorry I didn't get that.As I am still learning. Could you please try again?</span></p>";
              $("#chatbox").append(botHtml);
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
              botHtml = '<br><p class="botText"><span>'+count+' more to go</span></p>';
              $("#chatbox").append(botHtml);
            }
            else if(count == 0){
              if(an > st && an > de){
                give = false;
                anx_flag = true;
                botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of anxiety would you like to take a test?</span></p>';
                $("#chatbox").append(botHtml);   
              }
              else if(st > de && st > an){
                give = false;
                str_flag = true;
                botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of stress would you like to take a test?</span></p>';
                $("#chatbox").append(botHtml);   
              }
              else if(de > st && de > an){
                give = false;
                dep_flag = true;
                botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having a sign of depression would you like to take a test?</span></p>';
                $("#chatbox").append(botHtml);   
              }
              else{
                give = false;
                botHtml = '<br><p class="botText"><span>Based on what i found. You seem to be having other issues that far from those three</span></p>';
                $("#chatbox").append(botHtml);   
              }
            }
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
          getFuzz();
          dep_flag = false;
        }
        else{
          alert("entered else "+ typeTest);
        }
  
        if(rawText.toUpperCase() == 'EXIT' || rawText.toUpperCase() == 'STOP' || rawText.toUpperCase() == 'QUIT' || rawText.toUpperCase() == 'END'){
          testFlag = false;
          currentTest = 0;
          
          totalscore = 0;
          botHtml = '<br><p class="botText"><span> Hi ' + username +'! How can i help you?</span></p>';
          $("#chatbox").append(botHtml);
          document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
        }
      }
      else if(rawText.toLowerCase() == "continue" && okay2 == false){
        cont = true;
        botHtml = "<br><p class='botText'><span> Each test consists of series of questions which should be answered honeslty.<br>(Please type 'ok' if you agree)</span></p>";
        $("#chatbox").append(botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      } 
      else if(rawText.toLowerCase() == "ok" && cont == true && okay2 == false){
        okay2 = true;
        botHtml = "<br><p class='botText'><span> Oh that's good to hear. So how's school nowadays?</span></p>";
        $("#chatbox").append(botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      }
      else if((rawText.toLowerCase() == "no" || rawText.toLowerCase() == "nope") && no == false){
        no = true;
        botHtml = "<br><p class='botText'><span> are u sure you dont want to proceed?</span></p>";
        $("#chatbox").append(botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      }
      else if(rawText.toLowerCase() == "yes" && no == true ){
        botHtml = "<br><p class='botText'><span> Okay "+ username +" Thank you for your time and have a good day 😊</span></p>";
        $("#chatbox").append(botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      }
      else if(rawText.toLowerCase() == "no" && no == true ){
        no = false;
        if (cont == false){
          botHtml = "<br><p class='botText'><span><br>(Please Type 'continue' if you want to proceed)</span></p>";
        }
        else{
          botHtml = "<br><p class='botText'><span>(Please type 'ok' if you agree)</span></p>";
        }
        $("#chatbox").append(botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      }
      else{
        invalid_botHtml = "<br><p class='botText'><span> I'm sorry but i cannot understand you. If you want to continue please type according to the instruction or type 'exit' if you want to stop this conversation</span></p>"
        if (cont == false){
          botHtml = "<br><p class='botText'><span><br>(Please Type 'continue' if you want to proceed)</span></p>";
        }
        else{
          botHtml = "<br><p class='botText'><span>Is that okay? (Please type 'ok' if you agree)</span></p>";
        }
        
        $("#chatbox").append(invalid_botHtml,botHtml);
        document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
      } 
    }
    
  }
  else if(okay == false){
    if(rawText.toLowerCase() == 'ok'){
      okay = true;
      botHtml = "<br><p class='botText'><span> That's good. What should i call you?</span></p>";
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else{
      okay = false;
      invalid_botHtml = "<br><p class='botText'><span> I'm sorry but you need to agree first before proceeding.</span></p>"
      botHtml = "<br><p class='botText'><span>Is that okay? <br>(Type 'ok' if you agree)</span></p>";
      $("#chatbox").append(invalid_botHtml,botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  }
  
  
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
    var invalid = '<br><p class="botText"><span> Invalid answer. please choose your answer only in the selection </span></p>';
    $("#chatbox").append(invalid + botHtml);
    document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  }
}

function getFuzz(){
  console.log(totalscore)
  $.get("/fuzz", { test: typeTest }).done(function(data) {
    if(data.toLowerCase() == "normal" ){
      if(typeTest == "anxiety"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you have no or very few symptoms of anxiety. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.</span></p>';
      }
      else if(typeTest == "stress"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a low sensitive to stress-induced health issues. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with have the same situation as you so that you can talk openly about your feelings. This can help you control your worries.</span></p>';
      }
      else{
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you have no or very few symptoms of depression. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.</span></p>';
      }
        $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else if(data.toLowerCase() == "mild" ){
      if(typeTest == "anxiety"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of mild anxiety. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.</span></p>';
      }
      else if(typeTest == "stress"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a mild sensitive to stress-induced health issues. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider joining a support group for people with have the same situation as you so that you can talk openly about your feelings. This can help you control your worries.</span></p>';
      }
      else{
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.</span></p>';
      }
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else if(data.toLowerCase() == "moderate" ){
      if(typeTest == "anxiety"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderate anxiety. Based on your answers, living with these symptoms could be causing difficulty managing relationships and even the tasks of your everyday life. These results do not mean that you have anxiety, but you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.</span></p>';
      }
      else if(typeTest == "stress"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The score of your test show a relatively low amount of life change and a moderate sensitive to stress-induced health issues if the sources of stress are not resolved. These results do not mean that you will get stress-related illness, but it may be time to start a conversation with a mental health professional. Or you might also consider joining a support group for people with have the same situation as you so that you can talk openly about your feelings. Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      else{
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderate depression. Based on your answers, living with these symptoms could be causing difficulty managing relationships and even the tasks of your everyday life. These results do not mean that you have depression, but you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.</span></p>';
      }
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else if(data.toLowerCase() == "severe" ){
      if(typeTest == "anxiety"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of severe anxiety. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have anxiety, but you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.</span></p>';
      }
      else if(typeTest == "stress"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to stress-induced health issues if the sources of stress are not addressed or managed. The result of your test does not mean that you will get stress-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      else{
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of severe depression. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have depression, but you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.</span></p>';
      }
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    else if(data.toLowerCase() == "very severe" ){
      if(typeTest == "anxiety"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to anxiety-induced health issues if the sources of anxiety are not addressed or managed. The result of your test does not mean that you will get anxiety-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      else if(typeTest == "stress"){
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>Score in this range show a large amount of life change and a high sensitive to stress-induced health issues if the sources of stress are not addressed or managed. The result of your test does not mean that you will get stress-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      else{
        botHtml = '<br><p class="botText"><span> Result: ' + data +"<br> Score: "+ totalscore+'<br><br>The result of your test indicates that you may be experiencing symptoms of moderately severe depression. Based on your answers, these symptoms are causing difficulty managing with relationships and even the tasks of everyday life. The result of your test does not mean that you have depression but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.</span></p>';
      }
      $("#chatbox").append(botHtml);
      document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
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

  currentTest++;

} 
function getStrQuestion(){
 
  const currentTestData = stress[currentTest];
  botHtml = '<br><p class="botText"><span>' + currentTestData.question +'<br> A.) '+currentTestData.a+'<br> B.) '+currentTestData.b+'<br> C.) '
                +currentTestData.c+ '<br> D.) '+currentTestData.d+'</span></p>';
  $("#chatbox").append(botHtml);
  document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  
  currentTest++;
  
} 
function getDepQuestion(){ 
  const currentTestData = dep[currentTest];
  botHtml = '<br><p class="botText"><span>' + currentTestData.question +'<br> A.) '+currentTestData.a+'<br> B.) '+currentTestData.b+'<br> C.) '
                +currentTestData.c+ '<br> D.) '+currentTestData.d+'</span></p>';
  $("#chatbox").append(botHtml);
  document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  
  currentTest++;
  
} 
document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});