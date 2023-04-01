/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), 
peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando 
a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

let generaciones = [
    {
      nombre: 'generaciónZ',
      tiempo: [
        1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
        2006, 2007, 2008, 2009, 2010,
      ],
      poblacion: 7800000,
      circunstanciaHistorica: 'Expansión masiva de Internet',
      caracteristica: 'Irreverencia',
    },
    {
      nombre: 'generaciónY',
      tiempo: [
        1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
        1993,
      ],
      poblacion: 7200000,
      circunstanciaHistorica: 'Inicio de la digilitación',
      caracteristica: 'Frustración',
    },
    {
      nombre: 'generaciónX',
      tiempo: [
        1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1978, 1979,
      ],
      poblacion: 9300000,
      circunstanciaHistorica: 'Crisis del 73 y transición española',
      caracteristica: 'Obsesión por el éxito',
    },
    {
      nombre: 'Baby Boom',
      tiempo: [
        1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960,
        1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968,
      ],
      poblacion: 12200000,
      circunstanciaHistorica: 'Paz y explotasión demográfica',
      caracteristica: 'Ambición',
    },
    {
      nombre: 'SilentGeneration(Los niños de la PostGuerra)',
      tiempo: [
        1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941,
        1942, 1943, 1944, 1945, 1946, 1947, 1948,
      ],
      poblacion: 6300000,
      circunstanciaHistorica: 'Conflictos bélicos',
      caracteristica: 'Austeridad',
    },
  ];
  
  class Persona {
    constructor(nombre, edad, dni, genero, peso, altura, nacimiento, ) {
      this._nombre = nombre;
      this._edad = edad;
      this._dni = dni;
      this._genero = genero;
      this._peso = peso;
      this._altura = altura;
      this._nacimiento = nacimiento;
    }
    mostrarGeneracion() {
      let generacion = generaciones.find((element) =>
        element.tiempo.includes(this._nacimiento)
      );
      document.write(
        `Pertenece a la generación: ${generacion.nombre} y su rasgo característico es: ${generacion.caracteristica}`
      );
    }
    esMayordeEdad() {
      if (this._edad >= 18) {
        document.write(`Es mayor de edad`);
      } else {
        document.write(`Es menor de edad`);
      }
    }
    mostrarDatos() {
      document.write('<h3>Datos personales:</h3>');
      document.write('<ul>');
      document.write(`<li>Código: ${this._nombre}</li>`);
      document.write(`<li>Nombre: ${this._edad}</li>`);
      document.write(`<li>DNI: ${this._dni}</li>`);
      document.write(`<li>Género: ${this._genero}</li>`);
      document.write(`<li>Peso: ${this._peso}</li>`);
      document.write(`<li>Altura: ${this._altura}</li>`);
      document.write(`<li>Año de nacimiento: ${this._nacimiento}</li>`);
      document.write(`</ul>`);
    }
    generarDNI() {
      this._dni = Math.floor(Math.random() * 99999999 + 1);
      document.write(`Nuevo DNI generado: ${this._dni}`);
    }
  }
  
  //función
  mostrarDatosPersona = (persona) => {
    document.write(`<h2>Datos de ${persona.nombre}:</h2>`);
    document.write(`<ul>`);
    document.write(`<li>`);
    persona.mostrarGeneracion();
    document.write(`</li>`);
    document.write(`<li>`);
    persona.esMayordeEdad();
    document.write(`</li>`);
    document.write(`<li>`);
    persona.mostrarDatos();
    document.write(`</li>`);
    document.write(`<li>`);
    persona.generarDNI();
    document.write(`</li>`);
    document.write(`</ul>`);
  };
  
  const German = new Persona(
    'German',
    32,
    '34764924',
    'M',
    120,
    180,
    1990,
  );
  
  const Paula = new Persona(
    'Paula',
    20,
    '37455211',
    'F',
    70,
    168,
    2003,
  );

  
  mostrarDatosPersona(German);
  document.write('<hr>');
  mostrarDatosPersona(Paula);
  document.write('<hr>');