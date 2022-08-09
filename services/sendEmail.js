import nodemailer from 'nodemailer';

export const sendEmail = async (nombre) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_PASS,
    },
  });

  const send = await transporter.sendMail({
    from: `Soporte de servicio <${process.env.USER_EMAIL}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: 'Nueva solicitud de servicio',
    html: `<h1> Nueva Solicitud ${nombre}</h1>`,
  });
};
