Necesitan crear un API con los siguientes endpoints

- GET /posts
- GET /posts/:id
- POST /posts
- DELETE /post (protegido, solo usuarios con token pueden hacer esto)
- PATCH /post/:id (protegido)
- POST /users
- POST /auth/login

Los requisitos son:
- Hacer uso de arquitectura limpia para estructurar el proyecto
- Hacer uso de middlewares para delimitar el acceso de los usuarios
- Deben conectar su reto de front con su nuevo API
