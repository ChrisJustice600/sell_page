export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: Date;
  status: 'NEW' | 'CONTACTED' | 'CONVERTED' | 'LOST';
}

export interface Registration {
  id: string;
  fullName: string;
  whatsapp: string;
  address: string;
  createdAt: Date;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}

export interface Admin {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'SUPER_ADMIN';
}