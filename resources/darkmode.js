function myFunction() {
  var Checkbox = document.getElementById("Checkbox");

  // If the checkbox is checked, display the output text
  if (Checkbox.checked == true){
    darkmode()
  } if (Checkbox.checked == false) {
    regular()
  }
}

function regular() {
  document.getElementById('body').style.background = '#FF4C4C'
  document.getElementById('navbar').style.background = '#FF8888'
  document.getElementById('b1').style.background = '#FF8888'
  document.getElementById('b2').style.background = '#FF8888'
  document.getElementById('b3').style.background = '#FF8888'
}

function darkmode() {
  document.getElementById('body').style.background = '#474747'
  document.getElementById('navbar').style.background = '#FF8888'
  document.getElementById('b1').style.background = '#FF8888'
  document.getElementById('b2').style.background = '#FF8888'
  document.getElementById('b3').style.background = '#FF8888'
}
