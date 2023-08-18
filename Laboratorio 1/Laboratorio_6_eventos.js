// Laboratorio 6

// desplegar pregunta 1 y su respuesta
const pregunta1 = document.getElementById("Pregunta1");

console.log(pregunta1);

const despliega_respuesta1 = () => {        // Respuesta: https://www.the-art-of-web.com/javascript/validate/#:~:text=Validating%20form%20input%20with%20JavaScript,a%20secure%20server%2Dside%20script.
    const respuesta1 = "RESPUESTA 1: Validar los datos es fácil y puede evitar que la gente deje campos en blanco, introduzca demasiado poco o demasiado o utilice caracteres no válidos.";
    pregunta1.innerHTML = respuesta1;
    pregunta1.onclick = despliega_pregunta1;
    pregunta1.style.color='green';   // https://stackoverflow.com/questions/2091326/changing-text-color-onclick
}

const despliega_pregunta1 = () => {
    const pregunta1Text = "PREGUNTA 1: ¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?";
    pregunta1.innerHTML = pregunta1Text;
    pregunta1.onclick = despliega_respuesta1;
    pregunta1.style.color='black';
}

pregunta1.onclick = () => {
    console.log("Hiciste click en Pregunta1");
    despliega_respuesta1();
    respuesta1.style.color='green';
}




// desplegar pregunta 2 y su respuesta
const pregunta2 = document.getElementById("Pregunta2");

console.log(pregunta2);

const despliega_respuesta2 = () => {    // Respuesta: https://cqr.company/web-vulnerabilities/client-side-validation-bypass/
    const respuesta2 = "RESPUESTA 2: 1. modificar el código HTML utilizando herramientas de desarrollo del navegador; 2. usar JavaScript para alterar los datos del formulario (a través de la consola); 3. usar proxies interceptores para interceptar y modificar las peticiones HTTP";
    pregunta2.innerHTML = respuesta2;
    pregunta2.onclick = despliega_pregunta2;
    pregunta2.style.color='green';
}

const despliega_pregunta2 = () => {
    const pregunta2Text = "PREGUNTA 2: ¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?";
    pregunta2.innerHTML = pregunta2Text;
    pregunta2.onclick = despliega_respuesta2;
    pregunta2.style.color='black';
}

pregunta2.onclick = () => {
    console.log("Hiciste click en Pregunta2");
    despliega_respuesta2();
    respuesta2.style.color='green';
}


// desplegar pregunta 3 y su respuesta
const pregunta3 = document.getElementById("Pregunta3");

console.log(pregunta3);

const despliega_respuesta3 = () => {    // Respuesta: https://marketsplash.com/tutorials/javascript/javascript-validator/#google_vignette
    const respuesta3 = "RESPUESTA 3: Las validaciones ayudan a detectar errores antes de que los datos se envíen al servidor, mejorando la experiencia del usuario y reduciendo la posible carga del servidor.";
    pregunta3.innerHTML = respuesta3;
    pregunta3.onclick = despliega_pregunta3;
    pregunta3.style.color='green';
}

const despliega_pregunta3 = () => {
    const pregunta3Text = "PREGUNTA 3: Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?";
    pregunta3.innerHTML = pregunta3Text;
    pregunta3.onclick = despliega_respuesta3;
    pregunta3.style.color='black';
}

pregunta3.onclick = () => {
    console.log("Hiciste click en Pregunta2");
    despliega_respuesta3();
    respuesta3.style.color='green';
}