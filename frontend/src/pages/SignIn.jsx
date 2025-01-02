import "../css/SignIn.css";
import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect} from "react";   

const API_BASE = "http://localhost:5000/user";

function SignIn() {
    const [items, setItems] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const GetUsers = () => {
        fetch(API_BASE)
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch((err) => console.log(err));
      };

      useEffect(() => {GetUsers();}, []);
    
      const checkUser = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        const user = items.find(item => item.email === email && item.password === password);
        if (user) {
            // Perform further actions on successful login
            navigate('/');
        } else {
            alert('Invalid email or password');
            // Provide feedback to the user
        }
    }

    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <form className="sign-in-form" onSubmit={checkUser}>
                <div className="email-form">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} name="email" placeholder="Enter Email..."/>
                </div>
                <div className="password-form">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter Password..."/>
                </div>
                <button type="submit">Sign In</button>
                
            </form>
            <Link to="/signup" className="sign-up-link">Don't have an account? Sign Up</Link>
        </div>
    )
}

export default SignIn;