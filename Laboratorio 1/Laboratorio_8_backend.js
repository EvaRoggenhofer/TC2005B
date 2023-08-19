console.log("hola desde node!");

// fs es el modulo de filesystem de node, que sirve para acceder a los metodos para manipular el sistema de archivos
const filesystem = require('fs');                        // require imoprts una libreria, aqui "fs"; node hat diese, javascript an sich im navegador nicht; damit hab ich methoden, in archive meines Computers zu gehen

// writeFileSync es un metodo que sirve para escribir en un archivo de manera sincrona.
// por default, los metodos de node son asincronos.
filesystem.writeFileSync('hola.txt', 'Holaaaaaa desde node'); // sync: synchron; onhe sync: es blockiert (ich hole prof kaffee, er kann nichts machen, während ich weg bin)

console.log("Ya acabé de escribir el archivo");


// imprime a los 7 segundos un mensaje
setTimeout(() => {
    console.error("Ya te hackié jojojo")
}, 11000);                                // dies wird erst nach 11 Sekunden ausgeführt; d.h. erst nach dem code unten, obwohl im codefile andere reihenfolge -> codigo asincrono


// el siguiente codigo imprime de manera asincrona el arreglo ordenado
const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

// dann zum Ausführen:      node .\Laboratorio_8_backend.js      in Terminal unten eingeben





// programar un servidor web; el modulo http contiene las funciones para recibir peticiones HTTP y enviar respuestar HTTP
const http = require('http');


// Objeto server; ...es gibt 2 parameter: request und response
const server = http.createServer( (request, response) => {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html'); // "yo te voy a enviar texto en forma de html"
       
        //response.write("hola desde node!");
        response.write(`<!doctype html><html><h1>Holaaaaa</h1></html>`); // ahora codigo javascript o css no se van a ejecutar; solo html (css extern Bulma si)

        response.end();     // response tiene un metodo "end" -> envia la respuesta
});

server.listen(3000); // el puerto (3000): dirección dentro de una compu... (compu = edificio; porto: sala dentro del edificio); todas las compus tienen una direccion de autodiagnostico/un home: https://127.0.0.1 o: https://localhost:3000
// porto con numero mayor a 1000: estan desocupados normalmente
// en el navegador: localhost:3000/salida=hercules -> en el terminal aparece "salida=hercules"
//favicon.ico: navegador -> inspeccionar -> console