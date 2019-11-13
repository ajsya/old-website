var audio = new Audio('https://cdn.glitch.com/3595c9f1-773e-474c-ab42-b26a406b450d%2Fdrop.wav?v=1571445016078'); // Loads sound when page loaded

function load(){
    var r = confirm("WARNING!\n\nMuch derpy birb!");
    if (r == true) {
          audio.play();
          document.getElementById('dropBoi').style.visibility = "hidden";
          document.body.style.backgroundImage = "url('https://cdn.glitch.com/3595c9f1-773e-474c-ab42-b26a406b450d%2Fbirb.gif?v=1571445151103')";
          document.body.style.backgroundRepeat = "repeat";
        }
  
    }
