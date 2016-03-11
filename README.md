# starwars-html-js-introduction
Fanatoic HTML Course | This examples are the code to begin building a simple page with HTML - CSS  and Javascript


1- Instalar Node.JS https://nodejs.org/en/download/ deacuerdo a sus sistema operativo


2- Creamos una carpeta en nuestro computador y dentro creamos un archivo con el nombre server.js



3- En la terminal de mac (la aplicacion terminal que viene con el mac) nos ubicamos en dicha carpeta creada (escribimos "cd" un espacio, 
arrastramos la carpeta desde el finde a la terminal y luego presionamos enter)

4- Escrimos el siguiente comando

sudo npm install connect serve-static

5- En el archivo server.js colocamos lo siguiente

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Servidor corriendo en el puerto 8080...');
});

6- Dentro de nuestra carpeta creamos un archivo llamado index.html y en el colocamos

<html>
<head>
<style> body {padding: 0; margin: 0;} </style>
</head>
<body>
Hola Mundo!
</body>
</html>

7- En la terminal en la carpeta colocamos node server.js

Captura de pantalla 2016-03-07 a las 6.21.38 p.m..png

8- si ingresamos en el browser en http://127.0.0.1:8080/index.html

