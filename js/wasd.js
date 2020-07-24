var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
var wasdCheck = false;
function wasd() {
    switch (wasdCheck) {
        case true:
            upKey = 38;
            downKey = 40;
            leftKey = 37;
            rightKey = 39;
            get("wasdToggle").innerHTML = "WASD is now OFF.";
            wasdCheck = false;
            break;

        case false:
            upKey = 87;
            downKey = 83;
            leftKey = 65;
            rightKey = 68;
            get("wasdToggle").innerHTML = "WASD is now ON.";
            wasdCheck = true;
            break;
    }
}