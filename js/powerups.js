class Powerup{
    constructor(x, y, duration, effect, img, playerImg, name, color){
        this.x = x;
        this.y = y;
        this.duration = duration;
        this.effect = effect;
        this.img = img;
        this.playerImg = playerImg;
        this.name = name;
        this.color = color;
        this.pos = `cell${this.x}_${this.y}`;
    }
}

var helios = new Powerup(undefined, undefined, 7000, godMode, "☀️", "🌞", "Helios", "gold");
var khione = new Powerup(undefined, undefined, 15000, goddess, "🧊", "🌬️", "Khione", "skyblue");
var dragon = new Powerup(undefined, undefined, 15000, lizard, "🐲", "🐉", "Dragon", "limegreen");
var shield = new Powerup(undefined, undefined, 30000, guarded, "🛡️", "💂‍♂️", "Shield", "lightcoral");
var heart = new Powerup(undefined, undefined, undefined, extraLife, "💖", undefined, "Heart", "red");
var miniSun = new Powerup(undefined, undefined, undefined, minisun, "🔅", undefined, "Mini-Sun", "#ffe96f");
var powers = [helios, khione, dragon, shield, heart];
var randPow = Math.floor(Math.random()*powers.length);
var random = new Powerup(undefined, undefined, undefined, powers[randPow].effect, "🎲", undefined, "Random", "gainsboro");
var activePower = new Powerup();

function powerups(){
    var rand = Math.random();

    if(rand <= 0.05){
        spawn(helios);
        helios = activePower;
    }
    else if(rand >= 0.9){
        spawn(heart);
        heart = activePower;
    }
    else if(rand <= 0.25){
        spawn(khione);
        khione = activePower;
    }
    else if(rand <= 0.55){
        spawn(shield);
        shield = activePower;
    }
    else if(rand >= 0.7 && score >= 5000){
        spawn(dragon);
        dragon = activePower;
    }
    else{
        spawn(random);
        random = activePower;
    }
}
function spawn(power){
    if(activePower.x != undefined && activePower.y != undefined){
        deposition(activePower);
    }
    activePower = power;
    activePower.x = Math.floor((Math.random() * 25));
    activePower.y = Math.floor((Math.random() * 25));
        switch(activePower.pos){
            case alien.pos:
            case bee.pos:
            case ninja.pos:
            case robot.pos:
                activePower.x = Math.floor((Math.random() * 25));
                activePower.y = Math.floor((Math.random() * 25));
                break;
        }
        for (var objectOfMine of minePositions) {
            if (activePower.pos == objectOfMine.pos) {
                activePower.x = Math.floor((Math.random() * 25));
                activePower.y = Math.floor((Math.random() * 25));
            }
        }
        for (var bolted of boltPositions) {
            if (activePower.pos == bolted.pos) {
                activePower.x = Math.floor((Math.random() * 25));
                activePower.y = Math.floor((Math.random() * 25));
            }
        }
        reposition(activePower);
}