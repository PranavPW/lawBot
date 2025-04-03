export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'lawyer';
  isPremium: boolean;
}

export interface Activity {
  id: string;
  title: string;
  type: 'chat' | 'resource';
  timestamp: Date;
  link: string;
}