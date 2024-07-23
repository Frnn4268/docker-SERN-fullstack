# Utiliza una imagen base oficial de Node.js para construir la aplicación
FROM node:14 AS build

# Establece el directorio de trabajo
WORKDIR /client

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Utiliza una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de la construcción a la carpeta de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto que usa Nginx
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
