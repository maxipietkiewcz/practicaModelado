# practicaModelado


Descarga y Ejecución en Localhost
Sigue estos pasos para ejecutar la aplicación en tu entorno local:

Clonar el Proyecto: Descarga el repositorio en tu máquina local utilizando el comando de clonación de Git.

Navegar a la Carpeta del Proyecto: Abre una terminal y navega hasta la carpeta del proyecto clonado.

Instalar Dependencias: Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

npm install
Crear un Archivo .env: Crea un archivo .env en la raíz del proyecto y agrega la siguiente configuración:

PORT=3000
DB_NAME= 
DB_USER=root 
DB_PASSWORD=
DB_DIALECT=
DB_HOST=localhost
DB_URL=mongodb+srv://root:root@cluster0.gfddlmo.mongodb.net/

Ejecutar la Aplicación: Inicia la aplicación en modo de desarrollo con el siguiente comando:
npm run dev

Abrir en el Navegador: Accede a la aplicación en tu navegador web visitando la siguiente URL:
http://localhost:3000
