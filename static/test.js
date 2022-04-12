const anx = [
    {
        question: "1. I was aware of dryness of my mouth",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
        
    },
    {
        question: "2. I experienced breathing difficulty (excessively rapid breathing, breathlessness in the absence of physical exertion)",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
        
    },
    {
        question: "3. I had a feeling of shakiness (eg, legs going to give way)",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "4. I found myself in situations that made me so anxious I was most relieved when they ended",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "5. I have a feeling of faintness",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "6. I perspired noticeably (eg, hands sweaty) in the absence of high temperatures or physical exertion",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "7. I felt scared without any good reason",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "8. I had difficulty in swallowing",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "9. I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "10. I felt I was close to panic",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: '11. I feared that i would be "thrown" by some trivial but unfamiliar task',
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "12. I felt terrified",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "13. I experienced trembling (eg, in the hands)",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
];

const stress = [
    {
        question: "1. I found myself getting upset by quite trivial things",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
        
    },
    {
        question: "2. I tended to over-react to situations",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
        
    },
    {
        question: "3. I found it difficult to relax",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "4. I found myself getting upset rather easily",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "5. I felt that I was using a lot of nervous energy",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "6. I found myself getting impatient when I was delayed in any way (eg, lifts, traffic lights, being kept waiting)",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "7. I felt that I was rather touchy",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "8. I found it hard to wind down",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "9. I found that I was very irritable",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "10. I found it hard to calm down after something upset me",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: '11. I found it difficult to tolerate interruptions to what I was doing',
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "12. I was in a state of nervous tension",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "13. I was intolerant of anything that kept me from getting on with what I was doing",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "14. I found myself getting agitated",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
];

const dep = [
    {
        question: "1. I couldn't seem to experience any positive feeling at all.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
        
    },
    {
        question: "2. I just couldn't seem to get going.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
        
    },
    {
        question: "3. I felt that I had nothing to look forward to.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "4. I felt sad and depressed.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "5. I felt that I had lost interest in just about everything.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "6. I felt I wansn't worth much as a person.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time.",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "7. I felt that life wasn't worthwhile.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "8. I couldn't seem to get any enjoyment out of the things I did.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "9. I felt down-hearted and blue.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "10. I was unable to become enthusiastic about anything.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "11. I felt I was pretty worthless.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "12. I could see nothing in the future to be hopeful about.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "13. I felt that life was meaningless.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
    {
        question: "14. I found it difficult to work up the initiative to do things.",
        a: "Did not apply to me at all",
        b: "Applied to me to some degree, or some of the time",
        c: "Applied to me to a considerable degree, or a good part of the time",
        d: "Applied to me very much, or most of the time",
    },
];

const diagnose = document.getElementById("myModal4");
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const a = document.getElementById("anx");
const s = document.getElementById("stress");
const d = document.getElementById("dep");
var test;


a.onclick = function() {
  test = "anxiety";
  modal3.style.display = "none";
  modal2.style.display = "block";
  loadQuiz();
}
s.onclick = function() {
  test = "stress";
  modal3.style.display = "none";
  modal2.style.display = "block";
  loadQuiz2();
}
d.onclick = function() {
  test = "depression";
  modal3.style.display = "none";
  modal2.style.display = "block";
  loadQuiz3();
}

let currentQuiz = 0
let score = 0


function loadQuiz() {
    document.getElementById("typeOfTest").innerHTML = "Anxiety Test";
    deselectAnswers()
    const currentQuizData = anx[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function loadQuiz2() {
    document.getElementById("typeOfTest").innerHTML = "Stress Test";
    deselectAnswers()
    const currentQuizData = stress[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function loadQuiz3() {
    document.getElementById("typeOfTest").innerHTML = "Depression Test";
    deselectAnswers()
    const currentQuizData = dep[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === "a"){
            score = score + 0;
        }
        else if(answer === "b"){
            score = score + 1;
        }
        else if(answer === "c"){
            score = score + 2;
        }
        else if(answer === "d"){
            score = score + 3;
        }
        currentQuiz++

        if(currentQuiz < anx.length && test == "anxiety") {           
            loadQuiz()
            
        }else if (currentQuiz < stress.length && test == "stress") {
            loadQuiz2()
        }
        else if (currentQuiz < dep.length && test == "depression") {
            loadQuiz3()
        }
        
        if(currentQuiz >= anx.length && test == "anxiety") {            
            result(score, 39);
            diagnosed(score);
            score= 0;
            currentQuiz = 0;
        } else if (currentQuiz >=stress.length && test == "stress") {
            result(score, 42);
            diagnosed(score);
            score= 0;
            currentQuiz = 0;
        }
        else if (currentQuiz >= dep.length && test == "depression") {
            alert(score);           
            result(score, 42);
            score= 0;
            currentQuiz = 0;
        }

    }
})

