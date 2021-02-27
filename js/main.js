//leaderboard update for button
get("submitButton").addEventListener("click", updateDB);

//it does what it says
createBoard();
displayBoard();

//gamestate shift event listener
document.addEventListener("keydown", shiftsInGS);


//enemy objects*, the player, and the sun itself
//NOTE: defined them here because they reference functions that are seen before main but after vars
const bear = new Enemy("🐻", 8, 24, 490, undefined, bearMovement, "bear");
const uni = new Enemy("🦄", 3, 9, 40, 2000, uniMovement, "unicorn");
const moon = new Enemy("🌝", 24, 24, 600, 5000, moonMovement, "moon");
const monkey = new Enemy("🐒", 14, 21, 400, 3000, monkeyMovement, "monkey");
const bee = new Enemy("🐝", 16, 8, 700, 1000, beeMovement, "bee");
const sun = "🔆";
const invader = "👾";
var p1 = invader;
const banana = "🍌";

//powerup array*
var powers = [dragon, miniSun, shield, snowman, godMode, extraLife];

//bear variables*
var disX = Math.abs(p1X - bear.x);
var disY = Math.abs(p1Y - bear.y);


//the gamestate shifts
function shiftsInGS() {
  switch (event.keyCode) {
    case 13:
      if (gamestate == whatsAnEnum.MENU) {
        startup();
      }
      break;
    case 82:
      if (gamestate != whatsAnEnum.MENU) {
        gamestate = whatsAnEnum.MENU;
        reset();
      }
      break;
    case 80:
      if (gamestate == whatsAnEnum.GAMEPLAY || gamestate == whatsAnEnum.PAUSE) {
        pause();
      }
      break;
  }
}

//main things that happen on key press like moving and getting hit
function downOnTheKey(event) {
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    if (lives > 0) {
      charMovement();

      //dragon and snowman firing
      if (event.keyCode == 16) {
        if (isDragon == true) {
          let flame = new Projectile(fire, p1X, p1Y, lastDirection);
          throughTheFireAndFlames.push(flame);
          contact = false;
          shootyShoot(flame, minePositions, throughTheFireAndFlames);
        }
        if (isSnow == true && snowOut == false) {
          snowOut = true;
          let stasis = new Projectile(snow, p1X, p1Y, lastDirection);
          frozenHeart.push(stasis);
          frostbite = false;
          freezyFreeze(stasis, frozenHeart);
        }
      }
      //powerup pickup
      if (powerX != undefined && powerY != undefined) {
        if (myBoard[p1X][p1Y] == myBoard[powerX][powerY]) {
          isActive = true;
          powerX = undefined;
          powerY = undefined;
          switch (activePower) {
            case dragonItem:
              dragon();
              break;
            case shieldItem:
              shield();
              break;
            case extraLifeItem:
              extraLife();
              break;
            case snowmanItem:
              snowman();
              break;
            case godModeItem:
              godMode();
              break;
            case miniSunItem:
              miniSun();
              break;
            case randomItem:
              randPow = Math.floor(Math.random() * powers.length);
              powers[randPow]();
          }
        }
      }
      //unicorn teleport and sun pickup
      teleport();
    }


    //collision methods for enemies and mines
    bear.collision();
    moon.collision();
    bee.collision();
    monkey.collision();
    for (mineObj of minePositions) {
      if (myBoard[p1X][p1Y] == myBoard[mineObj.xPos][mineObj.yPos] && isGod == false) {
        if (isShielded) {
          isShielded = false;
          isActive = false;
          p1 = invader;
          break;
        }
        else {
          lives -= mineObj.damage;
          get("lives").innerHTML = " Lives: " + lives;
          pulsingLifeColor();
          break;
        }
      }
    }
    for (bananObj of bananaPositions) {
      if (myBoard[p1X][p1Y] == myBoard[bananObj.xPos][bananObj.yPos] && isGod == false) {
        if (isShielded) {
          isShielded = false;
          isActive = false;
          p1 = invader;
          break;
        }
        else {
          lives -= bananObj.damage;
          get("lives").innerHTML = " Lives: " + lives;
          pulsingLifeColor();
          break;
        }
      }
    }
    
  }
  if (gamestate == whatsAnEnum.GAMEPLAY) {
    stepCount--;
  }
}

function gameplay() {
  document.addEventListener('keydown', downOnTheKey);
  //bear
  aggression = window.setInterval(bear.move, bear.speed);

  //bee
  buzz = window.setInterval(bee.move, bee.speed);

  //moon
  moveyBoi = window.setInterval(moon.move, moon.speed);
  var theBrokenCounter = 0;

  //unicorn
  guard = window.setInterval(uni.move, uni.speed);

  //monkey
  oohOoh = window.setInterval(monkey.move, monkey.speed);

  //life color change
  initPulse = window.setInterval(pulsingLifeColor, pulseSpeed);

  //the thing that runs unity update
  cdsAndResps = window.setInterval(cooldownsAndRespawns, maybeFramerate);

  //my version of unity's update function (why is this even here)
  function cooldownsAndRespawns() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      for (bahnananaOhBeeJay of bananaPositions) {
        myBoard[bahnananaOhBeeJay.xPos][bahnananaOhBeeJay.yPos] = bahnananaOhBeeJay.img;
      }
      for (meenayOhBeeJay of minePositions) {
        myBoard[meenayOhBeeJay.xPos][meenayOhBeeJay.yPos] = meenayOhBeeJay.img;
      }
      for (theFire of throughTheFireAndFlames) {
        myBoard[theFire.xPos][theFire.yPos] = theFire.img;
      }
      myBoard[uni.x][uni.y] = uni.img;
      myBoard[bear.x][bear.y] = bear.img;
      myBoard[moon.x][moon.y] = moon.img;
      myBoard[bee.x][bee.y] = bee.img;
      myBoard[monkey.x][monkey.y] = monkey.img;
      myBoard[sunX][sunY] = sun;
      for (frozen of frozenHeart) {
        myBoard[frozen.xPos][frozen.yPos] = frozen.img;
      }
      if (powerX != undefined && powerY != undefined && activePower != undefined) {
        myBoard[powerX][powerY] = activePower;
      }


      if (lives <= 0) {
        ded();
      }
      if (score >= moonSpeedSpawnThreshold) {
        if (theBrokenCounter == 0) {
          theBrokenCounter = 1;
          var thisMAYbeBroken = window.setInterval(moon.move, 250);
        }
      }

      if (mineCap == diffMineCap) {
        window.clearInterval(moveyBoi);
      }
      if (mineCap == 450) {
        window.clearInterval(thisMAYbeBroken);
      }
      get("score").innerHTML = `Score: ${score}`;
      get("lives").innerHTML = `Lives: ${lives}`;
      
      displayBoard();
    }
  }
}