//Set database object here
var database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username = get("username").value;
    
    //Update database here
    const messageObj = {
        USERNAME: username,
        HIGHSCORE: highScore,
    }
    if(username == ""){
        alert("You didn't put a name. Please enter a name.");
    }
    else if(highScore == 0 || highScore == undefined){
        alert("Play a game first and get a score to submit it.")
    }
    else{
    database.push(messageObj);
    removeElement("userContainer");
    displayBlock("submitted");
    }
    
}

// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData){
    const row = rowData.val();
    const pElem = document.createElement("p");
    pElem.innerText = `${row.USERNAME} - ${row.HIGHSCORE}`;
    get("topScores").appendChild(pElem);
}