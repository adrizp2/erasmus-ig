//comentarios de una sola linea

/*comantario
de varias lineas*/




/*sintaxis vrear variable

1. var nombreVariable;  //no usar
2. let nombreVariable;


const PI=3.1415; constantes


nombrar variable(nombre descriptivo)
puede contenar letras numeros y guiones aka underscore
let nombre01_20

no puede empezar con numero aka nu incepe cu nr
let 01nombre;

no puede ser nombrada con palabras del propio lenguaje
let console;
let for;
let alert;

let nombreAlumno; (✅) (camel case);
*/




/* var nombre='messi';
let apellido='ronaldo';

console.log(nombre);
console(apellido);

var nombre='ma ta';
console.log(nombre);

let apellido='tac tu'; //nu merge
 */





// tipos de datos en javascrtipt
/*
       number -->> numerico
          let numero  = 2;
          let numero2 = 3.1489
       string -->> cadena de caracteres aka chain of characters
          let cadena = 'cadena de caracteres';
          let cadena2 = "cadena de caracteres";
          let cadena3 = `cadena de caracteres`;
       boolean -->> true or false
          let boolean = true;
       null -->> sin valor(no value) o contenido
       undefined -->> sin definir
          let sinDefinir;
       object -->> objeto

          let alumno = {
           'name' : 'ma ta',
           'apellido' : 'tac tu',
           'hobby' : 'sa rad de vertis'
           };
*/

let numero=10;
console.log("la variable numero" + " es " + typeof numero);
console.log("el contenido es: " + numero);

let boolean = true;
console.log(typeof boolean)

let cadena;

let alumno = {
    'name' : 'ma ta',
    'apellido' : 'tac tu',
    'hobby' : 'sa rad de vertis'
    };

console.log(typeof alumno);

/* operadores */

/*

-> asignacion = asigna un valor a una varable
   -> += suma y asigna
   -> -= resta y asigna
   -> *= multiplicacion y asigna
   etc etc
   -> aritmeticos
   -> suma +
   -> resta - 
   -> multiplicacion *
   -> division /
   -> modulo % resto de la division
*/

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 % numero2);
console.log(numero1 / numero2);

/* operadores de logicos o de comparacion

igual ==
igual estricto ===   compara si tipul si valoarea
distinto !=
distinto estricto !==
mayor que >
mayor igual que >=
menor que <
menor igual que <=

*/



console.log(numero1 == numero2);

numero1=10;
cadena='10';
console.log(numero1 == cadena); //true
console.log(numero1 === cadena); //false

/* concatenacion 

        unir dos string
        syntax

        "da te" + "dreq"
        "da te dreq"
*/

/* operador ternario

    se necesitan tres(3) operadores
    es un operador condicional
    syntax

       condicion?(if?)  valor1 : valor2;

       si la condicion es true devuelve valor1 si no, duelve valor2

*/

numero1=10;
numero2=5;
console.log(numero1 === numero2 ? "son iguales" : "son diferentes");
//sont diferentes


/* condicionales */

/* 


if...else

   syntax:
      if(co9ndicion){
        bloque de codigo si verdado
    } else {
     bloque que codigo si falso
    }

    valores falsos:
    -false
    -undefined
    -null
    -0
    -NaN
    -'' empty string
*/

/*

switch...case

    syntax:
       switch(exprescion){
        case valor1:
             bloque de codigo si valor1
             break;
        case valor2:
            bloque de codigo si valor2
            break;
        case valor3:
            bloque de codigo si valor3
            break;
        default:
            bloque de codigo por dfecto
            si no es nigun valor anterior
    }


    if(condition1){
         code
    } else if(condition2){
         code2
    } else if(condition3){
         code3
    } else {
         default code
    }
*/

nombre='bunica tu';

switch(nombre){
    case 'ma ta':
        console.log("buna sunt ma ta");
        break;
    case 'tac tu':
        console.log("buna sunt tac tu");
        break;
    default:
        console.log("buna nu te cunosc am plecat dupa lapte"); //asta se afiseaza ca nu e niciuna duh
}


/* loops */

/* 

for

    syntax:
      for(let i=0; i<10; i++){
          repite 10 veces este codigo
      }


while

    syntax:
      while(condicion){
           bloque de codigo
      }


do .... while

    syntax:
      do {
          bloque de codigo
      }while(condition);


*/


