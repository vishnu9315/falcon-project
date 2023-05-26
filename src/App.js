import React, { useState } from 'react';
import './css/CreateAccountForms.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login.js';
import Header from './components/baseComponents/Header';
import RegistrationForm from './components/RegistrationForm';
import { ToastContainer } from 'react-toastify';

function App() {
  const [currentForm, setForm] = useState('login');

  const toggleForm = (formName) => {
    setForm(formName);
  };

  return (
    <div className="App">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <RegistrationForm onFormSwitch={toggleForm} />
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
