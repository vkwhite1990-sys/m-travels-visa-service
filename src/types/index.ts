// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'agent';
  phone?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminUser extends User {
  role: 'admin';
  permissions: string[];
}

// Visa Types
export interface VisaType {
  id: string;
  name: string;
  code: string;
  country: string;
  description: string;
  processingTime: string;
  validity: string;
  requirements: string[];
  steps: VisaStep[];
  documents: Document[];
  fees: VisaFee[];
  createdAt: Date;
  updatedAt: Date;
}

export interface VisaStep {
  id: string;
  visaTypeId: string;
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  checklist: string[];
  tips: string[];
}

export interface VisaFee {
  id: string;
  visaTypeId: string;
  type: string;
  amount: number;
  currency: string;
  description: string;
}

export interface Document {
  id: string;
  name: string;
  description: string;
  required: boolean;
  category: string;
  template?: string;
}

// Application Types
export interface VisaApplication {
  id: string;
  userId: string;
  visaTypeId: string;
  status: ApplicationStatus;
  applicationDate: Date;
  currentStep: number;
  documents: ApplicationDocument[];
  notes: string;
  timeline: ApplicationTimeline[];
  createdAt: Date;
  updatedAt: Date;
}

export type ApplicationStatus = 
  | 'draft' 
  | 'submitted' 
  | 'under_review' 
  | 'approved' 
  | 'rejected' 
  | 'withdrawn';

export interface ApplicationDocument {
  id: string;
  applicationId: string;
  documentId: string;
  fileUrl: string;
  uploadedAt: Date;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  notes?: string;
}

export interface ApplicationTimeline {
  id: string;
  applicationId: string;
  event: string;
  description: string;
  timestamp: Date;
  status: ApplicationStatus;
}

// Form Types
export interface VisaCheckForm {
  destination: string;
  nationality: string;
  passportType: string;
  travelPurpose: string;
  travelDate: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  attachments?: File[];
}

export interface NewsletterForm {
  email: string;
  country: string;
  visaInterests: string[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  code?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// Analytics Types
export interface PageView {
  id: string;
  userId?: string;
  page: string;
  referrer?: string;
  userAgent: string;
  ipAddress: string;
  timestamp: Date;
}

export interface Event {
  id: string;
  userId?: string;
  eventName: string;
  eventData: Record<string, any>;
  timestamp: Date;
}
