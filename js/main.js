//leaderboard update for button
get("submitButton").addEventListener("click", updateDB);

//it does what it says
createBoard();

//gamestate shift event listener
document.addEventListener("keydown", shiftsInGS);


//enemy objects*, the player, and the sun itself
//NOTE: defined them here because they reference functions that are seen before main but after vars
const ninja = new Enemy("🐱‍👤", 8, 24, 490, undefined, ninjaMovement, "ninja", undefined, "dimgrey");
const uni = new Enemy("🦄", 3, 9, 40, 2000, uniMovement, "unicorn", undefined, "lightcyan");
const alien = new Enemy("👽", 24, 24, 600, 5000, alienMovement, "alien", undefined, "chartreuse");
const robot = new Enemy("🤖", 14, 21, 400, 3000, robotMovement, "robot", undefined, "silver");
const bee = new Enemy("🐝", 16, 8, 700, 1000, beeMovement, "bee", undefined, "#F3C622");
const invader = "👾";
const bolt = "🔩";


//ninja variables*
var disX = Math.abs(player.x - ninja.x);
var disY = Math.abs(player.y - ninja.y);


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

      //dragon and khione firing
      if (event.keyCode == 16) {
        if (isDragon == true && snowOut == false) {
          snowOut = true;
          let flame = new Projectile(fire, player.x, player.y, player.lastDirection);
          reposition(flame);
          throughTheFireAndFlames.push(flame);
          contact = false;
          shootyShoot(flame, minePositions, throughTheFireAndFlames, boltPositions);
        }
        if (isGoddess == true && snowOut == false) {
          snowOut = true;
          let stasis = new Projectile(snow, player.x, player.y, player.lastDirection);
          reposition(stasis);
          frozenHeart.push(stasis);
          frostbite = false;
          freezyFreeze(stasis, frozenHeart);
        }
      }
      //powerup pickup
      if (activePower.x != undefined && activePower.y != undefined) {
        if (player.pos == activePower.pos) {
          isActive = true;
          activePower.x = undefined;
          activePower.y = undefined;
          if(activePower == random){
            randPow = Math.floor(Math.random()*powers.length);
            random.effect = powers[randPow].effect;
            activePower = random;
          }
          activePower.effect();
        }
      }
      //unicorn teleport and sun/mini sun pickup
      teleport();
      if(player.pos == miniSun.pos){
        miniSun.effect();
        miniSun.pos = undefined;
        miniSun.x = undefined;
        miniSun.y = undefined;
      }
    }
    //collision functions for enemies and mines
    collision(ninja);
    collision(alien);
    collision(bee);
    collision(uni);
    collision(robot);
    for (mineObj of minePositions) {
      if (player.pos == mineObj.pos && isGod == false) {
        if (isShielded) {
          isShielded = false;
          isActive = false;
          player.img = invader;
          player.color = invaderColor;
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
    for (boltObj of boltPositions) {
      if (player.pos == boltObj.pos && isGod == false) {
        if (isShielded) {
          isShielded = false;
          isActive = false;
          player.img = invader;
          player.color = invaderColor;
          break;
        }
        else {
          lives -= boltObj.damage;
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
  //ninja
  aggression = window.setInterval(ninja.move, ninja.speed);

  //bee
  buzz = window.setInterval(bee.move, bee.speed);

  //alien
  moveyBoi = window.setInterval(alien.move, alien.speed);
  var theBrokenCounter = 0;

  //unicorn
  guard = window.setInterval(uni.move, uni.speed);

  //robot
  oohOoh = window.setInterval(robot.move, robot.speed);

  //life color change
  initPulse = window.setInterval(pulsingLifeColor, pulseSpeed);

  //the thing that runs unity update
  cdsAndResps = window.setInterval(cooldownsAndRespawns, maybeFramerate);

  //my version of unity's update function (why is this even here)
  function cooldownsAndRespawns() {
    if (gamestate == whatsAnEnum.GAMEPLAY) {
      for (boltObject of boltPositions) {
        colorify(boltObject.pos, robot.color);
        get(boltObject.pos).innerText = boltObject.img;
      }
      for (meenayOhBeeJay of minePositions) {
        colorify(meenayOhBeeJay.pos, mineColor);
        get(meenayOhBeeJay.pos).innerText = meenayOhBeeJay.img;
      }
      for (theFire of throughTheFireAndFlames) {
        colorify(theFire.pos, fireColor);
       get(theFire.pos).innerText = theFire.img;
      }
      reposition(ninja);
      reposition(uni);
      reposition(alien);
      reposition(bee);
      reposition(robot);
      reposition(sun);
      reposition(player);
      for (frozen of frozenHeart) {
        colorify(frozen.pos, snowColor);
        get(frozen.pos).innerText = frozen.img;
      }
      if(typeof activePower == "object" && activePower.x != undefined && activePower.y != undefined){
        reposition(activePower);
      }
      if(miniSun.pos != undefined && miniSun.x != undefined && miniSun.y != undefined){
        reposition(miniSun);
      }
      if (lives <= 0) {
        ded();
      }
      if (score >= alienSpeedSpawnThreshold) {
        if (theBrokenCounter == 0) {
          theBrokenCounter = 1;
          thisMAYbeBroken = window.setInterval(alien.move, 250);
        }
      }
      if(lives == 1 && ninja.speed != diffSecondAggression){
        ninja.speed = diffSecondAggression;
      }
      if (mineCap == diffMineCap) {
        window.clearInterval(moveyBoi);
      }
      if (mineCap == 450) {
        window.clearInterval(thisMAYbeBroken);
      }
      get("score").innerHTML = `Score: ${score}`;
      get("lives").innerHTML = `Lives: ${lives}`;
      
    }
  }
}