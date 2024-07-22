// src/App.tsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

interface User {
  email: string;
  password: string;
  user: string;
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('https://safelink-f6f00-default-rtdb.firebaseio.com/safelink.json');
      const data: User[] = await response.json();

      const user = data.find((user) => user.email === email && user.password === password);

      if (user) {
        setIsAuthenticated(true);
        setCurrentUser(user.user);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRegister = async (email: string, password: string, username: string) => {
    try {
      const response = await fetch('https://safelink-f6f00-default-rtdb.firebaseio.com/safelink.json');
      const data: User[] = await response.json();

      const userExists = data.some((user) => user.email === email || user.user === username);

      if (userExists) {
        alert('User or email already exists');
      } else {
        const newUser: User = { email, password, user: username };
        data.push(newUser);

        await fetch('https://safelink-f6f00-default-rtdb.firebaseio.com/safelink.json', {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        alert('User registered successfully');
        setIsRegistering(false);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <h1>Welcome, {currentUser}!</h1>
      ) : isRegistering ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          <button onClick={() => setIsRegistering(true)}>Register</button>
        </>
      )}
    </div>
  );
};

export default App;
