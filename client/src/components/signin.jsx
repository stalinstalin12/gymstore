import './Signup.css'
import { Link } from "react-router-dom";
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const[error,setError]=useState(null);
  const navigate=useNavigate();

  const handleLogin =async(e)=>{
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/login', { email, password });
      console.log(response.data);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      console.log(localStorage);

      alert("Login Successful");
      console.log("login successful");

      // Navigate to the Dashboard component after successful login
      navigate('/Home'); // Redirect to the path defined in App.js
  } catch (err) {
      setError(err.response?.data?.error || 'login failed');
      alert('Login Failed');
  }
  };

    


  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="register-button">Sign In</button>
          <Link to="/Signup" className="LoginText"> New User?</Link>

        </form>
      </div>
    </div>
  );
}

export default Signin;
