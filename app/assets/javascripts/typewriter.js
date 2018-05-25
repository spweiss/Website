var i = 0;
var j = 0;
var txt = 'Spencer Weiss';
var speed = 100;
var delay = 1000;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(untype, 1500);
  }
}

function untype() {
  if (j < txt.length) {
    document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.slice(0, -1);
    j++;
    setTimeout(untype, speed);
  }
}
