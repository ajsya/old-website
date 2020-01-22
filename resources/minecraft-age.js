function myFunction() {
  var age = document.getElementById("age").value;
  // alert(age)
  var days = age * 365
  var minecraft_days = 72 * days
  var minecraft_age = minecraft_days / 365
  document.getElementById("Output").innerHTML = "You are, " + minecraft_age + " years old in Minecraft!";
}
