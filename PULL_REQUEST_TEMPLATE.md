## DESCRIPCIÓN

**Nombre:** `Carlos Uriel Montoya Gutiérrez`
**Email:** `carlosdeveloper.info@gmail.com`
**WhatsApp:** `967-172-4801`
**Ciudad:** `San Cristóbal de las Casas, Chiapas`
**País:** `México`

## ¿Cómo describirías el propósito de este proyecto? (opcional)
El proposito del proyecto es saber controlar una aplicación CRUD, si bien no se implementa un backend, la responsabilidad del front por controlar cada estado de la aplicación de manera óptima es indispensable para cualquier aplicación web, de lo contrario el performance y experiencia de usuario se verá afectada.


## ¿Cuál es tu stack tecnológico preferido? ¿Por qué? (opcional)

`PEAN` - `(PostgreSQL, ExpressJS, Angular, NodeJS)`
Porque me siento muy comodo realizando las aplicaciones web por separado, si bien, .NET tiene una estructura definida para los middlewares o filtros en ExpressJS se implementan de manera más dinámica y customizable injectando argumentos o parametros en el request.

Me encanta trabajar con Angular porque conozco el framework desde hace ya varios años y se me hace muy facil manejarlo, se me hace comodo la transformación con Custom Pipes o Directivas, ademas de la implementación de Componentes siendo Clases y que los Servicios son un Singleton para una unica instancia, pasar información entre Componentes y Servicios es bastante sencillo y sin que se duplique la información en los servicios. 

## Descripción de la Solución

La arquitectura implementada es `Clean Arquitecture`, decidí dicha arquitectura por el tipo de proyecto ya que es simple y no tan extensa ya que de lo contrario cada carpeta tendría demasiados archivos.

Para gestionar el estado de la aplicación utilice `Redux` en dónde la información de los `To-Do` o `Tasks` se almacenan en el _LocalStorage_.

Para los componentes me gusta mucho usar `Atomic Design` debido a la customización de componentes, se pueden crear x cantidad de componentes con parametros para su construcción similar al patrón de diseño `Builder` ya que ambos pueden escalar y reutilizar.

Aunque es un WebApp sencillo de una sola página, utilice `Routers` para gestionar la vista principal con la page `Home` teniendo así un mejor control de cada vista si se llega a requerir.

Ademas de `Redux`, utilice un contexto para manejar el control del Task a manipular (ya sea nuevo o existente) para aplicar el formulario del modal a dicho contexto e igualmente aplicar el item a editar de la lista al contexto. 

En el caso de UI/UX decidí usar la libreria `Material UI` ya que ahorra bastante tiempo al momento de estilizar o crear elementos genericos como modales, dialogs, buttons, navbar, etc.

## Instrucciones para Ejecutar el Proyecto

1. Clonar el repositorio
```shell
git clone https://github.com/CarlosMontoya17/tiui-frontend-test
```

2. Ingresar a la carpeta
```shell
cd tiui-frontend-test
```

3. Instalar dependencias
```shell
npm i
```

4. Ejecutar el proyecto
```shell
npm run dev
```

5. Abrir navegador preferido e ingresar a
```
http://localhost:4200/
```


## ¿Que resaltarias de tu proyecto?

El proyecto tiene `Clean Arquitecture` junto con `Atomic Design` para que el codigo tenga una buena estructura y sea modular con elementos reutilizables y customizables, además de uso `Redux` para gestionar el estado global de la aplicación. 

También tiene un patrón de diseño que se llama `Observable` si bien se puede obtener de alguna librería como _rxjs_ decidí crear un observable propio sólo con las caracteristicas necesarias. 

La accesibilidad y la experiencia de usuario fue primordial para el desarrollo.
