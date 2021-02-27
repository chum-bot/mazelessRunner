function teleport() {

    if (myBoard[p1X][p1Y] == myBoard[sunX][sunY]) {
        score += scoreGained;
        sunX = Math.floor((Math.random() * 25));
        sunY = Math.floor((Math.random() * 25));
        switch(myBoard[sunX][sunY]){
            case myBoard[moon.x][moon.y]:
            case myBoard[bee.x][bee.y]:
            case myBoard[bear.x][bear.y]:
            case myBoard[monkey.x][monkey.y]:
                sunX = Math.floor((Math.random() * 25));
                sunY = Math.floor((Math.random() * 25));
                break;
        }
        
        for (var objectOfMine of minePositions) {
            if (myBoard[sunX][sunY] == myBoard[objectOfMine.xPos][objectOfMine.yPos]) {
                sunX = Math.floor((Math.random() * 25));
                sunY = Math.floor((Math.random() * 25));
            }
        }
        for (var bananobject of bananaPositions) {
            if (myBoard[sunX][sunY] == myBoard[bananobject.xPos][bananobject.yPos]) {
                sunX = Math.floor((Math.random() * 25));
                sunY = Math.floor((Math.random() * 25));
            }
        }

        var willTheySpawn = Math.random();
        if(willTheySpawn <= 0.4 && score >= diffPowerSpawning && isActive == false){
            powerups();
        }

        //ew. everything about this is... ew. but it works so
        myBoard[sunX][sunY] = sun;
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
            myBoard[uni.x][uni.y] = uni.img;
        } else {
            //top left side
            switch (moveAmtT) {
                case 4:
                    if (myBoard[uni.x][uni.y] != myBoard[sunLEX][sunTEY]) {
                        myBoard[uni.x][uni.y] = blank;
                        uni.x = sunLEX;
                        uni.y = sunTEY;
                        myBoard[uni.x][uni.y] = uni.img;
                    }
                    break;
                case 3:
                    if (myBoard[uni.x][uni.y] != myBoard[sunTBLX][sunTEY]) {
                        myBoard[uni.x][uni.y] = blank;
                        uni.x = sunTBLX;
                        uni.y = sunTEY;
                        myBoard[uni.x][uni.y] = uni.img;
                    }
                    break;
                case 2:
                    if (myBoard[uni.x][uni.y] != myBoard[sunHMX][sunTEY]) {
                        myBoard[uni.x][uni.y] = blank;
                        uni.x = sunHMX;
                        uni.y = sunTEY;
                        myBoard[uni.x][uni.y] = uni.img;
                    }
                    break;
                case 1:
                    if (myBoard[uni.x][uni.y] != myBoard[sunTBRX][sunTEY]) {
                        myBoard[uni.x][uni.y] = blank;
                        uni.x = sunTBRX;
                        uni.y = sunTEY;
                        myBoard[uni.x][uni.y] = uni.img;
                    }
                    break;
                default:
                    switch (moveAmtR) {
                        case 4:
                            if (myBoard[uni.x][uni.y] != myBoard[sunREX][sunTEY]) {
                                myBoard[uni.x][uni.y] = blank;
                                uni.x = sunREX;
                                uni.y = sunTEY;
                                myBoard[uni.x][uni.y] = uni.img;
                            }
                            break;
                        case 3:
                            if (myBoard[uni.x][uni.y] != myBoard[sunREX][sunLRTY]) {
                                myBoard[uni.x][uni.y] = blank;
                                uni.x = sunREX;
                                uni.y = sunLRTY;
                                myBoard[uni.x][uni.y] = uni.img;
                            }
                            break;
                        case 2:
                            if (myBoard[uni.x][uni.y] != myBoard[sunREX][sunVMY]) {
                                myBoard[uni.x][uni.y] = blank;
                                uni.x = sunREX;
                                uni.y = sunVMY;
                                myBoard[uni.x][uni.y] = uni.img;
                            }
                            break;
                        case 1:
                            if (myBoard[uni.x][uni.y] != myBoard[sunREX][sunLRBY]) {
                                myBoard[uni.x][uni.y] = blank;
                                uni.x = sunREX;
                                uni.y = sunLRBY;
                                myBoard[uni.x][uni.y] = uni.img;
                            }
                            break;
                        default:
                            switch(moveAmtB){
                                case 4:
                                    if (myBoard[uni.x][uni.y] != myBoard[sunREX][sunBEY]) {
                                        myBoard[uni.x][uni.y] = blank;
                                        uni.x = sunREX;
                                        uni.y = sunBEY;
                                        myBoard[uni.x][uni.y] = uni.img;
                                    }
                                    break;
                                case 3:
                                    if (myBoard[uni.x][uni.y] != myBoard[sunTBRX][sunBEY]) {
                                        myBoard[uni.x][uni.y] = blank;
                                        uni.x = sunTBRX;
                                        uni.y = sunBEY;
                                        myBoard[uni.x][uni.y] = uni.img;
                                    }
                                    break;
                                case 2:
                                    if (myBoard[uni.x][uni.y] != myBoard[sunHMX][sunBEY]) {
                                        myBoard[uni.x][uni.y] = blank;
                                        uni.x = sunHMX;
                                        uni.y = sunBEY;
                                        myBoard[uni.x][uni.y] = uni.img;
                                    }
                                    break;
                                case 1:
                                    if (myBoard[uni.x][uni.y] != myBoard[sunTBLX][sunBEY]) {
                                        myBoard[uni.x][uni.y] = blank;
                                        uni.x = sunTBLX;
                                        uni.y = sunBEY;
                                        myBoard[uni.x][uni.y] = uni.img;
                                    }
                                    break;
                                    default:
                                        switch(moveAmtL){
                                            case 4:
                                                if (myBoard[uni.x][uni.y] != myBoard[sunLEX][sunBEY]) {
                                                    myBoard[uni.x][uni.y] = blank;
                                                    uni.x = sunLEX;
                                                    uni.y = sunBEY;
                                                    myBoard[uni.x][uni.y] = uni.img;
                                                }
                                                break;
                                            case 3:
                                                if (myBoard[uni.x][uni.y] != myBoard[sunLEX][sunLRBY]) {
                                                    myBoard[uni.x][uni.y] = blank;
                                                    uni.x = sunLEX;
                                                    uni.y = sunLRBY;
                                                    myBoard[uni.x][uni.y] = uni.img;
                                                }
                                                break;
                                            case 2:
                                                if (myBoard[uni.x][uni.y] != myBoard[sunLEX][sunVMY]) {
                                                    myBoard[uni.x][uni.y] = blank;
                                                    uni.x = sunLEX;
                                                    uni.y = sunVMY;
                                                    myBoard[uni.x][uni.y] = uni.img;
                                                }
                                                break;
                                            case 1:
                                                if (myBoard[uni.x][uni.y] != myBoard[sunLEX][sunLRTY]) {
                                                    myBoard[uni.x][uni.y] = blank;
                                                    uni.x = sunLEX;
                                                    uni.y = sunLRTY;
                                                    myBoard[uni.x][uni.y] = uni.img;
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