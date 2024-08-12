import "./css/signup.css"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons/faEye";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [user, setuser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

// handling input
    const handleinput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setuser({
            ...user,
            [name]:value,
        });

    };

// handling from submission
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`http://localhost:5000/api/auth/signup`, {
                method:"POST",
                headers:{
                    'Content-Type':"application/json",
                },
                body:JSON.stringify(user),
            });
            if(response.ok){
                setuser({email: "",
                    password: "",});
                    navigate("/");
                    alert("user created")
            } else {
                alert("the password should have 8 digits")
            }
            console.log(response); 
        } catch (error) {
            console.log("signup",error)
        }
        
    };

    return <>
    <body className="signup-body">
    <div className="container">
        <div className="signup-box mx-auto">
            <h2 className="text-center signup-h2">Sign up</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required autoComplete="off" 
                    value={user.email} onChange={handleinput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <div className="input-group">
                        <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" required autoComplete="off"
                        value={user.password} onChange={handleinput} />
                        <span className="input-group-text"><FontAwesomeIcon icon={ faEye } /></span>
                    </div>
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign up</button>
            </form>
            <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
        </div>
    </div>
</body>
    </>
};