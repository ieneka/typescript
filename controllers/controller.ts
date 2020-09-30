
let car : Car;


function createCar() {
    var plate = (document.getElementById("plate") as HTMLInputElement).value; 
    var color = (document.getElementById("color") as HTMLInputElement).value;
    var brand = (document.getElementById("brand") as HTMLInputElement).value;
    var expresion = new RegExp("^[0-9]{4}[A-Z]{3}$");
    
    
    
    if(plate=="" || brand=="" || color==""){
        alert("Todos los campos son obligatorios");
    }
    else if((!expresion.test(plate))){
        alert("La matricula es incorrecta - 1234BKL");
    }
    else{
        
        const infocar: HTMLElement = document.getElementById('infocar') as HTMLElement
        infocar.innerHTML = "COCHE: ";
        const infocar1: HTMLElement = document.getElementById('infocar1') as HTMLElement
        infocar1.innerHTML = "Marca: " + brand + "<br/ > Matricula: " + plate + " <br/ > Color: " + color;
        car = new Car(brand, plate, color);

        showWheelForm();
    }
}

 
function showWheelForm() {
    let carForm = <HTMLInputElement>document.getElementById("create-car-form");
    let carWheel = <HTMLInputElement>document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}

function createWheel(){
    let contadorRuedas = 0;
     
    for(var i=1; i<=4; i++) {
        var brand = (document.getElementById("brand" + i) as HTMLInputElement).value; 
        var diameter = (document.getElementById("diameter" + i) as HTMLInputElement).value;
        if(brand ==="" || diameter ==""){
            alert("Todos los campos son obligatorios")
        }else if(Number(diameter) < 0 || Number(diameter) > 2){
            alert("La medida no es compatible, error en la rueda: " + i )
        }
        else{
            contadorRuedas ++;
    } 
}

    if(contadorRuedas == 4){

        const infowheel: HTMLElement = document.getElementById('infowheel') as HTMLElement
        infowheel.innerHTML = "RUEDAS:" ;
        const infowheel1: HTMLElement = document.getElementById('infowheel1') as HTMLElement;
        
        for( i=1; i<=4; i++){
        var brand = (document.getElementById("brand" + i) as HTMLInputElement).value; 
        var diameter = (document.getElementById("diameter" + i) as HTMLInputElement).value;
        var wheel = new Wheel(Number(diameter),String(brand))
        car.addWheel(wheel);
        }
        
        $.each(car.wheels, function (index) {
            car.wheels[index].brand
            car.wheels[index].diameter;

            infowheel1.insertAdjacentHTML('beforeend',"Marca: " + car.wheels[index].brand + " Diametro: " + car.wheels[index].diameter+ "</br>"); 
        })
       
        
    }else{

    }
   
}
