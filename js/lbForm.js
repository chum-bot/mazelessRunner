//Set database object here
var database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event, diff){
    event.preventDefault();
    const username = get("username").value;
    
    //Update database here
    const messageObj = {
        USERNAME: username,
        HIGHSCORE: highScore,
        DIFFICULTY: "normal"
    }
    const easyMessageObj = {
        USERNAME: username,
        HIGHSCORE: highScoreEasy,
        DIFFICULTY: "easy"
    }
    const hardMessageObj = {
        USERNAME: username,
        HIGHSCORE: highScoreHard,
        DIFFICULTY: "hard"
    }
    if(username == ""){
        alert("You didn't put a name. Please enter a name.");
    }
    else if(highScore == 0 && diff == "normal"){
        alert("Play a game on normal mode first and get a score to submit it.");
    }
    else if(highScore == 0 && diff == "easy"){
        alert("Play a game on easy mode first and get a score to submit it.");
    }
    else if(highScore == 0 && diff == "hard"){
        alert("Play a game on normal mode first and get a score to submit it.");
    }
    else{
        switch(diff){
            case "easy":
                database.push(easyMessageObj);
                break;
            case "normal":
                database.push(messageObj);
                break;
            case "hard":
                database.push(hardMessageObj);
                break;
        }
    removeElement("userContainer");
    displayBlock("submitted");
    orderScores();
    }
}

// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData){
    const row = rowData.val();
    const pElem = document.createElement("p");
    if(row.DIFFICULTY == undefined){
        row.DIFFICULTY = "normal";
    }
    pElem.className = row.DIFFICULTY;
    pElem.id = row.HIGHSCORE;
    pElem.innerText = `${row.USERNAME} - ${row.HIGHSCORE}`;
    get("topScores").appendChild(pElem);
    orderScores();
}

