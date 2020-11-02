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
var inputInitialsFrm = document.getElementById("inputInitials");

quizStartBtn.addEventListener("click",quizStart);

var scores = [];

//Answer Section Elements
var answersEl = document.getElementById("answers");

//Sounds variables

var good = document.getElementById("good")

var bad = document.getElementById("bad")

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
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "<scripting>",
        answer2: "<script>",
        answer3: "<javascript>",
        answer4: "<js>",
        correct: "<script>",
    },

    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        answer1: "<script src='xx.js'>",
        answer2: "<script name='xxx.js'>",
        answer3: "<script href='xxx.js'>",
        answer4: "<script lnk='xxx.js'>",
        correct: "<script src='xx.js'>",
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        answer1: "msg('Hello World')",
        answer2: "msgBox('Hello World')",
        answer3: "alertBox('Hello World')",
        answer4: "alert('Hello World')",
        correct: "alert('Hello World')",
    },
    {
        question: "How do you create a function in JavaScript",
        answer1: "function:myFunction()",
        answer2: "function = myFunction()",
        answer3: "function myFunction()",
        answer4: "function()",
        correct: "function myFunction()",
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
        answersEl.children[questionIndex].setAttribute("style","color: green");
        good.play();
    } else{
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was wrong!";
        answersEl.appendChild(answerStatement);
        timerEl.textContent = timerEl.textContent - 10 ;
        answersEl.children[questionIndex].setAttribute("style","color: red");
        bad.play();
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
        answersEl.children[questionIndex].setAttribute("style","color: green");
        good.play();
        if(questionIndex > 0){
        }
    } else{
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was wrong!";
        answersEl.appendChild(answerStatement);
        timerEl.textContent = timerEl.textContent - 10 ;
        answersEl.children[questionIndex].setAttribute("style","color: red");
        bad.play();
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
        answersEl.children[questionIndex].setAttribute("style","color: green");
        good.play();
    } else{
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was wrong!";
        answersEl.appendChild(answerStatement);
        timerEl.textContent = timerEl.textContent - 10 ;
        answersEl.children[questionIndex].setAttribute("style","color: red");
        bad.play();
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
        answersEl.children[questionIndex].setAttribute("style","color: green");
        good.play();   
    } else{
        answerStatement = document.createElement("p");
        answerStatement.textContent = "Your Answer for question "+(questionIndex+1)+" was wrong!";
        answersEl.appendChild(answerStatement);
        timerEl.textContent = timerEl.textContent - 10 ; 
        answersEl.children[questionIndex].setAttribute("style","color: red");
        bad.play();
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

//storing scores in local storage

//gets previously stored scores
function getStored(){
    var storedScores = JSON.parse(localStorage.getItem("scoreEntry"));
    
        if(storedScores){
        scores.push(storedScores);
        }
}
getStored();

//function to add new scores
function addScore(){

    newScore = {
        initials : userInitials.value,
        score : yourScoreEl.innerText,
    }

    scores.push(newScore)
    localStorage.setItem("scoreEntry", JSON.stringify(scores))
};

// runs add score on click of submit
submitScoreBTN.addEventListener("click", function(event){
    event.preventDefault();
    if(userInitials.value){
        addScore();
        alert("Your Score Has Been Saved");
    }else{
        alert("You must enter your initials!")
    }

});

//runs add score on press of enter
 inputInitialsFrm.addEventListener("submit", function(event){
    event.preventDefault();
    if(userInitials.value){
        addScore();
        alert("Your Score Has Been Saved");
    }else{
        alert("You must enter your initials!")
    }
});
