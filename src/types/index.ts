export type UserRole = 'LEGAL_AID_SEEKER' | 'LAWYER';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  created_at: string;
}

export interface LegalCategory {
  id: string;
  name: string;
  subcategories: LegalSubcategory[];
}

export interface LegalSubcategory {
  id: string;
  name: string;
  categoryId: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
  userId: string;
}