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

function counttr7() {

    // Отримання даних

    let moisture = parseInt(document.querySelector(".wid").value);

    let soil = document.getElementById("SoilType").value;

    let previousCrop = document.getElementById("PreviousCrop").value;

    let fertilizer = document.getElementById("Fertilizer").value;

    let resultFields = document.querySelectorAll(".working");

    let errorField = document.querySelector(".deferr");

    errorField.innerHTML = "";

    // Перевірка вологості

    if (isNaN(moisture) || moisture < 0 || moisture > 100) {

        errorField.innerHTML = "Введіть коректну вологість грунту від 0 до 100%";

        return;
    }

    // Культури

    let scores = {

        "Озима пшениця": 0,

        "Кукурудза": 0,

        "Соняшник": 0,

        "Цукровий буряк": 0,

        "Картопля": 0,

        "Соя": 0,

        "Ячмінь": 0
    };

    // ------------------------------------------------
    // ВПЛИВ ТИПУ ГРУНТУ
    // ------------------------------------------------

    if (soil == "chrn") {

        scores["Озима пшениця"] += 5;

        scores["Кукурудза"] += 5;

        scores["Цукровий буряк"] += 4;

        scores["Соняшник"] += 4;
    }

    if (soil == "grey") {

        scores["Картопля"] += 5;

        scores["Ячмінь"] += 4;

        scores["Озима пшениця"] += 3;
    }

    if (soil == "dern") {

        scores["Картопля"] += 5;

        scores["Соя"] += 3;

        scores["Соняшник"] -= 2;
    }

    if (soil == "chest") {

        scores["Соняшник"] += 5;

        scores["Кукурудза"] += 3;
    }

    if (soil == "brown") {

        scores["Ячмінь"] += 4;

        scores["Соя"] += 4;
    }

    // ------------------------------------------------
    // ВПЛИВ ВОЛОГОСТІ
    // ------------------------------------------------

    if (moisture < 30) {

        scores["Соняшник"] += 5;

        scores["Ячмінь"] += 3;

        scores["Картопля"] -= 5;

        scores["Цукровий буряк"] -= 4;
    }

    if (moisture >= 30 && moisture <= 60) {

        scores["Озима пшениця"] += 4;

        scores["Кукурудза"] += 4;

        scores["Соя"] += 3;
    }

    if (moisture > 60) {

        scores["Картопля"] += 5;

        scores["Цукровий буряк"] += 5;

        scores["Соняшник"] -= 3;
    }

    // ------------------------------------------------
    // ВПЛИВ ПОПЕРЕДНЬОЇ КУЛЬТУРИ
    // ------------------------------------------------

    // Повторний посів тієї самої культури небажаний

    if (previousCrop == "wint_wheat") {

        scores["Озима пшениця"] -= 10;

        scores["Соя"] += 3;

        scores["Кукурудза"] += 2;
    }

    if (previousCrop == "turnip") {

        scores["Озима пшениця"] += 5;

        scores["Ячмінь"] += 3;
    }

    if (previousCrop == "beet") {

        scores["Цукровий буряк"] -= 10;

        scores["Кукурудза"] += 4;

        scores["Соя"] += 3;
    }

    if (previousCrop == "corn") {

        scores["Кукурудза"] -= 10;

        scores["Соя"] += 4;

        scores["Ячмінь"] += 3;
    }

    if (previousCrop == "potato") {

        scores["Картопля"] -= 10;

        scores["Озима пшениця"] += 4;
    }

    if (previousCrop == "sunflower") {

        scores["Соняшник"] -= 10;

        scores["Цукровий буряк"] -= 5;

        scores["Ячмінь"] += 4;
    }

    if (previousCrop == "sum_wheat") {

        scores["Озима пшениця"] += 3;

        scores["Ячмінь"] += 3;
    }

    // ------------------------------------------------
    // ВПЛИВ ДОБРИВ
    // ------------------------------------------------

    if (fertilizer == "azot") {

        scores["Кукурудза"] += 5;

        scores["Озима пшениця"] += 4;
    }

    if (fertilizer == "selitr") {

        scores["Ячмінь"] += 4;

        scores["Озима пшениця"] += 3;
    }

    if (fertilizer == "K_Salt") {

        scores["Цукровий буряк"] += 5;

        scores["Картопля"] += 5;
    }

    if (fertilizer == "plac") {

        scores["Кукурудза"] += 5;

        scores["Соя"] += 4;
    }

    if (fertilizer == "ash") {

        scores["Картопля"] += 4;

        scores["Ячмінь"] += 3;
    }

    // ------------------------------------------------
    // ПОШУК НАЙКРАЩОЇ ТА НАЙГІРШОЇ КУЛЬТУРИ
    // ------------------------------------------------

    let bestCulture = "";

    let worstCulture = "";

    let maxScore = -999;

    let minScore = 999;

    for (let culture in scores) {

        if (scores[culture] > maxScore) {

            maxScore = scores[culture];

            bestCulture = culture;
        }

        if (scores[culture] < minScore) {

            minScore = scores[culture];

            worstCulture = culture;
        }
    }

    // ------------------------------------------------
    // ВИВЕДЕННЯ РЕЗУЛЬТАТУ
    // ------------------------------------------------

    resultFields[0].value = bestCulture;

    resultFields[1].value = worstCulture;
}





