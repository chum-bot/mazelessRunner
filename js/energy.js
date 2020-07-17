function teleport() {

    if (myBoard[p1X][p1Y] == myBoard[energyX][energyY]) {
        score += 250;
        energyX = Math.floor((Math.random() * 20));
        energyY = Math.floor((Math.random() * 20));
        switch(myBoard[energyX][energyY]){
            case myBoard[moonX][moonY]:
            case myBoard[beeX][beeY]:
            case myBoard[sharkX][sharkY]:
            case myBoard[monkeyX][monkeyY]:
                energyX = Math.floor((Math.random() * 20));
                energyY = Math.floor((Math.random() * 20));
                break;
        }
        
        for (var objectOfMine of minePositions) {
            if (myBoard[energyX][energyY] == myBoard[objectOfMine.xPos][objectOfMine.yPos]) {
                energyX = Math.floor((Math.random() * 20));
                energyY = Math.floor((Math.random() * 20));
            }
        }
        for (var bananobject of bananaPositions) {
            if (myBoard[energyX][energyY] == myBoard[bananobject.xPos][bananobject.yPos]) {
                energyX = Math.floor((Math.random() * 20));
                energyY = Math.floor((Math.random() * 20));
            }
        }
        //ew. everything about this is... ew. but it works so
        myBoard[energyX][energyY] = energy;
        energyTEY = energyY - 2;
        energyBEY = energyY + 2;
        energyREX = energyX + 2;
        energyLEX = energyX - 2;
        energyTBLX = energyX - 1;
        energyTBRX = energyX + 1;
        energyLRTY = energyY - 1;
        energyLRBY = energyY + 1;
        energyHMX = energyX;
        energyVMY = energyY;

        if (energyX <= 1 || energyX >= 18 || energyY <= 1 || energyY >= 18) {
            myBoard[crocX][crocY] = croc;
        } else {
            //top left side
            switch (moveAmtT) {
                case 4:
                    if (myBoard[crocX][crocY] != myBoard[energyLEX][energyTEY]) {
                        myBoard[crocX][crocY] = blank;
                        crocX = energyLEX;
                        crocY = energyTEY;
                        myBoard[crocX][crocY] = croc;
                    }
                    break;
                case 3:
                    if (myBoard[crocX][crocY] != myBoard[energyTBLX][energyTEY]) {
                        myBoard[crocX][crocY] = blank;
                        crocX = energyTBLX;
                        crocY = energyTEY;
                        myBoard[crocX][crocY] = croc;
                    }
                    break;
                case 2:
                    if (myBoard[crocX][crocY] != myBoard[energyHMX][energyTEY]) {
                        myBoard[crocX][crocY] = blank;
                        crocX = energyHMX;
                        crocY = energyTEY;
                        myBoard[crocX][crocY] = croc;
                    }
                    break;
                case 1:
                    if (myBoard[crocX][crocY] != myBoard[energyTBRX][energyTEY]) {
                        myBoard[crocX][crocY] = blank;
                        crocX = energyTBRX;
                        crocY = energyTEY;
                        myBoard[crocX][crocY] = croc;
                    }
                    break;
                default:
                    switch (moveAmtR) {
                        case 4:
                            if (myBoard[crocX][crocY] != myBoard[energyREX][energyTEY]) {
                                myBoard[crocX][crocY] = blank;
                                crocX = energyREX;
                                crocY = energyTEY;
                                myBoard[crocX][crocY] = croc;
                            }
                            break;
                        case 3:
                            if (myBoard[crocX][crocY] != myBoard[energyREX][energyLRTY]) {
                                myBoard[crocX][crocY] = blank;
                                crocX = energyREX;
                                crocY = energyLRTY;
                                myBoard[crocX][crocY] = croc;
                            }
                            break;
                        case 2:
                            if (myBoard[crocX][crocY] != myBoard[energyREX][energyVMY]) {
                                myBoard[crocX][crocY] = blank;
                                crocX = energyREX;
                                crocY = energyVMY;
                                myBoard[crocX][crocY] = croc;
                            }
                            break;
                        case 1:
                            if (myBoard[crocX][crocY] != myBoard[energyREX][energyLRBY]) {
                                myBoard[crocX][crocY] = blank;
                                crocX = energyREX;
                                crocY = energyLRBY;
                                myBoard[crocX][crocY] = croc;
                            }
                            break;
                        default:
                            switch(moveAmtB){
                                case 4:
                                    if (myBoard[crocX][crocY] != myBoard[energyREX][energyBEY]) {
                                        myBoard[crocX][crocY] = blank;
                                        crocX = energyREX;
                                        crocY = energyBEY;
                                        myBoard[crocX][crocY] = croc;
                                    }
                                    break;
                                case 3:
                                    if (myBoard[crocX][crocY] != myBoard[energyTBRX][energyBEY]) {
                                        myBoard[crocX][crocY] = blank;
                                        crocX = energyTBRX;
                                        crocY = energyBEY;
                                        myBoard[crocX][crocY] = croc;
                                    }
                                    break;
                                case 2:
                                    if (myBoard[crocX][crocY] != myBoard[energyHMX][energyBEY]) {
                                        myBoard[crocX][crocY] = blank;
                                        crocX = energyHMX;
                                        crocY = energyBEY;
                                        myBoard[crocX][crocY] = croc;
                                    }
                                    break;
                                case 1:
                                    if (myBoard[crocX][crocY] != myBoard[energyTBLX][energyBEY]) {
                                        myBoard[crocX][crocY] = blank;
                                        crocX = energyTBLX;
                                        crocY = energyBEY;
                                        myBoard[crocX][crocY] = croc;
                                    }
                                    break;
                                    default:
                                        switch(moveAmtL){
                                            case 4:
                                                if (myBoard[crocX][crocY] != myBoard[energyLEX][energyBEY]) {
                                                    myBoard[crocX][crocY] = blank;
                                                    crocX = energyLEX;
                                                    crocY = energyBEY;
                                                    myBoard[crocX][crocY] = croc;
                                                }
                                                break;
                                            case 3:
                                                if (myBoard[crocX][crocY] != myBoard[energyLEX][energyLRBY]) {
                                                    myBoard[crocX][crocY] = blank;
                                                    crocX = energyLEX;
                                                    crocY = energyLRBY;
                                                    myBoard[crocX][crocY] = croc;
                                                }
                                                break;
                                            case 2:
                                                if (myBoard[crocX][crocY] != myBoard[energyLEX][energyVMY]) {
                                                    myBoard[crocX][crocY] = blank;
                                                    crocX = energyLEX;
                                                    crocY = energyVMY;
                                                    myBoard[crocX][crocY] = croc;
                                                }
                                                break;
                                            case 1:
                                                if (myBoard[crocX][crocY] != myBoard[energyLEX][energyLRTY]) {
                                                    myBoard[crocX][crocY] = blank;
                                                    crocX = energyLEX;
                                                    crocY = energyLRTY;
                                                    myBoard[crocX][crocY] = croc;
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