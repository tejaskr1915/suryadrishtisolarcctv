/**
 * Surya Drishti Email Service Utility (SMTP / Nodemailer)
 * 
 * To run this script:
 * node scratch/emailService.js
 */

const nodemailer = require('nodemailer');

// SMTP Configurator using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // Use SSL
  secure: true,
  auth: {
    user: 'suryadrishti7@gmail.com',
    pass: 'ftfv psjt sseh ieud'
  }
});

async function sendQuotationNotification({ clientName, phone, email, detailsSummary }) {
  const mailOptions = {
    from: '"Surya Drishti Alerts" <suryadrishti7@gmail.com>',
    to: 'suryadrishti7@gmail.com', // Copy to yourself
    subject: `☀️ New Quote Request from ${clientName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #00f5ff; background: #0b0b0f; padding: 15px; margin: 0 0 20px 0; border-radius: 6px; text-align: center; font-family: monospace;">SURYA DRISHTI</h2>
        <h3 style="color: #333;">New Configuration Quotation Request</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 150px;">Client Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${clientName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">WhatsApp / Phone:</td>
            <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${email}</td>
          </tr>
        </table>

        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #00f5ff;">
          <h4 style="margin-top: 0; color: #555;">Selected CCTV Configuration Specs:</h4>
          <pre style="white-space: pre-wrap; font-family: monospace; font-size: 13px; color: #333; margin: 0;">${detailsSummary}</pre>
        </div>
        
        <p style="font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 15px; text-align: center;">
          This is an automated request generated from the Surya Drishti customizer portal.
        </p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully! Message ID:', info.messageId);
    return true;
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return false;
  }
}

// Execute test run immediately
sendQuotationNotification({
  clientName: 'Tejas Kumar',
  phone: '+91 98765 43210',
  email: 'tejas@example.com',
  detailsSummary: 'Solar CCTV System:\n- Camera: Strobe Siren Warning Dome\n- Battery: 18Ah LFP Battery\n- Solar Panel: 40W Solar Panel\n- Storage: 128GB Memory Card\n- Accessories: Pole Mount Bracket'
});
