function setScreen(value) {
   document.getElementById("screen").value += value;
}

function cal() {
   let input = document.getElementById("screen").value;
   let result = eval(input);
   document.getElementById("screen").value = result;
}

function clearScreen () {
   document.getElementById("screen").value = 0;
}