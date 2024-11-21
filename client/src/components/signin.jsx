import './Signup.css'
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
         
          <button type="submit" className="register-button">Sign In</button>
          <Link to="/Signup" className="LoginText"> New User?</Link>

        </form>
      </div>
    </div>
  );
}

export default Signin;
