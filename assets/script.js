var quizStartEl = document.getElementById("quizStart");
var introEl = document.getElementById("intro");
var quizQuestionsEl = document.getElementById("quiz-questions");


quizStartEl.addEventListener("click",quizStart);

function quizStart(event){
    quizQuestionsEl.style.display = "flex"
    introEl.style.display = "none"
}

