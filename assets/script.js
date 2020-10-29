// header element
var timerEl = document.getElementById("timer");

// Intro Secetion elements and buttons
var quizStartBtn = document.getElementById("quizStart");
var introEl = document.getElementById("intro");

// Quiz Questions Section Elements and buttons
var quizQuestionsEl = document.getElementById("quiz-questions");
var answer1Btn = document.getElementById("answer1");
var answer2Btn = document.getElementById("answer2");
var answer3Btn = document.getElementById("answer3");
var answer4Btn = document.getElementById("answer4");
var questionEl = document.getElementById("question");

// Final Score Sections Elements and Buttons
var yourScoreEl = document.getElementById("yourScore");
var submitScoreBTN = document.getElementById("submitScore");
var finalScoreEl = document.getElementById("finalScore");
var goBackBtn = document.getElementById("goBack");

quizStartBtn.addEventListener("click",quizStart);

function quizStart(event){
    quizQuestionsEl.style.display = "flex"
    introEl.style.display = "none"
}

