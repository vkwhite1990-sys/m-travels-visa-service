export interface CountryVisaRequirements {
  countryCode: string;
  countryName: string;
  visaTypes: VisaTypeInfo[];
  processingTime: ProcessingInfo;
  requirements: RequirementInfo[];
  fees: FeeInfo[];
  embassy: EmbassyInfo;
}

export interface VisaTypeInfo {
  type: string;
  duration: string;
  validity: string;
  multiEntry: boolean;
  description: string;
}

export interface ProcessingInfo {
  standard: string;
  expedited?: string;
  emergency?: string;
  notes: string;
}

export interface RequirementInfo {
  id: string;
  category: string;
  items: RequirementItem[];
}

export interface RequirementItem {
  name: string;
  description: string;
  required: boolean;
  tips: string[];
}

export interface FeeInfo {
  type: string;
  amount: number;
  currency: string;
  description: string;
}

export interface EmbassyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  workingHours: string;
  visaDays: string[];
}

export interface VisaEligibility {
  eligible: boolean;
  reasons: string[];
  recommendations: string[];
  nextSteps: string[];
}
