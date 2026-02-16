function counttr() {
    var wid = parseFloat(document.querySelector(".wid").value); 
    var den = parseFloat(document.querySelector(".density").value);
    var gr = parseFloat(document.querySelector(".grain").value);  
    var wgt = parseFloat(document.querySelector(".weight").value);
    
    var deferrElement = document.querySelector(".deferr");

    if (isNaN(wid) || isNaN(den) || isNaN(gr) || isNaN(wgt)) {
        deferrElement.textContent = "Будь ласка, введіть правильні числа.";
        return;
    } else {
        deferrElement.textContent = "";  
    }

    var result = (wid * (100/den) * gr * wgt) / 10000;

    document.querySelector(".working").value = result;
}


