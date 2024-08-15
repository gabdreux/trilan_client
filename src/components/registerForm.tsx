import React, { useState } from 'react';
import useAuth  from '../hooks/useAuth';



const Register = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { register } = useAuth();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await register(email, password);
            console.log("Usuário registrado com sucesso!");
        } catch (error) {
            console.error('Erro ao registrar:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
