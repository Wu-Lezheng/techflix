"use client";

import { useState } from 'react';
import Link from 'next/link';

import styles from './login.module.css';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle sign in logic here
    };

    return (
        <div>
            <h2>Welcome Back</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder='Enter your email' />
                </label>
                <label>Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder='Enter your password' />
                </label>
                <div>
                    <label>
                        <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                        Remember me
                    </label>
                    <Link href="/forgot-password">
                        Forgot your password?
                    </Link>
                </div>
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? Request here </p>
        </div>
    );
}

export default LoginPage;