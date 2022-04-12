function result(s, total){
    modal2.style.display = 'none';
    diagnose.style.display = 'block';  
    
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");
    
    let progressValue = 0;
    let progressEndValue = 0;
    let speed = 50;
    progressEndValue = (s/total) * 100;
    diagnosed(score);
    let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent =`${s} out of ${total}`;
    progressBar.style.background = `conic-gradient(
        #008799 ${progressValue * 3.6}deg,
        #00BDC9 ${progressValue * 3.6}deg
    )`;
    if (progressValue == parseInt(progressEndValue)) {
        clearInterval(progress);
    }
    }, speed);
    
}
function diagnosed(value){
    let h1 = document.getElementById("diagnose");
    let p = document.getElementById("p");
    if(value >=0 && value <=7 && test == "anxiety"){
        h1.innerText = "Normal";
        p.innerText = "The result of your test indicates that you have no or very few symptoms of anxiety. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.";
    }
    else if(value >=8 && value <=9 && test == "anxiety"){
        h1.innerText = "Mild";
        p.innerText = "The result of your test indicates that you may be experiencing symptoms of mild anxiety. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.";
    }
    else if(value >=10 && value <=14 && test == "anxiety"){
        h1.innerText = "Moderate";
        p.innerText = "The result of your test indicates that you may be experiencing symptoms of moderate anxiety. Based on your answers, living with these symptoms could be causing difficulty managing relationships and even the tasks of your everyday life. These results do not mean that you have anxiety, but you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.";
    }
    else if(value >=15 && value <=19 && test == "anxiety"){
        h1.innerText = "Severe";
        p.innerText = "The result of your test indicates that you may be experiencing symptoms of severe anxiety. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have anxiety, but you might also consider seeing a therapist or joining a support group for people with anxiety so that you can talk openly about your anxiety. This can help you control your worries and get to the bottom of what triggers your anxiety.";
    }
    else if(value >=20 && test == "anxiety") {
        h1.innerText = "Extremely Severe";
        p.innerText = "Score in this range show a large amount of life change and a high sensitive to anxiety-induced health issues if the sources of anxiety are not addressed or managed. The result of your test does not mean that you will get anxiety-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.";
    }
    else if (value >=0 && value <=14 && test == "stress"){
        h1.innerText = "Normal";
        p.innerText = "The score of your test show a relatively low amount of life change and a low sensitive to stress-induced health issues. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with have the same situation as you so that you can talk openly about your feelings. This can help you control your worries.";
    }
    else if (value >=15 && value <=18 && test == "stress"){
        h1.innerText = "Mild";
        p.innerText = "The score of your test show a relatively low amount of life change and a mild sensitive to stress-induced health issues. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider joining a support group for people with have the same situation as you so that you can talk openly about your feelings. This can help you control your worries.>";
    }
    else if (value >=19 && value <=25 && test == "stress"){
        h1.innerText = "Moderate";
        p.innerText = "The score of your test show a relatively low amount of life change and a moderate sensitive to stress-induced health issues if the sources of stress are not resolved. These results do not mean that you will get stress-related illness, but it may be time to start a conversation with a mental health professional. Or you might also consider joining a support group for people with have the same situation as you so that you can talk openly about your feelings. Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.";
    }
    else if (value >=26 && value <=33 && test == "stress"){
        h1.innerText = "Severe";
        p.innerText = "Score in this range show a large amount of life change and a high sensitive to stress-induced health issues if the sources of stress are not addressed or managed. The result of your test does not mean that you will get stress-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.";
    }
    else if (value >=34 && test == "stress"){
        h1.innerText = "Extremely Severe";
        p.innerText = "Score in this range show a large amount of life change and a high sensitive to stress-induced health issues if the sources of stress are not addressed or managed. The result of your test does not mean that you will get stress-related illness but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.";
    }
    else if (value >=0 && value <=9 && test == "depression"){
        h1.innerText = "Normal";
        p.innerText = "The result of your test indicates that you have no or very few symptoms of depression. But if you notice that your symptoms aren’t improving or get worse, you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.";
    }
    else if (value >=10 && value <=13 && test == "depression"){
        h1.innerText = "Mild";
        p.innerText = "The result of your test indicates that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, I will remind you that it is important to monitor them or you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.";
    }
    else if (value >=14 && value <=20 && test == "depression"){
        h1.innerText = "Moderate";
        p.innerText = "The result of your test indicates that you may be experiencing symptoms of moderate depression. Based on your answers, living with these symptoms could be causing difficulty managing relationships and even the tasks of your everyday life. These results do not mean that you have depression, but you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.";
    }
    else if (value >=21 && value <=27 && test == "depression"){
        h1.innerText = "Severe";
        p.innerText = "The result of your test indicates that you may be experiencing symptoms of severe depression. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have depression, but you might also consider seeing a therapist or joining a support group for people with depression so that you can talk openly about your depression. This can help you control your worries and get to the bottom of what triggers your depression.";
    }
    else if (value >=28 && test == "depression"){
        h1.innerText = "Extremely Severe";
        p.innerText = "The result of your test indicates that you may be experiencing symptoms of moderately severe depression. Based on your answers, these symptoms are causing difficulty managing with relationships and even the tasks of everyday life. The result of your test does not mean that you have depression but it MAY BE TIME TO START A CONVERSATION WITH A MENTAL HEALTH PROFESSIONAL.  Finding the right treatment plan and working with a psychiatrist can help you to diagnose and manage your symptoms.";
    }
}