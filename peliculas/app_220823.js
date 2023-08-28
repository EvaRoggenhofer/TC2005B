const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

let peliculas = [
    {
        nombre: "Titanic",
        imagen: "https://i.etsystatic.com/27725708/r/il/3989d8/2912524873/il_fullxfull.2912524873_6vc1.jpg",
        sinopsis: "Historia de amor entre Jack y Rose en el trasatlántico más grande de la época"
    }, 
    {
        nombre: "Oppenheimer",
        imagen: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        sinopsis: "Historia de la bomba atómica"
    }, 
    {
        nombre: "Barbie",
        imagen: "https://www.instyle.com/thmb/vZCEkHB1nBMIes2tcKTUAMP0zf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarbiePosterEmbed-de7c886812184414977730e920d77a65.jpg",
        sinopsis: "La muñeca más famosa de la historia"
    }, 
    {
        nombre: "TMNT",
        imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/5d830b134127975.61ce89a78d10c.jpg",
        sinopsis: "Las aventuras flipantes de las tortugas verdes en Nueva York"
    },
];


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/new', (request, response, next) => {

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Películas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    </a>
    </div>
    </nav>
    </header>
    <main>
    <section class="section">
    <div class="container">
    <h1 class="title">Registro de películas</h1>
    <form action="/new" method="POST">
    <label for="nombre">Nombre de la película</label>
    <input id="nombre" name="nombre" class="input" type="text" placeholder="Oppenheimer">
    <br><br>
    <label for="sinopsis">Sinapsis de la película</label>
    <textarea id="sinopsis" name="sinopsis" class="textarea" placeholder="La historia de la bomba atómica"></textarea>
    <br>
    <input id="registrar" name="registrar" type="submit" value="Registrar" class="button is-info">
    </form>
    </div>
    </section>
    </main>
    </body>
    </html>
    `;
    
    response.send(html);
});

app.post('/new', (request, response, next) => {

    console.log(request.body);

    peliculas.push({
        nombre: request.body.nombre,
        imagen: "https://www.instyle.com/thmb/vZCEkHB1nBMIes2tcKTUAMP0zf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarbiePosterEmbed-de7c886812184414977730e920d77a65.jpg",
        sinopsis: request.body.sinopsis,
    });

    response.redirect('/');

});

app.get("/", (request, response, next) => {

    let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Películas</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                        </a>
                    
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <section class="section">
                    <div class="container">
                        <h1 class="title">Películas</h1>
                        <div class="columns">`;

                        for(let pelicula of peliculas) {
                            html += 
                                `<div class="column">
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media">
                                                <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
                                                </figure>
                                                </div>
                                                <div class="media-content">
                                                <p class="title is-4">${pelicula.nombre}</p>
                                                </div>
                                            </div>
                                        
                                            <div class="content">
                                                ${pelicula.sinopsis}
                                                <br>
                                                <button class="button is-danger is-rounded" onclick=quitar("${pelicula.nombre}")>Quitar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                        
        html += `       </div>
                    </div>
                </section>
            </main>
            <footer>
        
            </footer>
            </body>
            </html>
        `;

        response.send(html);
})

app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.statusCode = 404;

    response.send('Es película es muuuy independiente'); //Manda la respuesta
});

app.listen(3000);