import "../css/SignUp.css";
import {useState, useEffect} from 'react';

const API_BASE = "http://localhost:5000/user";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const addUser = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const confirm = formData.get('confirm');

        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        const data = await fetch(API_BASE + "/new", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }).then((res) => {
            res.json()});
        setEmail("");
        setPassword("");
        setConfirm("");
        alert("Sign Up Successful! Go back to the signin page to login.");
      };


    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
            <form className="sign-up-form" onSubmit={addUser}>
                <div className="email-form">
                <label>
                    Email: </label>
                    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} name="email" placeholder="Enter Email..."/>
                </div>
                <div className="password-form">
                <label>
                    Password:</label>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} name="password" placeholder="Enter Password..."/>
                    
                </div>
                <div className="password-form">
                <label>
                    Confirm Password:</label>
                    <input type="password" value={confirm} onChange={(e) => {setConfirm(e.target.value)}} name="confirm" placeholder="Confirm Password..."/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;