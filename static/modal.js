// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var help = document.getElementById("helpBtn");
// Get the <span> element that closes the modal
var agree = document.getElementsByClassName("agree")[0];
var agree2 = document.getElementsByClassName("agree")[1];
// type of test
modal1.style.display = "block";
// When the user clicks on <span> (x), close the modal
agree.onclick = function() {
  modal1.style.display = "none";
}
agree2.onclick = function() {
  modal4.style.display = "none";
  score = 0;
  currentQuiz = 0;
}

// When user clicks the button, opens the modal
btn.onclick = function() {
  modal3.style.display = "block";
}

// When user clicks the button, opens the modal
help.onclick = function() {
  modal1.style.display = "block";
}


window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
    score = 0;
    currentQuiz = 0;
  }
}

