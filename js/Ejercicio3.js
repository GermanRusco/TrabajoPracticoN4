/*Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar 
y mostrar sus propiedades, calcular el perímetro y el área*/

class Rectangulo{
    constructor(altura=0,base=0){
        this._altura = altura;
        this._base = base;
    }
    set ingresarAltura(altura){
        this._altura = altura;
    }
    set ingresarBase(base){
        this._base = base;
    }
    get obtenerAltura(){
        return this._altura
    }
    get obtenerBase(){
        return this._base
    }
    get area(){
        return (this._altura*this._base);
    }
    get perimetro(){
        return (2*(this._altura+this._base));
    }
}

let rectangulo_1 = new Rectangulo();

rectangulo_1.ingresarAltura = 20;
rectangulo_1.ingresarBase = 15;

let areaRectangulo_1 = rectangulo_1.area;
let perimetroRectangulo_1 = rectangulo_1.perimetro;

document.write(`La Altura del rectangulo es: ${rectangulo_1.obtenerAltura} y la Base del rectangulo es: ${rectangulo_1.obtenerBase}`);
document.write('<br>');
document.write(`El area del rectangulo es: ${areaRectangulo_1}`);
document.write('<br>');
document.write(`El perimetro del rectangulo es: ${perimetroRectangulo_1}`);