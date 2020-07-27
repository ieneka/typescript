
let car : Car;

function createCar() {
    var plate = (document.getElementById("plate") as HTMLInputElement).value; // contingut inputs cotxe
    var color = (document.getElementById("color") as HTMLInputElement).value;
    var brand = (document.getElementById("brand") as HTMLInputElement).value;
    var expresion = new RegExp("^[0-9]{4}[A-Z]{3}$");
    var car = new Car(brand, plate, color);
    
    
    if(plate=="" || brand=="" || color==""){
        alert("Todos los campos son obligatorios");
    }
    else if((!expresion.test(plate))){
        alert("La matricula es incorrecta - 1234BKL");
    }
    else{
        document.getElementById("infocar").innerHTML(`COCHE: \n Marca: ${brand} \n Matricula: ${plate} \n Color ${color}`);

        showWheelForm();
    }
}
 
function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}

function createWheel(brand : string, diameter : number){
    var wheel = new Wheel(diameter, brand);
    for(var i=1; i<=4; i++) {
        document.getElementById("wheel" + i) as HTMLInputElement;
        document.getElementById("brand" + i) as HTMLInputElement;

        if(diameter < 0.2 || diameter > 2){
            alert("Las medidas de la rueda" + i "son incorrectas => 0.2 - 2");
    
        }else if(diameter == null){
            alert("Es obligatorio rellenar las medidas");
        }
        else{
            console.log(`RUEDAS: \n Marca: ${brand} Diametro: ${diameter}`);
        }
    } 
    
   
}
