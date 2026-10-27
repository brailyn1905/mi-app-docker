# Mi App Docker

Aplicación web sencilla en Node.js (Express) empaquetada con Docker.

Reemplaza `TU_USUARIO` por tu usuario de Docker Hub.

## 1. Construir la imagen (con nombre y etiqueta)
```bash
docker build -t TU_USUARIO/mi-app-docker:1.0 .
```

## 2. Verificar que la imagen existe
```bash
docker images
```

## 3. Probar la aplicación ejecutando un contenedor
```bash
docker run -d -p 3000:3000 --name mi-app TU_USUARIO/mi-app-docker:1.0
```
Abrir en el navegador: http://localhost:3000

Comandos útiles:
```bash
docker ps              # ver contenedores corriendo
docker logs mi-app     # ver los logs
docker stop mi-app     # detener
docker rm mi-app       # eliminar
```

## 4. (Opcional) Agregar otra etiqueta
```bash
docker tag TU_USUARIO/mi-app-docker:1.0 TU_USUARIO/mi-app-docker:latest
```

## 5. Subir a Docker Hub
```bash
docker login
docker push TU_USUARIO/mi-app-docker:1.0
docker push TU_USUARIO/mi-app-docker:latest
```

## 6. Comprobar desde cualquier máquina
```bash
docker pull TU_USUARIO/mi-app-docker:1.0
```
