import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function checkAuth() {
  const token = cookies().get('admin-token');
  
  if (!token) {
    redirect('/admin/login');
  }
  
  // In a real app, verify the token and get user data
  return {
    isAuthenticated: true
  };
}