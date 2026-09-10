import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: Array<{ filename: string; content: Buffer }>;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      this.transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_PORT === '465',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    }
  }

  async sendEmail(options: EmailOptions): Promise<boolean> {
    if (!this.transporter) {
      console.error('Email transporter not initialized');
      return false;
    }

    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        ...options,
      });
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
    const html = `
      <h2>Welcome to M Travels, ${name}!</h2>
      <p>Thank you for registering with us. We're excited to help you with your visa journey.</p>
      <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard">Go to Dashboard</a></p>
    `;
    return this.sendEmail({
      to: email,
      subject: 'Welcome to M Travels Visa Services',
      html,
      text: `Welcome to M Travels, ${name}!`,
    });
  }

  async sendPasswordResetEmail(email: string, resetUrl: string): Promise<boolean> {
    const html = `
      <h2>Password Reset Request</h2>
      <p>Click the link below to reset your password:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>This link will expire in 1 hour.</p>
    `;
    return this.sendEmail({
      to: email,
      subject: 'Password Reset Request - M Travels',
      html,
    });
  }

  async sendApplicationStatusUpdate(
    email: string,
    applicantName: string,
    applicationId: string,
    status: string
  ): Promise<boolean> {
    const statusMessages: Record<string, string> = {
      submitted: 'Your application has been received',
      under_review: 'Your application is under review',
      approved: 'Congratulations! Your visa has been approved',
      rejected: 'Your application has been rejected',
    };

    const html = `
      <h2>Application Status Update</h2>
      <p>Dear ${applicantName},</p>
      <p>${statusMessages[status] || 'Your application status has been updated'}</p>
      <p>Application ID: ${applicationId}</p>
      <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/applications/${applicationId}">View Details</a></p>
    `;

    return this.sendEmail({
      to: email,
      subject: `Visa Application Status Update - ${status.toUpperCase()}`,
      html,
    });
  }

  async sendContactFormNotification(
    name: string,
    email: string,
    subject: string,
    message: string
  ): Promise<boolean> {
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    return this.sendEmail({
      to: process.env.EMAIL_FROM || 'support@m-travels.com',
      subject: `New Contact: ${subject}`,
      html,
    });
  }
}

export const emailService = new EmailService();
