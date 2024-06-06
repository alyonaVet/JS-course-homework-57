export interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

export interface UserFormData {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}