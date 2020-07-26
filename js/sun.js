var sunX = 5;
var sunY = 11;
var dontKnowSetTimeoutLol = 0;
function teleport() {

    if (myBoard[p1X][p1Y] == myBoard[sunX][sunY]) {
        score += 250;
        sunX = Math.floor((Math.random() * 25));
        sunY = Math.floor((Math.random() * 25));
        switch(myBoard[sunX][sunY]){
            case myBoard[moonX][moonY]:
            case myBoard[beeX][beeY]:
            case myBoard[bearX][bearY]:
            case myBoard[monkeyX][monkeyY]:
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
            myBoard[unicornX][unicornY] = unicorn;
        } else {
            //top left side
            switch (moveAmtT) {
                case 4:
                    if (myBoard[unicornX][unicornY] != myBoard[sunLEX][sunTEY]) {
                        myBoard[unicornX][unicornY] = blank;
                        unicornX = sunLEX;
                        unicornY = sunTEY;
                        myBoard[unicornX][unicornY] = unicorn;
                    }
                    break;
                case 3:
                    if (myBoard[unicornX][unicornY] != myBoard[sunTBLX][sunTEY]) {
                        myBoard[unicornX][unicornY] = blank;
                        unicornX = sunTBLX;
                        unicornY = sunTEY;
                        myBoard[unicornX][unicornY] = unicorn;
                    }
                    break;
                case 2:
                    if (myBoard[unicornX][unicornY] != myBoard[sunHMX][sunTEY]) {
                        myBoard[unicornX][unicornY] = blank;
                        unicornX = sunHMX;
                        unicornY = sunTEY;
                        myBoard[unicornX][unicornY] = unicorn;
                    }
                    break;
                case 1:
                    if (myBoard[unicornX][unicornY] != myBoard[sunTBRX][sunTEY]) {
                        myBoard[unicornX][unicornY] = blank;
                        unicornX = sunTBRX;
                        unicornY = sunTEY;
                        myBoard[unicornX][unicornY] = unicorn;
                    }
                    break;
                default:
                    switch (moveAmtR) {
                        case 4:
                            if (myBoard[unicornX][unicornY] != myBoard[sunREX][sunTEY]) {
                                myBoard[unicornX][unicornY] = blank;
                                unicornX = sunREX;
                                unicornY = sunTEY;
                                myBoard[unicornX][unicornY] = unicorn;
                            }
                            break;
                        case 3:
                            if (myBoard[unicornX][unicornY] != myBoard[sunREX][sunLRTY]) {
                                myBoard[unicornX][unicornY] = blank;
                                unicornX = sunREX;
                                unicornY = sunLRTY;
                                myBoard[unicornX][unicornY] = unicorn;
                            }
                            break;
                        case 2:
                            if (myBoard[unicornX][unicornY] != myBoard[sunREX][sunVMY]) {
                                myBoard[unicornX][unicornY] = blank;
                                unicornX = sunREX;
                                unicornY = sunVMY;
                                myBoard[unicornX][unicornY] = unicorn;
                            }
                            break;
                        case 1:
                            if (myBoard[unicornX][unicornY] != myBoard[sunREX][sunLRBY]) {
                                myBoard[unicornX][unicornY] = blank;
                                unicornX = sunREX;
                                unicornY = sunLRBY;
                                myBoard[unicornX][unicornY] = unicorn;
                            }
                            break;
                        default:
                            switch(moveAmtB){
                                case 4:
                                    if (myBoard[unicornX][unicornY] != myBoard[sunREX][sunBEY]) {
                                        myBoard[unicornX][unicornY] = blank;
                                        unicornX = sunREX;
                                        unicornY = sunBEY;
                                        myBoard[unicornX][unicornY] = unicorn;
                                    }
                                    break;
                                case 3:
                                    if (myBoard[unicornX][unicornY] != myBoard[sunTBRX][sunBEY]) {
                                        myBoard[unicornX][unicornY] = blank;
                                        unicornX = sunTBRX;
                                        unicornY = sunBEY;
                                        myBoard[unicornX][unicornY] = unicorn;
                                    }
                                    break;
                                case 2:
                                    if (myBoard[unicornX][unicornY] != myBoard[sunHMX][sunBEY]) {
                                        myBoard[unicornX][unicornY] = blank;
                                        unicornX = sunHMX;
                                        unicornY = sunBEY;
                                        myBoard[unicornX][unicornY] = unicorn;
                                    }
                                    break;
                                case 1:
                                    if (myBoard[unicornX][unicornY] != myBoard[sunTBLX][sunBEY]) {
                                        myBoard[unicornX][unicornY] = blank;
                                        unicornX = sunTBLX;
                                        unicornY = sunBEY;
                                        myBoard[unicornX][unicornY] = unicorn;
                                    }
                                    break;
                                    default:
                                        switch(moveAmtL){
                                            case 4:
                                                if (myBoard[unicornX][unicornY] != myBoard[sunLEX][sunBEY]) {
                                                    myBoard[unicornX][unicornY] = blank;
                                                    unicornX = sunLEX;
                                                    unicornY = sunBEY;
                                                    myBoard[unicornX][unicornY] = unicorn;
                                                }
                                                break;
                                            case 3:
                                                if (myBoard[unicornX][unicornY] != myBoard[sunLEX][sunLRBY]) {
                                                    myBoard[unicornX][unicornY] = blank;
                                                    unicornX = sunLEX;
                                                    unicornY = sunLRBY;
                                                    myBoard[unicornX][unicornY] = unicorn;
                                                }
                                                break;
                                            case 2:
                                                if (myBoard[unicornX][unicornY] != myBoard[sunLEX][sunVMY]) {
                                                    myBoard[unicornX][unicornY] = blank;
                                                    unicornX = sunLEX;
                                                    unicornY = sunVMY;
                                                    myBoard[unicornX][unicornY] = unicorn;
                                                }
                                                break;
                                            case 1:
                                                if (myBoard[unicornX][unicornY] != myBoard[sunLEX][sunLRTY]) {
                                                    myBoard[unicornX][unicornY] = blank;
                                                    unicornX = sunLEX;
                                                    unicornY = sunLRTY;
                                                    myBoard[unicornX][unicornY] = unicorn;
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