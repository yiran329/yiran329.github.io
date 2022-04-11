var answers = ["野狼disco","雕虫小技"]

function enterAnswer1(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[0]){
    alert("You're right!");
  }
  else{
    alert("Sorry, you're wrong. Please think again.");
  }
}

function enterAnswer2(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[1]){
    alert("You're right!");
  }
  else{
    alert("Sorry, you're wrong. Please think again.");
  }
}
