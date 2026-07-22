import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(req) {
  try {
    const data = await req.json();
    const { clientName, phone, email, detailsSummary, cameraImage } = data;

    // Normalize camera image path
    let camImgPath = cameraImage || 'public/images/cam1.jpg';
    if (camImgPath.startsWith('/')) camImgPath = camImgPath.substring(1);
    if (!camImgPath.startsWith('public/')) camImgPath = 'public/' + camImgPath;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465, // SSL
      secure: true,
      auth: {
        user: 'suryadrishti7@gmail.com',
        pass: 'ftfv psjt sseh ieud'
      }
    });

    // Send to both user's email and copy to tejastejakr@gmail.com
    const recipientEmails = [email, 'tejastejakr@gmail.com'].filter(Boolean);

    const mailOptions = {
      from: '"Surya Drishti Alerts" <suryadrishti7@gmail.com>',
      to: recipientEmails.join(', '),
      subject: `☀️ New Quote Request from ${clientName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; border: 1px solid #222; border-radius: 12px; overflow: hidden; color: #fff;">
          <!-- Embedded Banner Image -->
          <img src="cid:suryadrishti_banner" alt="Surya Drishti Banner" style="width: 100%; display: block; border-bottom: 2px solid #00f5ff;" />
          
          <div style="padding: 24px; background: #0b0b0f;">
            <h2 style="color: #00f5ff; margin-top: 0; font-family: monospace; letter-spacing: 2px; text-transform: uppercase;">New Request</h2>
            <p style="color: #aaa; font-size: 13px;">A new system configuration quotation request was submitted from the customizer portal.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; color: #eee; font-size: 13px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #222; font-weight: bold; width: 150px; color: #00f5ff;">Client Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #222;">${clientName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #222; font-weight: bold; color: #00f5ff;">WhatsApp / Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #222;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #222; font-weight: bold; color: #00f5ff;">Email Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #222;">${email}</td>
              </tr>
            </table>

            <!-- Specs Container with Camera Image -->
            <div style="background-color: #111; padding: 18px; border-radius: 8px; border-left: 4px solid #00f5ff; display: table; width: 100%; box-sizing: border-box;">
              <div style="display: table-row;">
                <!-- Camera image cell -->
                <div style="display: table-cell; width: 100px; vertical-align: top; padding-right: 15px;">
                  <div style="background: #000; border: 1px solid #222; border-radius: 8px; padding: 8px; text-align: center;">
                    <img src="cid:camera_image" alt="Camera Node" style="width: 80px; height: 80px; object-fit: contain; display: block; margin: 0 auto;" />
                  </div>
                </div>
                <!-- Text details cell -->
                <div style="display: table-cell; vertical-align: top;">
                  <h4 style="margin-top: 0; color: #fff; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Selected CCTV Configuration Specs:</h4>
                  <pre style="white-space: pre-wrap; font-family: monospace; font-size: 12px; color: #ccc; margin: 0; line-height: 1.6;">${detailsSummary}</pre>
                </div>
              </div>
            </div>
            
            <p style="font-size: 11px; color: #555; margin-top: 30px; border-top: 1px solid #222; padding-top: 15px; text-align: center;">
              This is an automated request generated from the Surya Drishti customizer portal.
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'hero-bg.jpg',
          path: path.resolve(process.cwd(), 'public/images/hero-bg.jpg'),
          cid: 'suryadrishti_banner'
        },
        {
          filename: 'camera.jpg',
          path: path.resolve(process.cwd(), camImgPath),
          cid: 'camera_image'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Server Email Route Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
