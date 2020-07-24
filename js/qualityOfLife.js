function get(thingToGet) {
    return document.getElementById(thingToGet);
  }
function removeElement(elem) {
    return get(elem).style.display = "none";
  }
  function displayBlock(elem){
      return get(elem).style.display = "block";
  }
  function displayFlex(elem){
      return get(elem).style.display = "flex";
  }