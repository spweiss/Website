require katex/katex

function math_render() {
  var math = document.getElementsByClassName("math");
  for (var i = 0; i < math.length; i++) {
    katex.render(math[i].innerHTML, math[i]);
  }
}
