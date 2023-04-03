/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas*/

class Libro{
    constructor(ISBN, titulo, autor, paginas){
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;
    }
    set ingresarISBN(ISBN){
        this._ISBN = ISBN;
    }
    set ingresarTitulo(titulo){
        this._titulo = titulo;
    }
    set ingresarAutor(autor){
        this._autor = autor;
    }
    set ingresarPaginas(paginas){
        this._paginas = paginas;
    }
    get obtenerISBN(){
        return this._ISBN;
    }
    get obtenerTitulo(){
        return this._titulo;
    }
    get obtenerAutor(){
        return this._titulo;
    }
    get obtenerPaginas(){
        return this._paginas;
    }
    mostrarLibro(){
        return `El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene páginas ${this._paginas}`;
      }
}

let libro_terror = new Libro(9780340951453,"IT", "Stephen Kings",1504); 
let libro_fantasia = new Libro(9789878000107,"Harry Potter y la piedra filosofal", "J. K. Rowlling ",309);

document.write('<h2>Libros Creados </h2>');
document.write(`<p>${libro_terror.mostrarLibro()}</p>`);
document.write(`<p>${libro_fantasia.mostrarLibro()}</p>`);
document.write('<hr>');
document.write('<h2>Libros con mayor Cantidad de Hojas </h2>');
if(libro_terror.obtenerPaginas >= libro_fantasia.obtenerPaginas){
    document.write(`<p>${libro_terror.mostrarLibro()}</p>`);
}else{
    document.write(`<p>${libro_fantasia.mostrarLibro()}</p>`);
}
document.write('<hr>');