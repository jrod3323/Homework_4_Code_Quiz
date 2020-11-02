//variable to get items
var scoreTable = document.getElementById("theScores");
var clearButton = document.getElementById("clearScores");
var noScoresEl = document.getElementById("noScores");

//add HTML elements for each stored score

function    renderTable(){
    

    var storedScores = JSON.parse(localStorage.getItem("scoreEntry"));

    //checks for old scores and then renders table if there are
    if(storedScores !== null){
        for(var i=0;i<storedScores.length;i++){
            var score = storedScores[i]

            var tr = document.createElement("tr");
            var tdInitials= document.createElement("td");
            var tdScore = document.createElement("td");

            tdInitials.innerText = score.initials;
            tdScore.innerText = score.score;

            scoreTable.appendChild(tr);
            tr.appendChild(tdInitials);
            tr.appendChild(tdScore);

            noScoresEl.style.display ="none";
        }
    }else{

        scoreTable.innerHTML = "";
        var tr = document.createElement("tr");

        var thInitials= document.createElement("th");
        var thScore = document.createElement("th");

        thInitials.innerText = "Initials";
        thScore.innerText = "Score";

        scoreTable.appendChild(tr);
        tr.appendChild(thInitials);
        tr.appendChild(thScore);

        noScoresEl.style.display ="block";
    }
}

renderTable();



//clears the stored scores
function    clearLocal(){
localStorage.removeItem("scoreEntry")
renderTable();
}

clearButton.addEventListener("click", clearLocal);
