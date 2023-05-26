import React, { useState } from 'react';
import image from '../assets/images/falcon-logo.png'
import impactqa from '../assets/images/imactqa-logo.jpg'

function RegistrationForm(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <div class="container">
        <div class="image-container">
          <a class="logo-container1 left" href="/">
            <img src={image} alt="Logo" class="Logo1"/>
          </a>
                      
          <a class="logo-container right" href="/">
            <img src={impactqa} alt="Right Logo" class="logo" />
          </a>
        </div>
        <div class="registration-form">
          <h2>Register Here</h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" class="btn">Register</button>
          </form>
          <button class="btn" onClick={() => props.onFormSwitch('login')}>Already have an Account? Click Here</button>
        </div>
      </div>
      
    );
}

export default RegistrationForm;
