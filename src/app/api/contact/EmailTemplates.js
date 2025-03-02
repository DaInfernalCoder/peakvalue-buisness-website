/**
 * Email templates for the contact form API
 */

export function getAdminNotificationEmail(name, email, subject, message) {
  return {
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 10px; border-top: 1px solid #eee;">
          <p>This email was sent from your website contact form.</p>
        </div>
      </div>
    `,
  };
}

export function getUserConfirmationEmail(name) {
  return {
    subject: 'Thank You for Joining PeakValueBusiness',
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Joining Us</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .email-container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #1e5799 0%, #2989d8 50%, #207cca 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        .content {
            padding: 30px 25px;
        }
        h1 {
            color: #1e5799;
            margin-top: 0;
            font-size: 24px;
        }
        .divider {
            height: 3px;
            background: linear-gradient(to right, #1e5799, #2989d8, #207cca);
            margin: 20px 0;
            border-radius: 2px;
        }
        .button {
            display: inline-block;
            background: linear-gradient(to right, #1e5799, #2989d8);
            color: white;
            text-decoration: none;
            padding: 12px 30px;
            border-radius: 4px;
            font-weight: bold;
            margin: 20px 0;
            transition: transform 0.2s;
        }
        .button:hover {
            transform: translateY(-2px);
        }
        .contact-info {
            background-color: #f5f8fa;
            padding: 15px;
            border-radius: 5px;
            margin-top: 25px;
        }
        .footer {
            background-color: #f0f4f7;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #666;
        }
        .social-links {
            margin: 15px 0;
        }
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #1e5799;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">PeakValueBusiness</div>
            <p>Elevating Your Business Potential</p>
        </div>
        
        <div class="content">
            <h1>Thank You for Joining Us, ${name}!</h1>
            
            <p>We're thrilled to welcome you to the PeakValueBusiness community. Your journey toward optimizing your business value starts now.</p>
            
            <div class="divider"></div>
            
            <h2>What's Next?</h2>
            
            <p>One of our dedicated team members will be reaching out to you shortly to discuss your specific needs and how we can help you achieve your business goals.</p>
            
            <p>In the meantime, you can explore our resources and get a head start:</p>
            
            <a href="https://www.peakvaluebusiness.com/book-consultation" class="button">Book a Meeting</a>
            
            <div class="contact-info">
                <h3>Have Questions?</h3>
                <p>Don't hesitate to reach out directly:</p>
                <p>📧 Email: info@peakvaluebusiness.com</p>
                <p>📞 Phone: +832-712-4162</p>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2025 PeakValueBusiness.com. All rights reserved.</p>
            <div class="social-links">
                <a href="https://linkedin.com/company/peakvaluebusiness">LinkedIn</a> | 
                <a href="https://twitter.com/peakvaluebiz">Twitter</a> | 
                <a href="https://facebook.com/peakvaluebusiness">Facebook</a>
            </div>
            <p>1334 Brittmoore Road, Suite 1327, Houston, TX 77043</p>
        </div>
    </div>
</body>
</html>
    `,
  };
} 