function miniSunSpawn(){
    miniSun.x = Math.floor((Math.random() * 25));
    miniSun.y = Math.floor((Math.random() * 25));
    miniSun.pos = `cell${miniSun.x}_${miniSun.y}`;
        switch(miniSun.pos){
            case alien.pos:
            case bee.pos:
            case ninja.pos:
            case robot.pos:
                miniSun.x = Math.floor((Math.random() * 25));
                miniSun.y = Math.floor((Math.random() * 25));
                miniSun.pos = `cell${sun.x}_${sun.y}`;
                break;
        }
        
        for (var objectOfMine of minePositions) {
            if (miniSun.pos == objectOfMine.pos) {
                miniSun.x = Math.floor((Math.random() * 25));
                miniSun.y = Math.floor((Math.random() * 25));
                miniSun.pos = `cell${sun.x}_${sun.y}`;
            }
        }
        for (var bolt of boltPositions) {
            if (miniSun.pos == bolt.pos) {
                miniSun.x = Math.floor((Math.random() * 25));
                miniSun.y = Math.floor((Math.random() * 25));
                miniSun.pos = `cell${sun.x}_${sun.y}`;
            }
        }
        reposition(miniSun);
}

function teleport() {

    if (player.pos == sun.pos) {
        score += scoreGained;
        get("score").innerText = `Score: ${score}`;
        sun.x = Math.floor((Math.random() * 25));
        sun.y = Math.floor((Math.random() * 25));
        sun.pos = `cell${sun.x}_${sun.y}`;
        switch(sun.pos){
            case alien.pos:
            case bee.pos:
            case ninja.pos:
            case robot.pos:
                sun.x = Math.floor((Math.random() * 25));
                sun.y = Math.floor((Math.random() * 25));
                sun.pos = `cell${sun.x}_${sun.y}`;
                break;
        }
        
        for (var objectOfMine of minePositions) {
            if (sun.pos == objectOfMine.pos) {
                sun.x = Math.floor((Math.random() * 25));
                sun.y = Math.floor((Math.random() * 25));
                sun.pos = `cell${sun.x}_${sun.y}`;
            }
        }
        for (var bolt of boltPositions) {
            if (sun.pos == bolt.pos) {
                sun.x = Math.floor((Math.random() * 25));
                sun.y = Math.floor((Math.random() * 25));
                sun.pos = `cell${sun.x}_${sun.y}`;
            }
        }

        var willTheySpawn = Math.random();
        if(willTheySpawn <= 0.4 && score >= diffPowerSpawning && isActive == false){
            powerups();
        }
        var willMiniSunSpawn = Math.random();
        if(willMiniSunSpawn <= 0.3 && score >= diffPowerSpawning){
            console.log("mini sun droppin in");
            miniSunSpawn();
        }

        //ew. everything about this is... ew. but it works so
        reposition(sun);
        sunTEY = sun.y - 2;
        sunBEY = sun.y + 2;
        sunREX = sun.x + 2;
        sunLEX = sun.x - 2;
        sunTBLX = sun.x - 1;
        sunTBRX = sun.x + 1;
        sunLRTY = sun.y - 1;
        sunLRBY = sun.y + 1;
        sunHMX = sun.x;
        sunVMY = sun.y;

        if (sun.x <= 1 || sun.x >= 23 || sun.y <= 1 || sun.y >= 23) {
            reposition(uni);
        } else {
            //top left side
            switch (moveAmtT) {
                case 4:
                    if (uni.pos != `cell${sunLEX}_${sunTEY}`) {
                        deposition(uni);
                        uni.x = sunLEX;
                        uni.y = sunTEY;
                        reposition(uni);
                    }
                    break;
                case 3:
                    if (uni.pos != `cell${sunTBLX}_${sunTEY}`) {
                        deposition(uni);
                        uni.x = sunTBLX;
                        uni.y = sunTEY;
                        reposition(uni);
                    }
                    break;
                case 2:
                    if (uni.pos != `cell${sunHMX}_${sunTEY}`) {
                        deposition(uni);
                        uni.x = sunHMX;
                        uni.y = sunTEY;
                        reposition(uni);
                    }
                    break;
                case 1:
                    if (uni.pos != `cell${sunTBRX}_${sunTEY}`) {
                        deposition(uni);
                        uni.x = sunTBRX;
                        uni.y = sunTEY;
                        reposition(uni);
                    }
                    break;
                default:
                    switch (moveAmtR) {
                        case 4:
                            if (uni.pos != `cell${sunREX}_${sunTEY}`) {
                                deposition(uni);
                                uni.x = sunREX;
                                uni.y = sunTEY;
                                reposition(uni);
                            }
                            break;
                        case 3:
                            if (uni.pos != `cell${sunREX}_${sunLRTY}`) {
                                deposition(uni);
                                uni.x = sunREX;
                                uni.y = sunLRTY;
                                reposition(uni);
                            }
                            break;
                        case 2:
                            if (uni.pos != `cell${sunREX}_${sunVMY}`) {
                                deposition(uni);
                                uni.x = sunREX;
                                uni.y = sunVMY;
                                reposition(uni);
                            }
                            break;
                        case 1:
                            if (uni.pos != `cell${sunREX}_${sunLRBY}`) {
                                deposition(uni);
                                uni.x = sunREX;
                                uni.y = sunLRBY;
                                reposition(uni);
                            }
                            break;
                        default:
                            switch(moveAmtB){
                                case 4:
                                    if (uni.pos != `cell${sunREX}_${sunBEY}`) {
                                        deposition(uni);
                                        uni.x = sunREX;
                                        uni.y = sunBEY;
                                        reposition(uni);
                                    }
                                    break;
                                case 3:
                                    if (uni.pos != `cell${sunTBRX}_${sunBEY}`) {
                                        deposition(uni);
                                        uni.x = sunTBRX;
                                        uni.y = sunBEY;
                                        reposition(uni);
                                    }
                                    break;
                                case 2:
                                    if (uni.pos != `cell${sunHMX}_${sunBEY}`) {
                                        deposition(uni);
                                        uni.x = sunHMX;
                                        uni.y = sunBEY;
                                        reposition(uni);
                                    }
                                    break;
                                case 1:
                                    if (uni.pos != `cell${sunTBLX}_${sunBEY}`) {
                                        deposition(uni);
                                        uni.x = sunTBLX;
                                        uni.y = sunBEY;
                                        reposition(uni);
                                    }
                                    break;
                                    default:
                                        switch(moveAmtL){
                                            case 4:
                                                if (uni.pos != `cell${sunLEX}_${sunBEY}`) {
                                                    deposition(uni);
                                                    uni.x = sunLEX;
                                                    uni.y = sunBEY;
                                                    reposition(uni);
                                                }
                                                break;
                                            case 3:
                                                if (uni.pos != `cell${sunLEX}_${sunLRBY}`) {
                                                    deposition(uni);
                                                    uni.x = sunLEX;
                                                    uni.y = sunLRBY;
                                                    reposition(uni);
                                                }
                                                break;
                                            case 2:
                                                if (uni.pos != `cell${sunLEX}_${sunVMY}`) {
                                                    deposition(uni);
                                                    uni.x = sunLEX;
                                                    uni.y = sunVMY;
                                                    reposition(uni);
                                                }
                                                break;
                                            case 1:
                                                if (uni.pos != `cell${sunLEX}_${sunLRTY}`) {
                                                    deposition(uni);
                                                    uni.x = sunLEX;
                                                    uni.y = sunLRTY;
                                                    reposition(uni);
                                                }
                                                break;
                                        }
                                        break;
                            }
                            break;
                    }
                    break;
            }
        }
    }
}