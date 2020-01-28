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
  document.getElementById('body').style.background = 'white'
}

function darkmode() {
  document.getElementById('body').style.background = '#474747'
}
