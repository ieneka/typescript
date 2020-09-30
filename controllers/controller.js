"use strict";
var car;
function createCar() {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var expresion = new RegExp("^[0-9]{4}[A-Z]{3}$");
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
        car = new Car(brand, plate, color);
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
        var brand = document.getElementById("brand" + i).value;
        var diameter = document.getElementById("diameter" + i).value;
        if (brand === "" || diameter == "") {
            alert("Todos los campos son obligatorios");
        }
        else if (Number(diameter) < 0 || Number(diameter) > 2) {
            alert("La medida no es compatible, error en la rueda: " + i);
        }
        else {
            contadorRuedas++;
        }
    }
    if (contadorRuedas == 4) {
        var infowheel = document.getElementById('infowheel');
        infowheel.innerHTML = "RUEDAS:";
        var infowheel1_1 = document.getElementById('infowheel1');
        for (i = 1; i <= 4; i++) {
            var brand = document.getElementById("brand" + i).value;
            var diameter = document.getElementById("diameter" + i).value;
            var wheel = new Wheel(Number(diameter), String(brand));
            car.addWheel(wheel);
        }
        $.each(car.wheels, function (index) {
            car.wheels[index].brand;
            car.wheels[index].diameter;
            infowheel1_1.insertAdjacentHTML('beforeend', "Marca: " + car.wheels[index].brand + " Diametro: " + car.wheels[index].diameter + "</br>");
        });
    }
    else {
    }
}
