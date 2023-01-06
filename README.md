# Gmail API con NodeJS.
Para correr el proyecto se debe ejecutar el comando *node app.js*.

## Habilitacion de API para Gmail.
- Abrir la url https://console.cloud.google.com/
- Crear nuevo proyecto.
- Una vez creado, ir al panel izquierdo a APIS & Servicios.
- Luego, nuevamente a la izquierda, seleccionar OAuth Consent Screen.
- Elejir el tipo *Externo*.
- Seleccionar el boton *crear*.
- Agregar el nombre de la app.
- Agregar informacion de contacto del desarrollador.
- Seleccionar *guardar y continuar*.
- Agregar un email para testear la app.
- Finalmente, guardar y continuar.
- Luego en la vista de *APIS & Servicios*, seleccionar en el panel izquierdo *Credenciales*.
- Hacer click arriba donde dice *+ CREAR CREDENCIALES* y seleccionar *OAuth client ID*.
- En *Tipo de aplicacion* elegir *Aplicacion web*.
- Dejar el nombre por defecto.
- Bajar y donde dice *Authorized redirect URIs* escribir https://developers.google.com/oauthplayground sin slash al final.
- Finalmente, obtendras tu *client-id* y tu *client-secret* para usar mas adelante.
- Ahora, debes dirigirte a la url https://developers.google.com/oauthplayground/
- Poner en el scope la url https://mail.google.com para leer contenido de correos.
- Para obtener las etiquetas usar la url https://www.googleapis.com/auth/gmail.labels
- Para modificar/editar las etiquetas usar la url https://www.googleapis.com/auth/gmail.modify
- Para poner mas de una URI a la vez deben separarse cada una por un espacio.
- Una vez puesta la URI debes abrir la rueda dentada de la derecha.
- Marcar donde dice *Usar tus propias credenciales OAuth*.
- Ingresa tus client-id y client-secret.
- Luego, sin cerrar la ventana de la rueda dentada, presiona el boton azul de la izquierda que dice *Autorizar APIs*.
- Pasaras a continuacion a una serie de pantallas de autorizacion caracteristicas de Google.
- Con esto ya estas lista/o para usar el proyecto.
- En esta vista se genera el RESFRESH_TOKEN que usaras en tu .env junto a los otros datos.
- Ademas, en esta misma pantalla puedes usar el paso 3 que configura la solicitud a la API. El boton *Listar posibles operaciones* genera diversos ejemplos para usar como referencia junto a la documentacion de la url https://developers.google.com/gmail/api/reference/rest/v1/users.labels/create

## Archivo controllers.js
En la linea 53 debe ir el nombre del gmail del usuario.

El sendMail de la linea 17 solo se usa con nodemailer.

Los controladores y rutas para obtener las etiquetas (labels) y editarlas se puede contruir a partir de los modelos ya existentes para obtener datos de usuario y leer email.