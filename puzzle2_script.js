function start(){
document.getElementById('puzzleOne').style.display="block";
document.getElementById('start').style.display="none";
}

var answers = ["野狼disco","心有余悸","孙红雷","千变万化","格格不入"]
var score = 0


function enterAnswer1(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[0]){
    alert("You're right!");
    score++
  document.getElementById('puzzleTwo').style.display="block";
  document.getElementById('puzzleOne').style.display="none";
  }
  else{
    alert("Sorry, you're wrong. Please think again.");
  }
}



function enterAnswer2(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[1]){
    alert("You're right!");
    score++
  document.getElementById('puzzleThree').style.display="block";
  document.getElementById('puzzleTwo').style.display="none";
  }
  else{
    alert("Sorry, you're wrong. Please think again.");
  }
}

function enterAnswer3(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[2]){
    alert("You're right!");
    score++
  document.getElementById('puzzleFour').style.display="block";
  document.getElementById('puzzleThree').style.display="none";
  }
  else{
    alert("Sorry, you're wrong. Please think again.");
  }
}

function enterAnswer4(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[3]){
    alert("You're right!");
    score++
  document.getElementById('puzzleFive').style.display="block";
  document.getElementById('puzzleFour').style.display="none";
  }
  else{
    alert("Sorry, you're wrong. Please think again.");
  }
}

function enterAnswer5(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[4]){
    alert("You're right!");
    score++
  }
  else{
    alert("Sorry, you're wrong. Please think again.");
  }
};


function help1(){
  alert("左手，龙；右手，彩虹");
}

function help2(){
  alert("谐音，心中有鱼和鸡");
}

function help3(){
  alert("谐音，笋和红色的炸弹");
}

function help4(){
  alert("数字和谐音");
}

function help5(){
  alert("注意这个形象在宫中是什么角色哦~");
};

function correctAnswer1(){
  alert("野狼disco");
}

function correctAnswer2(){
  alert("心有余悸");
}

function correctAnswer3(){
  alert("孙红雷");
}

function correctAnswer4(){
  alert("千变万化");
}

function correctAnswer5(){
  alert("格格不入");
};

function getScore(){
  alert("Your score is " + score +" , have a nice day ^v^")
}

function pass1(){
  document.getElementById('puzzleTwo').style.display="block";
  document.getElementById('puzzleOne').style.display="none";
}

function pass2(){
  document.getElementById('puzzleThree').style.display="block";
  document.getElementById('puzzleTwo').style.display="none";
}

function pass3(){
  document.getElementById('puzzleFour').style.display="block";
  document.getElementById('puzzleThree').style.display="none";
}

function pass4(){
  document.getElementById('puzzleFive').style.display="block";
  document.getElementById('puzzleFour').style.display="none";
}
