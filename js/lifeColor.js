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
                window.clearInterval(initPulse);
                pulseSpeed = 500;
                style("lives").color = "orange";
                initPulse = window.setInterval(function (){
                    if(style("lives").color == "orange"){
                       style("lives").color = "yellow"; 
                    }
                    else if(style("lives").color == "yellow"){
                        style("lives").color = "orange"; 
                     }
                }, pulseSpeed);
                break;                
            case 1:
                window.clearInterval(initPulse);
                pulseSpeed = 250;
                style("lives").color = "red";
                initPulse = window.setInterval(function (){
                    if(style("lives").color == "red"){
                       style("lives").color = "white"; 
                    }
                    else if(style("lives").color == "white"){
                        style("lives").color = "red"; 
                     }
                }, pulseSpeed);
                break;
        }
    }
}