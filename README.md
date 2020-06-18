# Web de Bisuteria

Proyecto de una Web de Bisuteria con NuxtJS incluyendo mejoras de SEO con "SSR" ó "Generador de Sitios Estaticos".<br />
[click aqui](https://web-bisuteria.now.sh/)
## Motivación

### El Frontend de Hoy 
Las librerias, frameworks mas utilizados son [AngularJS](https://angular.io/), [ReactJS](https://reactjs.org/) y por ultimo y no menos importante [VueJS](https://vuejs.org/) <br />
Las Single Page Applications son páginas web que **funcionarán extraordinariamente rápido**, incluso cuando navegamos entre diferentes páginas. <br />
El problema es que todo este contenido estará disponible solo después de que los archivos de JavaScript terminen de cargar.
Y este proceso puede llegar a tardar muchos segundos.

## Problema

### Problemas con SEO
Si el SEO es tu prioridad, una Single Page Application no debes usar.<br />
Combatir este problema es la prioridad el "Server Rendering" y el "Generados de Sitios Estaticos" son dos muy buenas opciones que puedes usar.

### ¿Necesito SEO en mis proyectos?
Depende, si tu proyecto necesita ser facilmente raestreable por los buscadores, como por ejemplo un negocio que quieras promocionar; entonces la respuesta es sí.<br />
Si tu proyecto es la intranet de una empresa, pues no tiene sentido optimizarla para SEO.

## Tecnologias
Usaremos NuxtJs que es un marco de código abierto de VueJS que hace que el desarrollo web sea simple y potente.<br />
NuxtJS hace uso de NodeJS tanto en Backend y Frontend

## Instalación

```bash
#Download
$ git clone https://github.com/cuevacelis/web-bisuteria

# Instala las Dependencias
$ npm install

# Enciende el Servidor en localhost:3000
$ npm run start

# Empaqueta para producción
$ npm run build

# Generador de contenido estatico amigable con SEO
$ npm run generate
```

> Inspiracion: https://platzi.com/blog/spa-vs-ssr-vs-static-site-generators/

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
