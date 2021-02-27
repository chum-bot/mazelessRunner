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
                    case true:
                        get("lives").style.color = "orange";
                        dontKnowSetTimeoutLol = false;
                        break;
                    case false:
                        get("lives").style.color = "yellow";
                        dontKnowSetTimeoutLol = true;
                        break;
                }
                break;
            case 1:
                switch (dontKnowSetTimeoutLol) {
                    case true:
                        get("lives").style.color = "white";
                        dontKnowSetTimeoutLol = false;
                        break;
                    case false:
                        get("lives").style.color = "red";
                        dontKnowSetTimeoutLol = true;
                        break;
                }
                break;
        }
    }
}