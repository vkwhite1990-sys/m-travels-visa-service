import { z } from 'zod';

export const emailSchema = z
  .string()
  .email('Invalid email address')
  .toLowerCase();

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

export const phoneSchema = z
  .string()
  .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 
    'Invalid phone number');

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional().default(false),
});

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: phoneSchema.optional().or(z.literal('')),
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  newPassword: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: emailSchema,
  phone: phoneSchema,
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export const newsletterSchema = z.object({
  email: emailSchema,
  country: z.string().min(2, 'Please select a country'),
  visaInterests: z.array(z.string()).min(1, 'Select at least one visa type'),
});

export const visaCheckSchema = z.object({
  destination: z.string().min(2, 'Please select a destination'),
  nationality: z.string().min(2, 'Please select your nationality'),
  passportType: z.enum(['regular', 'diplomatic', 'official']),
  travelPurpose: z.string().min(1, 'Please select travel purpose'),
  travelDate: z.date().refine(date => date > new Date(), 'Travel date must be in the future'),
});

export const documentUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 10 * 1024 * 1024, 'File must be less than 10MB')
    .refine(
      (file) => ['application/pdf', 'image/jpeg', 'image/png', 'application/msword'].includes(file.type),
      'Invalid file type'
    ),
  documentType: z.string().min(1, 'Please select document type'),
  description: z.string().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type VisaCheckFormData = z.infer<typeof visaCheckSchema>;
export type DocumentUploadData = z.infer<typeof documentUploadSchema>;
