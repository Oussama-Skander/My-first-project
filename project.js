 function calculate() { 
        var x = document.getElementById("result").value; 
        var y = eval(x);
        document.getElementById("result").value = y;
    } 
         
function show(result) {
        document.getElementById("result").value += result;
    } 
         
function reset() { 
        document.getElementById("result").value = "";
    } 
function del(){
    var num = document.getElementById("result").value;
    var num1 = num.substring(0, num.length - 1);
    document.getElementById("result").value = num1;
}
function pi(){
     document.getElementById("result").value = Math.PI;
}
function squareRoot(){
    var x = document.getElementById("result").value;
    var y =  Math.sqrt(x);
    document.getElementById("result").value = y;
}
function factorial(){
     var x = document.getElementById("result").value;
     var y = 1;
     for(var i = 1; i <= x; i++){
    y *= i;
    }
    document.getElementById("result").value = y; 
}
function PosNig(){
    var x = document.getElementById("result").value;
    var y = -x;
    document.getElementById("result").value = y;
}