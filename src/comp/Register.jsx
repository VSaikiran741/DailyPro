import React, { useState, useEffect } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [value, setvalue] = useState({
    name: '',
    email: '',
    phonenum: '',
    password: '',
    cpassword: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // axios
    //   .get('http://localhost:3000/')
    //   .then((res) => console.log('GET:', res.data))
    //   .catch((err) => console.error('GET error:', err));
  }, []);

  const handle = (event) => {
    event.preventDefault();

    // Optional: Validate password match
    if (value.password !== value.cpassword) {
      alert("Passwords do not match");
      return;
    }

    axios
      .post('http://localhost:3000/Res', value)
      .then((res) => {
        console.log('POST:', res.data);
        navigate('/Login');
      })
      .catch((err) => {
        console.log('POST error:', err);
        alert('Registration failed');
      });
  };

  return (
    <div>
      <form className='register-form' onSubmit={handle}>
      <h1>Create Your Diary Account 📖</h1>
        <div className="input">
          <h3>Full Name</h3>
          <input
            type='text'
            placeholder='Enter your full name'
            autoComplete="name"
            value={value.name}
            onChange={(e) => setvalue({ ...value, name: e.target.value })}
          />
        </div>
        <div className="input">
          <h3>Email</h3>
          <input
            type='email'
            placeholder='Enter your email address'
            autoComplete="email"
            value={value.email}
            onChange={(e) => setvalue({ ...value, email: e.target.value })}
          />
        </div>
        <div className="input">
          <h3>Phone Number</h3>
          <input
            type='tel'
            placeholder='Enter your phone number'
            autoComplete="tel"
            value={value.phonenum}
            onChange={(e) => setvalue({ ...value, phonenum: e.target.value })}
          />
        </div>
        <div className="input">
          <h3>Create Password</h3>
          <input
            type='password'
            placeholder='Create a password'
            autoComplete='new-password'
            value={value.password}
            onChange={(e) => setvalue({ ...value, password: e.target.value })}
          />
        </div>
        <div className="input">
          <h3>Confirm Password</h3>
          <input
            type='password'
            placeholder='Confirm your password'
            autoComplete='new-password'
                        value={value.cpassword}
            onChange={(e) => setvalue({ ...value, cpassword: e.target.value })}
          />
        </div>
        <div className="input">
          <button type="submit">Register</button>
        </div>
        <div className="already">
          <h5>Already have an account?</h5>
          <Link to='/Login'>Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
