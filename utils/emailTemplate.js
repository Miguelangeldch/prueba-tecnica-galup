export const emailTemplate = (response) => {
  const template = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Welcome Email</title>
</head>
<body>
    <h3>Datos de la solicitud:</h3>
    <hr>
    <h4 style="display:inline">• Nombre:</h4>
    <span>${response.name} ${response.lastname}</span>
    <br>
    <h4 style="display:inline">• Email:</h4>
    <span>${response.email}</span>
    <br>
    <h4 style="display:inline">• Teléfono:</h4>
    <span>${response.phone}</span>
    <br>
    <h4 style="display:inline">• location:</h4>
    <br>
    <span>○ Latitud: ${response.location.lat}</span> 
    <br>
    <span>○ Longitud: ${response.location.lng}</span>
    <br>
    <h4 style="display:inline">• Servicio:</h4>
    <span>${response.service}</span>
    <br>
    <h4 style="display:inline">• Comentarios:</h4>
    <span>${response.comments}</span>
    <br>
    <h4 style="display:inline">• Fecha:</h4>
    <span>${response.date}</span>
</body>
</html>
    `;

  return template;
};
