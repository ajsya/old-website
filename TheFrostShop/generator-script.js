var checkBox = document.getElementById("read");

function myFunction() {
  var a = document.getElementById("username").value;
  document.getElementById("output1").innerHTML = "Username: " + a;
  var b = document.getElementById("product").value;
  document.getElementById("output2").innerHTML = "What are you ordering?:" + b;
  var c = document.getElementById("description").value;
  document.getElementById("output3").innerHTML = "Description: " + c;
  var d = document.getElementById("deadline").value;
  document.getElementById("output4").innerHTML = "Deadline: " + d;
  var e = document.getElementById("contact").value;
  document.getElementById("output5").innerHTML = "How should we contact you?: " + e;
  if (checkBox.checked == true){
    document.getElementById("output6").innerHTML = "Did you read out Terms of Use?: " + "Yes";
  } else {
    document.getElementById("output6").innerHTML = "Did you read out Terms of Use?: " + "No";
  }
  var f = document.getElementById("info").value;
  document.getElementById("output7").innerHTML = "Anymore information?: " + f;
}
