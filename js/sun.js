function teleport() {

    if (charPos == sunPos) {
        score += scoreGained;
        get("score").innerText = `Score: ${score}`;
        sunX = Math.floor((Math.random() * 25));
        sunY = Math.floor((Math.random() * 25));
        sunPos = `cell${sunX}_${sunY}`;
        switch(sunPos){
            case alien.pos:
            case bee.pos:
            case ninja.pos:
            case robot.pos:
                sunX = Math.floor((Math.random() * 25));
                sunY = Math.floor((Math.random() * 25));
                sunPos = `cell${sunX}_${sunY}`;
                break;
        }
        
        for (var objectOfMine of minePositions) {
            if (sunPos == objectOfMine.pos) {
                sunX = Math.floor((Math.random() * 25));
                sunY = Math.floor((Math.random() * 25));
                sunPos = `cell${sunX}_${sunY}`;
            }
        }
        for (var bolt of boltPositions) {
            if (sunPos == bolt.pos) {
                sunX = Math.floor((Math.random() * 25));
                sunY = Math.floor((Math.random() * 25));
                sunPos = `cell${sunX}_${sunY}`;
            }
        }

        var willTheySpawn = Math.random();
        if(willTheySpawn <= 0.4 && score >= diffPowerSpawning && isActive == false){
            powerups();
        }

        //ew. everything about this is... ew. but it works so
        nonEnemRepos(sunPos, sunX, sunY, sunColor, sun);
        sunTEY = sunY - 2;
        sunBEY = sunY + 2;
        sunREX = sunX + 2;
        sunLEX = sunX - 2;
        sunTBLX = sunX - 1;
        sunTBRX = sunX + 1;
        sunLRTY = sunY - 1;
        sunLRBY = sunY + 1;
        sunHMX = sunX;
        sunVMY = sunY;

        if (sunX <= 1 || sunX >= 23 || sunY <= 1 || sunY >= 23) {
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