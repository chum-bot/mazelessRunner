function pulsingLifeColor() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
        switch (lives) {
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
                        get("lives").style.color = "red";
                        dontKnowSetTimeoutLol = 1;
                        break;
                    case 1:
                        get("lives").style.color = "white";
                        dontKnowSetTimeoutLol = 0;
                        break;
                }
                break;
        }
    }
}