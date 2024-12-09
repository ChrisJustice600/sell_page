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

export interface AdminCreate extends Omit<Admin, 'id'> {
  password: string;
}