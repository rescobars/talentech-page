import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

const adminEmailTemplate = (data: { email: string; phone: string; service: string; message: string }) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #10B981;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
            border: 1px solid #E5E7EB;
        }
        .field {
            margin-bottom: 15px;
            padding: 10px;
            background-color: white;
            border-radius: 4px;
            border: 1px solid #E5E7EB;
        }
        .field strong {
            color: #10B981;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #666;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">TalenTech</div>
        <h1>Nuevo Mensaje de Contacto</h1>
    </div>
    <div class="content">
        <div class="field">
            <strong>Correo Electrónico:</strong><br>
            ${data.email}
        </div>
        <div class="field">
            <strong>Teléfono:</strong><br>
            ${data.phone}
        </div>
        <div class="field">
            <strong>Servicio de Interés:</strong><br>
            ${data.service}
        </div>
        <div class="field">
            <strong>Mensaje:</strong><br>
            ${data.message}
        </div>
    </div>
    <div class="footer">
        <p>Este mensaje fue enviado desde el formulario de contacto de TalenTech</p>
    </div>
</body>
</html>
`;

const confirmationEmailTemplate = (data: { email: string; service: string }) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #10B981;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
            border: 1px solid #E5E7EB;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #666;
        }
        .button {
            display: inline-block;
            background-color: #10B981;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .service-highlight {
            color: #10B981;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">TalenTech</div>
        <h1>¡Gracias por contactarnos!</h1>
    </div>
    <div class="content">
        <p>Hola,</p>
        <p>Hemos recibido tu mensaje sobre nuestro servicio de <span class="service-highlight">${data.service}</span>.</p>
        <p>Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo lo antes posible.</p>
        <p>Si tienes alguna pregunta adicional, no dudes en responder a este correo.</p>
        <p>Saludos cordiales,<br>El equipo de TalenTech</p>
    </div>
    <div class="footer">
        <p>Este es un correo automático, por favor no responda a este mensaje.</p>
    </div>
</body>
</html>
`;

export async function POST(request: Request) {
  try {
    const { email, phone, service, message } = await request.json();
    const transporter = createTransporter();

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'talenttechsuper@gmail.com',
      subject: 'Nuevo mensaje de contacto - TalenTech',
      html: adminEmailTemplate({ email, phone, service, message }),
    };

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmación de recepción - TalenTech',
      html: confirmationEmailTemplate({ email, service }),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: 'Error sending emails' },
      { status: 500 }
    );
  }
} 