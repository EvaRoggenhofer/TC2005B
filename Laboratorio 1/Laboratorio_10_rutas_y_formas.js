// Laboratorio 10 rutas y formas

console.log("hola desde node!");

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabé de escribir el archivo");




const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.method);

    if (request.url == "/") {

        response.setHeader('Content-Type', 'text/html');
        response.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Laboratorio 10</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
    
            </header>
            <main>
                <section class="section">
                    <div class="container">

                        <h1 class="title">Mi página facebook</h1>

                        <h2>Sobre mí</h1>

                        <h3 class="name">Eva Roggenhofer - A01762592@tec.mx</h2>
                        
                        <p>Mi nombre es Eva Roggenhofer, soy de Alemania. Recién llegué a Querétaro por mi semestre de intercambio. Normalmente vivo en Núremberg.
                            Con respecto a la construcción de software tengo conocimientos básicos de los lenguajes python, php, html y css.
                            Tengo experiencia en gestión de proyectos de implementación de software. En mi tiempo libre hago deporte (natación, correr)
                            y veo series o películas. Me gustan los idiomas y explorar nuevos países (como México).
                            En este curso me gustaría profundizar mis conocimientos básicos que ya tengo en el área de construcción de software.
                            Espero que pueda contribuir a un trabajo en equipo armonioso y productivo.</p>

                        >><a href="/comentario">Escribe un comentario</a><<

                    </div>
                </section>
            </main>
            <footer>
        
            </footer>
            </body>
            </html>
        `);

        response.end();

    } else if(request.url == "/comentario" && request.method == "GET") {
        
        response.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Redactar comentario</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
            </header>
            <main>
                <section class="section">
                    <div class="container">

                        <h1 class="title">Comentario</h1>

                        <form action="/comentario" method="POST">
                            <label for="nombre">Tu nombre:</label><br>
                            <input type="text" id="name" name="nombre"><br>
                            <label for="comentario">Tu comentario:</label><br>
                            <input type="text" id="comentario" name="comentario"><br>
                            <input type="submit" value="Guardar">
                        </form>
                        
                    </div>
                </section>
            </main>
            </body>
            </html>
        `);

        response.end();

    } else if(request.url == "/comentario" && request.method == "POST") { 
        
        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            //datos.push(dato);
        });

        response.write(`
        
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Redactar comentario</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
            </header>
            <main>
                <section class="section">
                    <div class="container">

                        <h1 class="title">Comentario</h1>

                        <p>Tu comentario fue registrado</p><br><br>

                        <a href="/comentario">nuevo comentario</a><br>
                        <a href="/">pagina feis</a>
                    </div>
                </section>
            </main>
        </body>
        </html>
        
        `);
        response.end();

    } else {
        response.statusCode = 404;

        response.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>404</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
            </header>
            <main>
                <section class="section">
                    <div class="container">
                        <h1 class="title">if request.url == "/new" && request.method == "POST"</h1>

                        <p>ERROR 404 not found</p>

                    </div>
                </section>
            </main>
            </body>
            </html>
        `);

        response.end();
    }


    /*

    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        return response.end();
    });
    */
});

server.listen(3000);