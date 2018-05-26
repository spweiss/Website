var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var txt = 'Spencer Weiss';
var msg = 'Hi there!';
var inv = 'Scroll down...';
var speed = 100;
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
  } else {
    setTimeout(welcome, delay);
  }
}

function welcome() {
  if (k < msg.length) {
    document.getElementById("type").innerHTML += msg.charAt(k);
    k++;
    setTimeout(welcome, speed);
  } else {
    setTimeout(untype2, delay);
  }
}

function untype2() {
  if (l < msg.length) {
    document.getElementById("type").innerHTML = document.getElementById("type").innerHTML.slice(0, -1);
    l++;
    setTimeout(untype2, speed);
  } else {
    setTimeout(invite, delay);
  }
}

function invite() {
  if (m < inv.length) {
    document.getElementById("type").innerHTML += inv.charAt(m);
    m++;
    setTimeout(invite, speed);
  }
}
