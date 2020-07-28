
let car : Car;

function createCar() {
    var plate = (document.getElementById("plate") as HTMLInputElement).value; 
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
        
        const infocar: HTMLElement = document.getElementById('infocar') as HTMLElement
        infocar.innerHTML = "COCHE: ";
        const infocar1: HTMLElement = document.getElementById('infocar1') as HTMLElement
        infocar1.innerHTML = "Marca: " + brand + "<br/ > Matricula: " + plate + " <br/ > Color: " + color;


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
    
        var brand = document.getElementById("brand" + i) as HTMLInputElement;
        var diameter = document.getElementById("diameter" + i) as HTMLInputElement;
        if(brand.value==="" || diameter.value==""){
            alert("Todos los campos son obligatorios")
        }else if(Number(diameter.value) < 0 || Number(diameter.value) > 2){
            alert("La medida no es compatible, error en la rueda: " + i )
        }
        else{
            contadorRuedas ++;
    } }

    if(contadorRuedas == 4){

        const infowheel: HTMLElement = document.getElementById('infowheel') as HTMLElement
        infowheel.innerHTML = "RUEDAS:" ;

        for(var i=1; i<=4; i++){
        var brand = document.getElementById("brand" + i) as HTMLInputElement;
        var diameter = document.getElementById("diameter" + i) as HTMLInputElement;
        
        const infowheel: HTMLElement = document.getElementById('infowheel' + i) as HTMLElement
        infowheel.innerHTML = i +" Marca: " + brand.value + " Diametro: " + diameter.value;
        }
    }
    else{

    }
   
}
