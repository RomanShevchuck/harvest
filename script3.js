function counttr() {
    var wid = parseFloat(document.querySelector(".wid").value); 
    var den = parseFloat(document.querySelector(".density").value);
    var gr = parseFloat(document.querySelector(".grain").value);  
    var wgt = parseFloat(document.querySelector(".weight").value);
    
    var deferrElement = document.querySelector(".deferr");

    if (isNaN(wid) || isNaN(den) || isNaN(gr) || isNaN(wgt)) {
        deferrElement.textContent = "Будь ласка, введіть правильні числа.";
        return;
    }

    if (den > 100) {
        deferrElement.textContent = "Значення відсотків має бути меншим або рівним 100.";
        return;
    }

    if (gr > 100) {
        deferrElement.textContent = "Значення відсотків має бути меншим або рівним 100.";
        return;
    } 

    deferrElement.textContent = "";  

    var result = parseInt(wid * (den/100) * (1.1 - (gr/100)) * wgt);

    document.querySelector(".working").value = result;
}
