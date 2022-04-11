function getName(){
  var Name = prompt("What's your name?");
  alert("Hello, "+ Name +", welcome to this page! ^o^");
}
getName()

function pressbutton(){
  var x = document.getElementById('demo');
  x.style.fontSize = "25px";
  x.style.color = "deeppink";
  x.innerHTML = "HAHA,you have no choice~ *^v^*";
}
