"use client";

import { useState } from 'react';
import Link from 'next/link';

import 'primeicons/primeicons.css';
import styles from './login.module.css';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle sign in logic here
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Welcome Back</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label className={styles.loginLabel}>
                    <p style={{ marginBottom: '8px' }}>Email</p>
                    <input className={styles.loginInput} name='userEmail'
                        type="email" value={email}
                        onChange={e => setEmail(e.target.value)}
                        required placeholder='Enter your email'
                    />
                </label>
                <label className={styles.loginLabel}>
                    <p style={{ marginBottom: '8px' }}>Password</p>
                    <div style={{ position: 'relative' }}>
                        <input className={styles.loginInput} name='userPassword'
                            type={showPassword ? 'text' : 'password'} value={password}
                            onChange={e => setPassword(e.target.value)}
                            required placeholder='Enter your password'
                        />
                        <span style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                            {showPassword ? <i className='pi pi-eye-slash' style={{ color: 'black' }}></i> : <i className='pi pi-eye' style={{ color: 'black' }}></i>}
                        </span>
                    </div>
                </label>
                <div className={styles.formGroup}>
                    <label className={styles.rememberLabel}>
                        <input className={styles.rememberCheck} name='rememberCheck'
                            type="checkbox" checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        Remember me
                    </label>
                    <Link href="/forgot-password">
                        Forgot password?
                    </Link>
                </div>
                <button className={styles.loginButton} type="submit">Log In</button>
            </form>
            <p className={styles.newAccountLink}>Don't have an account? Request here </p>
        </div>
    );
}

export default LoginPage;