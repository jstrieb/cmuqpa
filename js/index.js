var totalUnits = 0;
var grades = ["R", "D", "C", "B", "A"];
var sliders = [];
var letters = [];
var units = [];

table = document.getElementById("mainTable");

function recalculateGrade() {
    var totalqpa = 0;
    for (var i = 0; i < units.length; i++) {
        totalqpa += parseInt(units[i].value) / totalUnits * sliders[i].value;
    }
    document.getElementById("qpa").innerHTML = totalqpa.toFixed(3);
}

function onSliderInput() {
    var index = sliders.indexOf(this);
    letters[index].innerHTML = grades[this.value];
    recalculateGrade();
}

function onSpinnerInput() {
    totalUnits = 0;
    for (var i=0; i<units.length; i++) {
        totalUnits += parseInt(units[i].value);
    }
    document.getElementById("units").innerHTML = totalUnits;
    recalculateGrade();
}

function addClass() {
    var row = document.createElement("tr");
    var sliderCell = document.createElement("td");
    var slider = document.createElement("input");
    slider.min = "0";
    slider.max = "4";
    slider.value = "4";
    slider.type = "range";
    slider.oninput = onSliderInput;
    sliders.push(slider);
    sliderCell.appendChild(slider);
    sliderCell.classList.add("slider");
    row.appendChild(sliderCell);
    
    var letterCell = document.createElement("td"); letterCell.appendChild(document.createTextNode(grades[slider.value]));
    letterCell.classList.add("centerText");
    letters.push(letterCell);
    row.appendChild(letterCell);
    
    var courseCell = document.createElement("td");
    var courseName = document.createElement("input");
    courseName.type = "text";
    courseCell.appendChild(courseName);
    row.appendChild(courseCell);
    
    var unitsCell = document.createElement("td");
    var unitsNumber = document.createElement("input");
    unitsNumber.value = 12;
    unitsNumber.type = "number";
    unitsNumber.oninput = onSpinnerInput;
    units.push(unitsNumber);
    unitsCell.appendChild(unitsNumber);
    row.appendChild(unitsCell);
    
    table.appendChild(row);
    
    onSpinnerInput();
    recalculateGrade();
}