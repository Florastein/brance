import { createContext } from 'react';
import type { User } from 'firebase/auth';
import { Role } from '../utils/roles';

export interface UserContextType {
  user: User | null;
  role: Role | null;
  loading: boolean;
}

export const UserContext = createContext<UserContextType>({ user: null, role: null, loading: true });
