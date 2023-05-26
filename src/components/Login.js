import React, { useState } from "react"
import image from '../assets/images/falcon-logo.png'
import { useNavigate } from "react-router-dom"
import impactqa from '../assets/images/imactqa-logo.jpg'
import { toast } from "react-toastify"


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let info = { email, password };

        if (validate()) {

            try {

                const response = await fetch("http://localhost:8000/user");

                const resp = await response.json();

                console.log(resp);



                if (resp.length === 0) {

                    toast.error('Please enter a valid username');

                } else {

                    const filteredUsers = resp.map(user => user.email == email && user.password == password)

                    if (filteredUsers.length > 0) {

                        Navigate('/RegistrationForm')

                        // const user = resp[0]; //if only one user

                        // if (user.email === email && user.password === password ) {

                        //     Navigate('/Header');

                    } else {

                        toast.error('Please enter valid credentials');

                    }

                }

            } catch (error) {

                toast.error(error);

            }
        }

    };

    const validate = () => {

        let result = true;

        if (email === '' || email === null) {

            result = false;

            toast.warning('Please Enter Username');

        }

        if (password === '' || password === null) {

            result = false;

            toast.warning('Please Enter Password');

        }

        return result;

    }

    return (
        <div className="container">
            <div className="image-container">
                <a className="logo-container1 left" href="/">
                    <img src={image} alt="Logo" className='Logo1' />
                </a>

                <a className="logo-container right" href="/">
                    <img src={impactqa} alt="Right Logo" className="logo" />
                </a>
            </div>
            <div className="auth-form-container registration-form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="*******"
                        id="password"
                        name="password"
                    />
                    <button type="submit" className="Login-btn btn">
                        Log In
                    </button>
                </form>
                <button className="btn" onClick={() => props.onFormSwitch('register')}>
                    Don't have an Account? Register Here
                </button>
            </div>
        </div>

    )
}


export default Login;