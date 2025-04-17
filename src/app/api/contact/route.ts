import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, phone, service, message } = await request.json();

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'talenttechsuper@gmail.com',
      subject: 'Nuevo mensaje de contacto - TalenTech',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Correo electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio de interés:</strong> ${service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
} 