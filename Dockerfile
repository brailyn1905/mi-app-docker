# 1. Imagen base: Node.js versión 20 (ligera, basada en Alpine Linux)
FROM node:20-alpine

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar primero los archivos de dependencias (aprovecha la caché de Docker)
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install --omit=dev

# 5. Copiar el resto del código de la aplicación
COPY . .

# 6. Puerto que expone la aplicación
EXPOSE 3000

# 7. Comando que se ejecuta al iniciar el contenedor
CMD ["npm", "start"]
