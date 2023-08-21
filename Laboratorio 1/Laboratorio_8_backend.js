// Laboratorio_8_backend.js

console.log("hola desde node!");

// fs es el modulo de filesystem de node, que sirve para acceder a los metodos para manipular el sistema de archivos
const filesystem = require('fs');                        // require imoprts una libreria, aqui "fs"; node hat diese, javascript an sich im navegador nicht; damit hab ich methoden, in archive meines Computers zu gehen

// writeFileSync es un metodo que sirve para escribir en un archivo de manera sincrona.
// por default, los metodos de node son asincronos.
filesystem.writeFileSync('Laboratorio_8_hola.txt', 'Holaaaaaa desde node'); // sync: synchron; onhe sync: es blockiert (ich hole prof kaffee, er kann nichts machen, während ich weg bin)

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


		//Lab10
		if(request.url == "/") {

        response.setHeader('Content-Type', 'text/html'); // "yo te voy a enviar texto en forma de html"
       
        //response.write("hola desde node!");
        response.write(`<!doctype html>
        
        
        <!doctype html>
<html>
	
	<head>
		<title>Laboratorio 1</title>
		<meta charset = utf-8>
		<link rel="stylesheet" href="Laboratorio_3_css_mini.css"> <!-- hoja de estilo -->

		<style>
			body {
			  background-color: linen;
			}
		</style> <!-- estilo de documento -->

	</head>


	<body>

        <header>Laboratorio 1 - Introducción a las aplicaciones web, HTML5 y ciclo de vida de los sistemas de información</header>

	
		<h1>Sobre mí</h1>
        <h2 class="name">Eva Roggenhofer - A01762592@tec.mx</h2>
		
		<p>Mi nombre es Eva Roggenhofer, soy de Alemania. Recién llegué a Querétaro por mi semestre de intercambio. Normalmente vivo en Núremberg.
			Con respecto a la construcción de software tengo conocimientos básicos de los lenguajes python, php, html y css.
			Tengo experiencia en gestión de proyectos de implementación de software. En mi tiempo libre hago deporte (natación, correr)
			y veo series o películas. Me gustan los idiomas y explorar nuevos países (como México).
			En este curso me gustaría profundizar mis conocimientos básicos que ya tengo en el área de construcción de software.
			Espero que pueda contribuir a un trabajo en equipo armonioso y productivo.</p>



		<footer id="footer_página">Editor: Visual Studio Code https://code.visualstudio.com/</footer>
	
	</body>



</html>
        
        
        
        
        `); // ahora codigo javascript o css no se van a ejecutar; solo html (css extern Bulma si)

        response.end();     // response tiene un metodo "end" -> envia la respuesta
}

//Lab10
else {response.statusCode = 404;
		response.end();				// para que devuelve la respuesta; z.B. localhost:3000/peliculas
}

server.listen(3000); // el puerto (3000): dirección dentro de una compu... (compu = edificio; porto: sala dentro del edificio);
// todas las compus tienen una direccion de autodiagnostico/un home: https://127.0.0.1 o: https://localhost:3000
// porto con numero mayor a 1000: estan desocupados normalmente
// en el navegador: localhost:3000/salida=hercules -> en el terminal aparece "salida=hercules"
//favicon.ico: navegador -> inspeccionar -> console