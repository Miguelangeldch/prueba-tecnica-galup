import nodemailer from 'nodemailer';
import { emailTemplate } from '../utils/emailTemplate.js';

export const sendEmail = async (response) => {
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
    html: emailTemplate(response),
  });
};
