# Etapa 1: Construcción de la aplicación
FROM node:20 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copia los archivos estáticos construidos en la etapa anterior al directorio predeterminado de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 para el tráfico HTTP
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
