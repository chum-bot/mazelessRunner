function get(thingToGet) {
    return document.getElementById(thingToGet);
  }
  function make(thing) {
    return document.createElement(thing);
  }
  function append(thing, otherThing){
    return otherThing.appendChild(thing);
  }
  function style(thing){
    return get(thing).style;
  }
  function colorify(pos, color){
    style(pos).backgroundColor = color;
  }
  function decolorify(pos){
    style(pos).backgroundColor = blankColor;
  }
  function deposition(enem) {
    get(enem.pos).innerText = "";
    decolorify(enem.pos);
  }
  function reposition(enem){
      enem.pos = `cell${enem.x}_${enem.y}`;
      colorify(enem.pos, enem.color);
      get(enem.pos).innerText = enem.img;
  }
  function nonEnemDepos(pos){
    get(pos).innerText = "";
    decolorify(pos);
  }
  function nonEnemRepos(pos, x, y, color, img){
    pos = `cell${x}_${y}`;
    colorify(pos, color);
    get(pos).innerText = img;
  }
  function collision (enem) {
    if (enem.pos == player.pos && isGod == false) {
        if (isShielded) {
            isShielded = false;
            isActive = false;
            player.img = invader;
            player.color = invaderColor;
        }
        else {
            lives--;
            get("lives").innerHTML = " Lives: " + lives;
            pulsingLifeColor();
        }
        if(lives <= 0){
          ded();
        }
    }
}
  function removeElement(elem) {
    return get(elem).style.display = "none";
  }
  function destroy(elem) {
    return get(elem).remove();
  }
  function displayBlock(elem){
      return get(elem).style.display = "block";
  }
  function displayFlex(elem){
      return get(elem).style.display = "flex";
  }
function orderScores(){
  [].map.call(get("topScores").children, Object).sort(function (a, b) {
    return +b.id.match(/\d+/) - +a.id.match(/\d+/);
}).forEach( function (elem) {
    topScores.appendChild(elem);
});
}
 