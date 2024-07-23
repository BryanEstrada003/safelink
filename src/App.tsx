import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Datos from './components/Datos';
import './App.css';

interface User {
  email: string;
  password: string;
  user: string;
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [currentSection, setCurrentSection] = useState('dashboard');

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('https://safelink-f6f00-default-rtdb.firebaseio.com/safelink.json');
      const data: User[] = await response.json();

      const user = data.find((user) => user.email === email && user.password === password);

      if (user) {
        setIsAuthenticated(true);
        setCurrentUser(user);
        setCurrentSection('dashboard');
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

  const handleUpdatePassword = async (newPassword: string) => {
    if (currentUser) {
      try {
        const response = await fetch('https://safelink-f6f00-default-rtdb.firebaseio.com/safelink.json');
        const data: User[] = await response.json();

        const updatedUserIndex = data.findIndex((user) => user.email === currentUser.email);
        if (updatedUserIndex !== -1) {
          data[updatedUserIndex].password = newPassword;

          await fetch('https://safelink-f6f00-default-rtdb.firebaseio.com/safelink.json', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          });

          setCurrentUser({ ...currentUser, password: newPassword });
        }
      } catch (error) {
        console.error('Error updating password:', error);
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        {isAuthenticated ? (
          currentSection === 'dashboard' ? (
            <Dashboard 
              currentUser={currentUser ? currentUser.user : null} 
              onNavigate={setCurrentSection} 
            />
          ) : currentSection === 'profile' ? (
            <Profile 
              user={currentUser!} 
              onUpdatePassword={handleUpdatePassword} 
              onNavigate={setCurrentSection} 
            />
          ) : (
            <Datos onNavigate={setCurrentSection} />
          )
        ) : isRegistering ? (
          <RegisterForm 
            onRegister={handleRegister} 
            onBackToLogin={() => setIsRegistering(false)} 
          />
        ) : (
          <>
            <LoginForm onLogin={handleLogin} />
            <button onClick={() => setIsRegistering(true)}>Register</button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
