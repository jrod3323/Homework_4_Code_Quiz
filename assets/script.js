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

//Answer Section Elements
var answersEl = document.getElementById("answers");

//Quiz Question array

var questions = [
    {
        question: "Which is not a data type in Javascript",
        answer1: "String",
        answer2: "Boolean",
        answer3: "Numeral",
        answer4: "Letter",
        correct: "Letter",
    },

    {
        question: "Inside which",
        answer1: "a",
        answer2: "Boolean",
        answer3: "Numeral",
        answer4: "Letter",
        correct: "Letter",
    },

    {
        question: "Which is not a data type in Javascript",
        answer1: "b",
        answer2: "Boolean",
        answer3: "Numeral",
        answer4: "Letter",
        correct: "Letter",
    },

    {
        question: "Which is not a data type in Javascript",
        answer1: "c",
        answer2: "Boolean",
        answer3: "Numeral",
        answer4: "Letter",
        correct: "Letter",
    }
];

//initial question index
var questionIndex = 0;

//listens for click on answer button
answer1Btn.addEventListener("click",checkAnswer1 );
answer2Btn.addEventListener("click",checkAnswer2 );
answer3Btn.addEventListener("click",checkAnswer3 );
answer4Btn.addEventListener("click",checkAnswer4 );

var buttonClicked = document

//flips to next question
function nextQuestion(){
    changeStatement(); 
    questionIndex++;
    questionEl.textContent = questions[questionIndex].question;
    answer1Btn.textContent = questions[questionIndex].answer1;
    answer2Btn.textContent = questions[questionIndex].answer2;
    answer3Btn.textContent = questions[questionIndex].answer3;
    answer4Btn.textContent = questions[questionIndex].answer4; 
}
console.log(questions.length);

// Sets time and interval for timer
function setTime() {

    timerEl.textContent = 90;
    questionEl.textContent = questions[questionIndex].question;
    answer1Btn.textContent = questions[questionIndex].answer1;
    answer2Btn.textContent = questions[questionIndex].answer2;
    answer3Btn.textContent = questions[questionIndex].answer3;
    answer4Btn.textContent = questions[questionIndex].answer4;
    var timerInterval = setInterval(function() {
      timerEl.textContent--;
      
//if timer hits zero, stop timer and flips display
      if(timerEl.textContent == 0) {
        clearInterval(timerInterval);
        quizQuestionsEl.style.display = "none";
        finalScoreEl.style.display = "block";
      }
//   If all questions answered, stop timer and flip display
      else if(questionIndex>questions.length-1){
        clearInterval(timerInterval);
        quizQuestionsEl.style.display = "none";
        setTimeout(function(){
        finalScoreEl.style.display = "block";
        answersEl.style.display = "none"
        yourScoreEl.innerText = timerEl.innerText;
    },1500)
      }
  
    }, 1000);
}

//Flips display at quiz start and sets timer
function quizStart(){
    quizQuestionsEl.style.display = "flex"
    introEl.style.display = "none"
    setTime();
}

//Check the answer input; prints if you got it right or not, subtracts 10 seconds if wrong

var answerStatement = "";

function checkAnswer1(){
    var answer = (answer1Btn.innerText === questions[questionIndex].correct)
    if(answer){
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was correct!";
        answersEl.appendChild(answerStatement);
        answersEl.children[questionIndex].setAttribute("style","color: green")
    } else{
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was wrong!";
        answersEl.appendChild(answerStatement);
        timerEl.textContent = timerEl.textContent - 10 ;
        answersEl.children[questionIndex].setAttribute("style","color: red")
    }
    console.log(answer);
    nextQuestion();    
}

function checkAnswer2(){
    var answer = (answer2Btn.innerText === questions[questionIndex].correct)
    if(answer){
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was correct!";
        answersEl.appendChild(answerStatement);
        answersEl.children[questionIndex].setAttribute("style","color: green")
        if(questionIndex > 0){
        }
    } else{
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was wrong!";
        answersEl.appendChild(answerStatement);
        timerEl.textContent = timerEl.textContent - 10 ;
        answersEl.children[questionIndex].setAttribute("style","color: red")
    }
    console.log(answer);
    nextQuestion();     
}

function checkAnswer3(){
    var answer = (answer3Btn.innerText === questions[questionIndex].correct)
    if(answer){
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was correct!";
        answersEl.appendChild(answerStatement);
        answersEl.children[questionIndex].setAttribute("style","color: green")
    } else{
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was wrong!";
        answersEl.appendChild(answerStatement);
        timerEl.textContent = timerEl.textContent - 10 ;
        answersEl.children[questionIndex].setAttribute("style","color: red")
        }
    console.log(answer);
    nextQuestion();   
}

function checkAnswer4(){
    var answer = (answer4Btn.innerText === questions[questionIndex].correct)
    if(answer){
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was correct!";
        answersEl.appendChild(answerStatement); 
        answersEl.children[questionIndex].setAttribute("style","color: green")   
    } else{
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was wrong!";
        answersEl.appendChild(answerStatement);
        timerEl.textContent = timerEl.textContent - 10 ; 
        answersEl.children[questionIndex].setAttribute("style","color: red") 
    }
    console.log(answer);
    nextQuestion();    
}

// Function to make previous answer statement disappear
function changeStatement(){
    if(questionIndex != 0){
        answersEl.children[(questionIndex-1)].setAttribute("style","display:none")
    }
}


// setting up page reload when clicking go back at end of quiz
function reload(){
    location.reload();
}

goBackBtn.addEventListener("click",reload)

