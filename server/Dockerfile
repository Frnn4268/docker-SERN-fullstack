# Utiliza una imagen base oficial de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /server

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que usa la aplicación
EXPOSE 4000

# Establece las variables de entorno necesarias
ENV DB_USER=tu_usuario
ENV DB_PASSWORD=tu_contraseña
ENV DB_SERVER=tu_servidor
ENV DB_NAME=tu_base_de_datos

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
