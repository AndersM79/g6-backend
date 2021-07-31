Este proyecto es para crear una api desde 0 de un catalogo de productos.

las fucnionalidades de la api son:

- registrar y almacenar productos (Inventario de productos)
- obtener el detalle del producto (pendiente).

Las tecnologias que maneja el proyecto son:

- netlify-lambda: se utiliza para desplegar el proyecto, con funciones lambda(serverless)
- serverless-http: convertir codigo de express a funcion lambda
- express: se utiliza para definir rutas de la arquitectura, REST (definicion de metodos GET,PUT, DELETE, POST)
- cors: implementa permisos de acceso a consulta de la api, \* (acepta todas las peticiones)
- body-parser: express pueda manejar json en las peticiones
- nodemon: herramienta de desarrollo, te permite ver los cambios del programa en tiempo real

scripts:

- build: genera el codigo para desplegar a netlify
- start: ejecuta el proyecto en modo desarrollo
