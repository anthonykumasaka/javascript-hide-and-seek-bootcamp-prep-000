
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var id = document.getElementById("nested")
  var nestedElement = id.getElementsByClassName("target")
  return nestedElement; 
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt((i + n).toString()); 
  }
}

function deepestChild() {
  
}