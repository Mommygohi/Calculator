function process(value){
  if(value == "clear"){
    document.getElementById("output").innerText = "";
  } else if(value == "submit"){
    calculate();
  } else {
    document.getElementById("output").innerText += value;
  }
}

function calculate(){
  document.getElementById("output").innerText = eval(document.getElementById("output").innerText);
}
