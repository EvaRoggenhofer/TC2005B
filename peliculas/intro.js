// variables, constantes, consola (log, info, warn, error, assert)


//Declaramos variables con let
let pelicula_del_monento = "Barbie";

//Imprimimos en la consola con console.log()
console.log(pelicula_del_monento)

//Declaramos constantes con const
const precio = 55;

console.log(precio)

console.error("Este es un mensaje de error")

console.warn("Esta es una advertencia")

console.info("Esto es información")

// assert continúa la ejecución si el valor es verdadero
console.assert(precio===55); //checkt den Wert, boolean; mismo valor y mismo tipo de variable ===



//Alcance de las variables

if(precio > 50) {

    let respuesta = "Muy caro";
    console.log("Muy caro");
}
else {
    let respuesta ="Buen precio";
    console.log("Buen precio");
}


for (let i = 0; i<=10; i++) { // statt let var nehmen: variable lebt auch ausserhalb der Klammer nach console

    console.log(i);
}


// alert, prompt, confirm
alert("Hola mundo!")

const is_hungry = confirm("Tienes hambre?");
console.log(is_hungry);

const nombre = prompt("Como te llamas?");
console.log("Hola " + nombre);


// funciones tradicionales

function vamonos () {
console.log("Vamonos, ya se acabó la clase!");
}

vamonos();


// funciones modernas
// funcion sin nombre (anónima): se puede asignar a un evento o una variable para ejecutar la función (no tiene nombre!)
() => {
console.log("Esto es una función anónima");
}


// guardando una funcion anonima en una variable:
const funcion_anonima = () => {
    console.log("Esto es una función anónima");
    }

    funcion_anonima();


    // html dinamico con eventos (id Oppenheimer del html; case sensitive)
    const oppenheimer = document.getElementById("Oppenheimer");

    console.log(oppenheimer);


    // So erscheint in der Konsole im Browser "hiciste click en Oppenheimer" und ein Rating erscheint
    // wie macht man es rückgängig? die funktion dynamisch zuweisen, man kann nicht zweimal klick schreiben, sonst überschrieben

    const despliega_rating = () => {
        const rating = "10/10 Excelente";
        oppenheimer.innerHTML = rating;
        oppenheimer.onclick = despliega_nombre;
    }



    const despliega_nombre = () => {
        const nombre = "Oppenheimer";
        oppenheimer.innerHTML = nombre;
        oppenheimer.onclick = despliega_rating;
    }

 

   
    oppenheimer.onclick = () => {
        console.log("Hiciste click en Oppenheimer");
        despliega_rating();
    }





    // arreglos
    // definirlo
    const arreglo = ["Elemento"];

    // anadir otro elemento al arreglo
    arreglo.push["Otro elemento"];

    // noch eins hinzufügen: die Positionen vor 10 bleiben leer
    arreglo[10] = "Uno más";

    // "arreglo" in die Browserkonsole schreiben; dann erscheint mir der print des Inhalts davon
    // man kan sachen zu arreglos hinzufügen, obwohl als Konstante definiert; aber danach kann man den Inhalt der Indizes nicht mehr ändern



    // arreglos asociativos: statt numerischem Index gibt man einen String-Index mit:
    arreglo["Once"] = "Otro más";

    // in php würde man alle Einträge mit for abgehen (recorrido tradicional del arreglo):
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }


    // recorridos alternativos del arreglo WIE sieht man das in der Konsole??
    for(let posicion in arreglo) {
        console.log(posicion);
    }


    for (let valor of arreglo) {
        console.log(valor);
    }
    // in guarda posiciones/indices; of guarda los valores



    // objetos (json: javascript object notation)
    const objeto = {
        atributo_1: "valor_1",
        atributo_2: "valor_2",
        atributo_3: "valor_3"
    }

    console.log(objeto);
    console.log(objeto.atributo_1); // imprime valor 1



    for(let posicion in objeto) {
        console.log(posicion);
    }


// Bsp. für Lab HA 4:  <div id="ejercicio_1"></div> dies in html hinzufügen
function ejercicio_1() {
    document.getElementById("ejercicio_1").innerHTML = "Respuesta del ejercicio 1";
}
ejercicio_1()






    
    