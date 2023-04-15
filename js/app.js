let formulario = document.querySelector('form');
let btnMostrarGeneracion = document.querySelector('#btnMostrarGeneracion');
let btnMayorDeEdad = document.querySelector('#btnMayorDeEdad');
let btnEliminarDatos = document.querySelector('#btnEliminarDatos');

class Persona {
	constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = dni;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
		this.anioDeNacimiento = anioDeNacimiento;
    }
}

formulario.addEventListener('submit',datosDelUsuario);
btnMostrarGeneracion.addEventListener('click', mostrarGeneracion);
btnMayorDeEdad.addEventListener('click', mayorDeEdad);
btnEliminarDatos.addEventListener('click', eliminarDatos);

function datosDelUsuario(e){
    e.preventDefault();
    nombre = document.getElementById('nombre').value;
    edad = document.getElementById('edad').value;
    dni = document.getElementById('dni').value;
    sexo = document.getElementById('sexo').value;
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    anioDeNacimiento = document.getElementById('anioDeNacimiento').value;
    
}

function mostrarGeneracion (){
    if(anioDeNacimiento >= 1994 && anioDeNacimiento <= 2010 ){
        alert(`${nombre} perteneces a la generación Z`);
    }else if(anioDeNacimiento >= 1981 && anioDeNacimiento <= 1993){
        alert(`${nombre} perteneces a la generación Y (millennials)`);
    }else if(anioDeNacimiento >= 1969 && anioDeNacimiento <= 1980){
        alert(`${nombre} perteneces a la generación X`);
    }else if(anioDeNacimiento >= 1949 && anioDeNacimiento <= 1968){
        alert(`${nombre} perteneces a la generación Baby Boom`);
    }else if(anioDeNacimiento >= 1930 && anioDeNacimiento <= 1948){
        alert(`${nombre} perteneces a la generación Silent Generation (Los niños de la postguerra)`)
    }
}

function mayorDeEdad(){
    if(edad >= 18){
        alert("Sos mayor de edad");
    }else{
        alert("Sos menor de edad");
    }
}

function eliminarDatos(){
    formulario.reset();
}