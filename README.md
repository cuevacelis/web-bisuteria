# Web de Bisuteria

Proyecto de una Web de Bisuteria con NuxtJS incluyendo mejoras de SEO con "SSR" ó "Generador de Sitios Estaticos".<br />
[click aqui](https://web-bisuteria.now.sh/)

![Global info](https://raw.githubusercontent.com/cuevacelis/web-bisuteria/master/github/Captura1.JPG)

## Motivación

### El Frontend de Hoy 
Las librerias, frameworks mas utilizados son [AngularJS](https://angular.io/), [ReactJS](https://reactjs.org/), [VueJS](https://vuejs.org/), etc <br />
Las Single Page Applications son páginas web que **funcionan extraordinariamente rápido**, incluso cuando navegamos entre diferentes páginas. <br />

## Problema
El princial problema de los website basados en SPA, es que antes de poder acceder al contenido se necesitan descargar gran parte de JS.

### Problemas con SEO
Si el SEO es tu prioridad, una Single Page Application(SPA) no debes usar.<br />
Combatir este problema es la prioridad el "Server Rendering" y el "Generados de Sitios Estaticos" son dos muy buenas opciones que puedes usar.

### ¿Necesito SEO en mis proyectos?
Depende, si tu proyecto necesita ser facilmente raestreable por los buscadores, como por ejemplo un negocio que quieras promocionar; entonces la respuesta es sí.<br />
Si tu proyecto es la intranet de una empresa, pues no tiene sentido optimizarla para SEO.

## Tecnologias y Herramientas

- NuxtJS (Marco de código abierto de VueJS que hace que el desarrollo web sea simple y potente)
- Tailwindcss (CSS)
- Normalize (CSS)
- Axios
- Swiper

## Instalación

```bash
#Download
$ git clone https://github.com/cuevacelis/web-bisuteria

# Instala las Dependencias
$ npm install or yarn install

# Enciende el Servidor en localhost:3000
$ npm run start

# Empaqueta para producción
$ npm run build

# Generador de contenido estatico amigable con SEO
$ npm run generate
```

> Inspiracion: https://platzi.com/blog/spa-vs-ssr-vs-static-site-generators/

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
