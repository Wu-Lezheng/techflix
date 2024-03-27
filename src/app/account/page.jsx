"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import styles from "./page.module.css"

function AccountPage() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUser(event) {
        event.preventDefault();
        try {
            await fetch('/api/add-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={createUser}>
                <label>
                    <p>Username</p>
                    <input type="text" id="username" name="username" placeholder="Enter your name" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" id="email" name="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="text" id="password" name="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}

export default AccountPage