// src/hooks/useAuth.ts
import { useState } from 'react';
import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase_config';
import { useAuthStore } from '../store/authStore';


interface UseAuthReturn {
  register: (email: string, password: string) => Promise<void>;
  error: string | null;
}

const useAuth = (): UseAuthReturn => {
  const [error, setError] = useState<string | null>(null);
  const setUser = useAuthStore((state) => state.setUser);

  const register = async (email: string, password: string): Promise<void> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erro desconhecido');
      }
    }
  };

  return { register, error };
};

export default useAuth;