/* funciones */

/*

    syntax:
      function nombreFunction(parametros opcionales){
           bloque de codigo
           return opcional si duelve valor
      }

*/

function operacionAritmetica(operador, valor1, valor2){
    if(operador === '*'){
        return valor1*valor2;

    } else if(operador === '+'){
        return valor1+valor2;

    } else if(operador === '-'){
        return valor1-valor2;

    } else if(operador === '/'){
        return valor1-valor2;
    }

}


let resultado = 0;

resultado = operacionAritmetica('*', numero1, numero2);
console.log("el resultado es " + resultado);

resultado = operacionAritmetica('+', numero1, numero2);
console.log("el resultado es " + resultado);

resultado = operacionAritmetica('-', numero1, numero2);
console.log("el resultado es " + resultado);

resultado = operacionAritmetica('/', numero1, numero2);
console.log("el resultado es " + resultado);



/*   arrays / listas   */

/*                  apple       banana    portocala
      let frutas = ['manzana', 'platano', 'naranja'];

*/

let frutas = ['manzana', 'platano', 'naranja'];
console.log(typeof frutas);


/*    
      object tiene
 
         propriedades igual atributos metodos igual a acciones que puede realizar (funciones)

*/
 

console.log(frutas[0]);


/*running through the elements of the list */
frutas.forEach(element => {
    console.log(element);
});


/* add an element to the list */
frutas.push('kiwi');
console.log(frutas);


/* deleting an element from the list(from the end of it) */
frutas.pop();
console.log(frutas);


/* adding at the beginning */
frutas.unshift('melon', 'ma ta');
console.log(frutas);


/* size of the list//how many elements */
console.log(frutas.lenght);

/* en la pagina mdn developers encontramos mas metodos para lor arrays//aka site pe care sa gasesti refs pt arrays si lists */


/* programacion orientada a objetos (POO) */

/* crear un dato objet */
let persona = new Object();
let coche = {};


persona = {
    'nombre' : 'gabi leca',
    'edad' : '109',
    'profession' : 'prost',
    'reir' : function(){
        console.log("me estoy riendo 😂(gabi are ras de dement scapat de la obregia)"); //to laugh
    }
}

console.log(persona);


/* acceder a un dato del objeto//access the data of an object */
console.log(persona.nombre); //prima var
console.log(persona['edad']);  //a 2a var

/* anadir propriedades//adding properties */

persona.pais = 'autismoland';
console.log(persona);

persona.reir();


/* classes */

/* una mejora sobre la herencia en los objetos// a way to improve the objects

       las classes son como fabrica de objetos
     
     fabrica de vehiculos ---->> coche, moto, bicicleta, camion ...




     syntax:
       class nombreClase {
          constructor(parametros){
             this.parametro1 = parametro1;
             this.parametro2 = parametro2;
             .....
          }
       }

*/



/* ejemplo basico//example */

class Robot{
    constructor(nombre, color){
        this.nombre = nombre; //propriedad del robot
        this.color = color;
    }

    //metodo para que puede hablar
    hablar(){
        console.log(`hola soy ${this.nombre}, tu robot amigo from autismoland y mi color es ${this.color}`);
        
    }
    mover(){
        console.log(`${this.nombre} esta moviendose...`)
    }
}

let robot1 = new Robot('atibot', 'rojo');
robot1.hablar();
robot1.mover();

let robot2 = new Robot('gabi leca', 'mov');
robot2.hablar();
robot2.mover();



/* herencia en POO */

class RobotBailarin extends Robot {
    bailar(){
        console.log(`${this.nombre} esta bailando💃`)
    }
}

let robotBailarin = new RobotBailarin('gabi leca', 'naspa');
robotBailarin.hablar();
robotBailarin.bailar();


/* functiones callback */

/* son funciones que se pasan como parametros de otra funciones y se ejecutan dentro de ellas*/

function saludar(nombre){
    console.log(`buna fratele meu, ${nombre}`)
}

function ingresarNombre(callback){
    let nombre = prompt("escribe tu nombre: ")
    callback(nombre);
}

ingresarNombre(saludar)