var answers = ["野狼disco","2"]

function enterAnswer(){
  var response = prompt("Please enter your answer");
  if (response === answers[0]){
    alert("You're right!");
  }
  else{
    alert("Sorry, you're wrong. Please think again.");
  }
}
