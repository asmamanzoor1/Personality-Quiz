var SpongebobScore = 0;
var SquidwardScore = 0;

var questionCount = 0;

var result = document.getElementById("result")

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", Spongebob);
q1a2.addEventListener("click", Squidward);

q2a1.addEventListener("click", Squidward);
q2a2.addEventListener("click", Spongebob);

q3a1.addEventListener("click", Squidward);
q3a2.addEventListener("click", Spongebob);

restart.addEventListener("click", restartQuiz);

function Spongebob() {
  SpongebobScore = SpongebobScore + 1
  questionCount = questionCount + 1
  console.log("questionCount = " + questionCount + " SpongebobScore = " + SpongebobScore);
  if (questionCount == 3) {
    console.log("You have completed the quiz!");
  updateResult();
  }
}



function Squidward() {
  SquidwardScore = SquidwardScore + 1
  questionCount = questionCount + 1
  console.log("questionCount = " + questionCount + " SquidwardScore = " + SquidwardScore);
  if (questionCount == 3) {
    console.log("You have completed the quiz!")
  updateResult();
  }
}
function updateResult (){
  if (SpongebobScore >= 2){
    result.innerHTML = "You are Spongebob!";
  console.log ("You are Spongebob!");
} else if (SquidwardScore >= 2){
    result.innerHTML = "You are Squidward!";
  console.log("You are Squidward!");
}
}

function restartQuiz() {
  result.innerHTML = "You are ...";
  questionCount = 0;
  SpongebobScore = 0;
  SquidwardScore = 0;
  console.log("questionCount = " + questionCount +  "SquidwardScore = " + SquidwardScore +   "SpongebobScore = " + SpongebobScore);
  enableQuestions();
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);


function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}


function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
}
