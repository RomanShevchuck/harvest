function counttr1() {
    var wid = parseFloat(document.querySelector(".wid").value); 
    var den = parseFloat(document.querySelector(".density").value);
    var gr = parseFloat(document.querySelector(".grain").value);  
    var wgt = parseFloat(document.querySelector(".weight").value);
    
    var deferrElement = document.querySelector(".deferr");

    if (isNaN(wid) || isNaN(den) || isNaN(gr) || isNaN(wgt)) {
        deferrElement.textContent = "Будь ласка, введіть правильні числа.";
        return;
    } 

    if (gr > 100) {
        deferrElement.textContent = "Значення відсотків має бути меншим або рівним 100.";
        return;
    } else {
        deferrElement.textContent = "";  
    }

    var result = parseInt((wid * (100/den) * (gr/100) * ((2 - (gr/100)) * ((2 - (gr/100)) + 0.02)) * wgt / 100));

    document.querySelector(".working").value = result;
}

function counttr2() {
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




function counttr3() {
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

    var result = wid * (100/den) * (gr * 0.8)/1000 * wgt * 10;

    document.querySelector(".working").value = result;
}

function counttr4() {
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

function counttr5() {
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

    var result = (wid * (100/den) * gr * wgt) / 1000;

    document.querySelector(".working").value = result;
}

function counttr6() {

    var wid = parseFloat(document.querySelector(".wid").value);
    var density = parseFloat(document.querySelector(".density").value);

    var grains = document.querySelectorAll(".grain");
    var grain1 = parseFloat(grains[0].value);
    var grain2 = parseFloat(grains[1].value);
    var grain3 = parseFloat(grains[2].value);

    var soil = document.getElementById("SoilType").value;

    var deferrElement = document.querySelector(".deferr");

    if (isNaN(wid) || isNaN(density) || isNaN(grain1) || isNaN(grain2) || isNaN(grain3)) {
        deferrElement.textContent = "Будь ласка, введіть правильні числа.";
        return;
    } else {
        deferrElement.textContent = "";
    }

    // визначаємо k залежно від ґрунту
    var k;

    if (soil === "low") {
        k = 18;
    } else if (soil === "middle") {
        k = 21;
    } else if (soil === "high") {
        k = 24;
    }

    // середня кількість гички
    var n = (grain1 + grain2 + grain3) / 3;

    // маса буряка
    var m = k * Math.pow(n, 1.5);

    // потенційний врожай
    var result = wid * (100 / density) * 5000 * m;

    // переведення у центнери
    result = result / 1000000;

    document.querySelector(".working").value = result.toFixed(2);
}





