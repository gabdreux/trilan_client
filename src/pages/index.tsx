import React, { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import RegisterForm from '../components/registerForm';
import { useAuthStore } from '../store/authStore';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/config/firebase_config';


const inter = Inter({ subsets: ["latin", "latin-ext"] });



const Home = () => {
  const [loading, setLoading] = useState(true);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser]);

  if (loading) {
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">Carregando...</main>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Home</div>
      {user ? (
        <div>Bem-vindo, {user.email}</div>
      ) : (
        <RegisterForm />
      )}
    </main>
  );
};

export default Home;