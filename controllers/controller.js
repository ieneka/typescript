"use strict";
var car;
function createCar() {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var expresion = new RegExp("^[0-9]{4}[A-Z]{3}$");
    var car = new Car(brand, plate, color);
    if (plate == "" || brand == "" || color == "") {
        alert("Todos los campos son obligatorios");
    }
    else if ((!expresion.test(plate))) {
        alert("La matricula es incorrecta - 1234BKL");
    }
    else {
        var infocar = document.getElementById('infocar');
        infocar.innerHTML = "COCHE: ";
        var infocar1 = document.getElementById('infocar1');
        infocar1.innerHTML = "Marca: " + brand + "<br/ > Matricula: " + plate + " <br/ > Color: " + color;
        showWheelForm();
    }
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
function createWheel() {
    var contadorRuedas = 0;
    for (var i = 1; i <= 4; i++) {
        var brand = document.getElementById("brand" + i);
        var diameter = document.getElementById("diameter" + i);
        if (brand.value === "" || diameter.value == "") {
            alert("Todos los campos son obligatorios");
        }
        else if (Number(diameter.value) < 0 || Number(diameter.value) > 2) {
            alert("La medida no es compatible, error en la rueda: " + i);
        }
        else {
            contadorRuedas++;
        }
    }
    if (contadorRuedas == 4) {
        var infowheel = document.getElementById('infowheel');
        infowheel.innerHTML = "RUEDAS:";
        for (var i = 1; i <= 4; i++) {
            var brand = document.getElementById("brand" + i);
            var diameter = document.getElementById("diameter" + i);
            var infowheel_1 = document.getElementById('infowheel' + i);
            infowheel_1.innerHTML = i + " Marca: " + brand.value + " Diametro: " + diameter.value;
        }
    }
    else {
    }
}
