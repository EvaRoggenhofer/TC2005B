
// alert
// alert("Bienvenido a mi sitio web!")



// !!!!!!!!!! FEHLT:  Para automatizar las pruebas, puedes utilizar console.assert()


// prompt ejercicio 1

function start_ejercicio_1(){
    const numero_ejercicio_1 = prompt("Entra un número");
    alert (numero_ejercicio_1);

    if (numero_ejercicio_1 != null) {
        console.log("numero_ejercicio_1 is not null")       // https://bobbyhadz.com/blog/javascript-check-if-variable-is-not-null

        document.write('<table border="1">');               // https://stackoverflow.com/questions/41528320/trying-to-get-html-table-to-appear-with-document-write-in-javascript
        document.write('<tr><th>numero<th>cuadrados</th><th>cubos</th></tr>')


        for (let i = 1; i <= numero_ejercicio_1; i++) {

                let cuadrado = Math.pow(i,2);
                let cubo = Math.pow(i,3);

                document.write('<tr><td>' + i + '<td>' + cuadrado+ '</td><td>' + cubo + '</td></tr>');  // https://stackoverflow.com/questions/45697981/javascript-how-to-use-variable-when-writing-table

        }

        // document.write borra el html existente; un botón "reload" sirve para volver a los ejercicios:
        document.write('<button onClick="window.location.reload();">Restart</button>')      // https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click

      }

}


  


// prompt ejercicio 2

function start_ejercicio_2(){

    var startTime = performance.now() // start: medir el tiempo https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
    
    let numero_aleatorio_1 = Math.floor((Math.random() * 100) + 1); // generando un número aleatorio entero entre 1 y 100: https://www.w3schools.com/jsref/jsref_random.asp
    console.log(numero_aleatorio_1);

    let numero_aleatorio_2 = Math.floor((Math.random() * 100) + 1);
    console.log(numero_aleatorio_2);

    const resultado_computadora_ejercicio_2 = numero_aleatorio_1 + numero_aleatorio_2;

    //alert("Por favor calcula " + numero_aleatorio_1 + " + " + numero_aleatorio_2 + "!")  // https://www.wikihow.com/Code-an-Alert-with-a-Variable-Using-Javascript#:~:text=Type%20%22alert%20(%22Hey%2C,%22Heya%2C%20Trevor!%22.
    const resultado_usuario_ejercicio_2 = prompt("Por favor calcula " + numero_aleatorio_1 + " + " + numero_aleatorio_2 + "!");

    var endTime = performance.now() // end: medir el tiempo

    let duration = endTime - startTime;

    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`) // resultado: medir el tiempo

    if (resultado_computadora_ejercicio_2 == resultado_usuario_ejercicio_2) {

        alert("correcto; te tardaste " + Math.round(duration/1000) + " segundos");  // https://www.w3schools.com/jsref/jsref_round.asp

    }
    else {
        alert("incorrecto");
    }


    
}


// prompt ejercicio 3

function start_ejercicio_3(){

    const arreglo_ejercicio_3 = prompt("Introduce una lista de elementos separados por comas y sin espacios:");  // https://www.shecodes.io/athena/45475-how-to-create-a-prompt-for-an-array-in-javascript#:~:text=To%20create%20a%20prompt%20for%20an%20array%20in%20JavaScript%2C%20you,array%20using%20a%20specific%20delimiter.&text=let%20input%20%3D%20prompt(%22Enter,log(array)%3B
    const arreglo_ejercicio_3_split = arreglo_ejercicio_3.split(",");

    console.log(arreglo_ejercicio_3_split);
    alert(arreglo_ejercicio_3_split);



    // cantidad de números negativos, cantidad de 0s, cantidad de valores mayores a 0:

    let counter_0 = 0;
    let counter_negativo = 0;
    let counter_positivo = 0;


    for (let i = 0; i < arreglo_ejercicio_3_split.length; i++) {

        console.log(arreglo_ejercicio_3_split[i]);

        if (arreglo_ejercicio_3_split[i] > 0) {
            //counter_positivo = counter_positivo + 1;
            counter_positivo++;
        }

        else if (arreglo_ejercicio_3_split[i] < 0) {
            //counter_negativo = counter_negativo +1;
            counter_negativo++;
        }

         else {
             //counter_0 = counter_0 +1;
             counter_0++;
         }
    }

    console.log("counter_0: " + counter_0);
    console.log("counter_negativo: " + counter_negativo);
    console.log("counter_positivo: " + counter_positivo);

    alert("Valores equivalente a 0: " + counter_0 + "; Valores mayores a 0: " + counter_positivo + "; Valores negativos: " + counter_negativo)
}


// prompt ejercicio 4

function start_ejercicio_4(){
    const arreglo_ejercicio_4_1 = prompt("1/3 Introduce una lista de 3 elementos separados por comas y sin espacios:");
    alert (arreglo_ejercicio_4_1);

    const arreglo_ejercicio_4_2 = prompt("2/3 Introduce una lista de 3 elementos separados por comas y sin espacios:");
    alert (arreglo_ejercicio_4_2);

    const arreglo_ejercicio_4_3 = prompt("3/3 Introduce una lista de 3 elementos separados por comas y sin espacios:");
    alert (arreglo_ejercicio_4_3);



    const arreglo_ejercicio_4_1_split = arreglo_ejercicio_4_1.split(",");
    const arreglo_ejercicio_4_2_split = arreglo_ejercicio_4_2.split(",");
    const arreglo_ejercicio_4_3_split = arreglo_ejercicio_4_3.split(",");


    const arreglo_ejercicio_4_completo = [

        [arreglo_ejercicio_4_1_split],
        [arreglo_ejercicio_4_2_split],
        [arreglo_ejercicio_4_3_split]
    ];

        console.log(arreglo_ejercicio_4_completo)




    // renglon = row
    function calculateAverages(arreglo_ejercicio_4_completo) {
        const averages = [];
      
        for (let i = 0; i < arreglo_ejercicio_4_completo.length; i++) {
          const subArray = arreglo_ejercicio_4_completo[i].map(parseFloat); // Convertir: strings -> numbers: https://stackoverflow.com/questions/16158986/array-map-and-parseint-woes
          const subArraySum = subArray.reduce((acc, num) => acc + num, 0);              // https://www.leighhalliday.com/reduce-javascript
          const subArrayAverage = subArraySum / subArray.length;
          averages.push(subArrayAverage);
        }
      
        return averages;
      }
      
      const subArrayAverages = calculateAverages(arreglo_ejercicio_4_completo);
      console.log(subArrayAverages);

      console.log(typeof arreglo_ejercicio_4_completo[1][1]);      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof?retiredLocale=de
  




}







// prompt ejercicio 5

function start_ejercicio_5() {
    const numero_ejercicio_5 = prompt("Entra un número con múltiples dígitos");
    alert(numero_ejercicio_5);

    const reversedNum = numero_ejercicio_5 => parseFloat(numero_ejercicio_5.toString().split('').reverse().join('')) * Math.sign(numero_ejercicio_5);   // https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
    const result = reversedNum(numero_ejercicio_5);
    console.log(result);
}



// prompt ejercicio 6

function start_ejercicio_6(){
    const numero_ejercicio_6 = prompt("SOLUCIÓN PROPIA");
    alert (numero_ejercicio_6);
}





// TESTING!! siehe oben
// PREGUNTAS A RESPONDER