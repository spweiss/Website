var i = 0;
var j = 0;
var txt = 'Spencer Weiss';
var speed = 125;
var delay = 2000;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(untype, delay);
  }
}

function untype() {
  if (j < txt.length) {
    document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.slice(0, -1);
    j++;
    setTimeout(untype, speed);
  }
}
