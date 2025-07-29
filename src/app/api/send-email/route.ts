// app/api/send-email/route.ts
import nodemailer from 'nodemailer';

// Nodemailer transporter 설정 (Pages Router와 동일)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL,
    pass: process.env.NEXT_PUBLIC_GMAIL_PWD,
  },
});

export async function POST(req: Request) {
  try {
    // Request 객체에서 직접 FormData 파싱
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // 필수 필드 유효성 검사
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // 이메일 옵션 설정 (Pages Router와 동일)
    const mailOptions = {
      from: email,
      to: 'nowrobin3@gmail.com', // 수신자 이메일 주소
      phone: `[문의] ${phone}`,
      html: `
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong></p>
        <p>${message}</p>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({
        message: 'Failed to send email',
        error: error,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
