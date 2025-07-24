import React from "react";
import './../styles/App.css';
import  { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
