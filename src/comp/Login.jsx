import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Add useNavigate
import axios from 'axios';

const Login = () => {
  const [value, setvalue] = useState({
    name: '',
    email: '',
    // phonenum: '',
    password: '',
  });

  const navigate = useNavigate(); // ✅ Setup navigate

  // Test GET request (optional)
  useEffect(() => {
    // axios
    //   .get('http://localhost:3000/Login')
    //   .then((res) => console.log('GET:', res.data))
    //   .catch((err) => console.error('GET error:', err));
  }, []);

  // Handle form submission
  const handle = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/login', value)
      .then((res) => {
        console.log('POST:', res.data);
        // ✅ Navigate only after success
        navigate('/post'); 
      })
      .catch((err) => {
        console.log('POST error:', err);
        alert('Login failed');
      });
  };

  return (
    <div>
      <h1>Please log in</h1>
      <form className='l' onSubmit={handle}>
        <div className="input">
          <h3>Name</h3>
          <input
            type='text'
            placeholder='Enter your name'
            onChange={(e) => setvalue({ ...value, name: e.target.value })}
          />
        </div>
        <div className="input">
          <h3>Email</h3>
          <input
            type='text'
            placeholder='Enter your email'
            onChange={(e) => setvalue({ ...value, email: e.target.value })}
          />
        </div>
        <div className="input">
          <h3>Password</h3>
          <input
            type='password'
            placeholder='Enter your password'
            onChange={(e) => setvalue({ ...value, password: e.target.value })}
          />
        </div>
        <div className="input">
          <button type="submit">Submit</button> {/* ✅ Don't wrap with <Link> */}
        </div>
        <h5>For new users, register here</h5>
        <div className="input">
          <Link to='/'>
            <button type="button">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
