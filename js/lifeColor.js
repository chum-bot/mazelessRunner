var pulseSpeed = 500;
function pulsingLifeColor() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
        switch (lives) {
            case 5:
                get("lives").style.color = "aqua";
                break;
            case 4:
                get("lives").style.color = "aquamarine";
                break;
            case 3:
                get("lives").style.color = "greenyellow";
                break;
            case 2:
                switch (dontKnowSetTimeoutLol) {
                    case 0:
                        get("lives").style.color = "orange";
                        dontKnowSetTimeoutLol = 1;
                        break;
                    case 1:
                        get("lives").style.color = "yellow";
                        dontKnowSetTimeoutLol = 0;
                        break;
                }
                break;
            case 1:
                switch (dontKnowSetTimeoutLol) {
                    case 0:
                        get("lives").style.color = "white";
                        dontKnowSetTimeoutLol = 1;
                        break;
                    case 1:
                        get("lives").style.color = "red";
                        dontKnowSetTimeoutLol = 0;
                        break;
                }
                break;
        }
    }
}