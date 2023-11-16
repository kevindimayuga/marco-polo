import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform authentication or further actions with the entered data
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);

        // Reset form fields
        setEmail('');
        setUsername('');
        setPassword('');
    };

    return (
        <div className="card bg-white card-rounded w-50">
            <div className="card-header bg-dark text-center">
            <h1>Welcome to Marco Polo 🐼</h1>
            <p>Where you can find your lost items!!</p>
            </div>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <br />

            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br />

            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />

            <a href="/itemlist">Login</a>
            {/* <button type="submit">Login</button> */}
        </form>
        </div>
    );
};

export default LoginForm;
