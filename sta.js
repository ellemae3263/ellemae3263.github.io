alert("Welcome to the endless whole which is Monsta X");
window.onload = setup;

function setup() {
  var button = document.getElementById("button1");
  button.onclick = colorChange;
  var button2 = document.getElementById("button2");
  button2.onclick = colorChange2;
  var button3 = document.getElementById("button3");
  button3.onclick = colorChange3;
  var button4 = document.getElementById("button4");
  button4.onclick = colorChange4;
  var button5 = document.getElementById("button5");
  button5.onclick = colorChange5;
  var button6 = document.getElementById("button6");
  button6.onclick = colorChange6;
  var button7 = document.getElementById("button7");
  button7.onclick = colorChange7;
  var button = document.getElementById("button8");
  button.onclick = biggerWord;

}

function colorChange() {
  document.getElementById("color").style.color = "red";
}

function colorChange2() {
  document.getElementById("color2").style.color = "red";
}

function colorChange3() {
  document.getElementById("color3").style.color = "red";
}

function colorChange4() {
  document.getElementById("color4").style.color = "red";
}

function colorChange5() {
  document.getElementById("color5").style.color = "red";
}

function colorChange6() {
  document.getElementById("color6").style.color = "red";
}

function colorChange7() {
  document.getElementById("color7").style.color = "red";
}

  function biggerWord() {
    document.getElementById("size").style.size = "red";
  }
