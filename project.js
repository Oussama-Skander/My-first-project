 function calculate() { 
        var x = document.getElementById("result").value 
        var y = eval(x) 
        document.getElementById("result").value = y
    } 
         
function show(result) {
        document.getElementById("result").value += result 
    } 
         
function reset() { 
        document.getElementById("result").value = "" 
    } 
function del(){
    document.getElementById("result").value
}
