function getPrice(){
    const numOne = Number(document.getElementById("price").value);
    const disCount = Number(document.getElementById("discount").value) / 100;
    const totalValue = numOne - (numOne * disCount)
    document.getElementById("total").value = totalValue.toFixed(2);

} 

//I want the input boxes to be clear after I refresh the page

window.onload = function(){
    document.getElementById("price").value = " ";
    document.getElementById("discount").value = "";
    document.getElementById("total").value = "";
}