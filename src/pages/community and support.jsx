import "./css/community and support.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Contact = () => {
    const [contact, setcontact] = useState({
        mobileNumber: "",
        email: "",
        subject: "",
        details: "",
        uploadImage: "",
    });

    const navigate = useNavigate();


// handling input
    const handleinput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setcontact({
            ...contact,
            [name]:value,
        });

    };

// handling from submission
const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
        const response = await fetch(`http://localhost:5000/api/contactform/contact`, {
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(contact),
        });
        if(response.ok){
            setcontact({mobileNumber: "",
                email: "",
                subject: "",
                details: "",
                uploadImage: "",});
                alert("response submitted")
                navigate("/contact");
            }
        console.log(response); 
    } catch (error) {
        console.log("contact",error)
    }
    
};

    return <>
    <Navbar />
    <header class="text-white text-center py-5">
        <div class="container">
            <h1>How can we help you ?</h1>
            <div class="input-group mt-3 w-50 mx-auto">
                <input type="text" class="form-control" placeholder="Search..." />
                <div class="input-group-append">
                    <button class="btn btn-light" type="button">Search</button>
                </div>
            </div>
        </div>
    </header>

    <div class="container mt-5">
        <h2 class="community-h2">Need help? We have got your back.</h2>
        <h6 class="community-h6">Upload your question here, we will soon get back to you or check our FAQ</h6>
            <form onSubmit={handlesubmit}>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="mobileNumber">Mobile Number:</label>
                            <input type="tel" class="form-control community-form-control" id="mobileNumber"
                                placeholder="Enter your mobile number" name="mobileNumber" required autoComplete="off" 
                                value={contact.mobileNumber} onChange={handleinput} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" class="form-control community-form-control" id="email"
                                placeholder="Enter your email" name="email" required autoComplete="off" 
                                value={contact.email} onChange={handleinput} />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <textarea class="form-control community-form-control" id="subject" rows="2"
                        placeholder="Enter subject" name="subject" required autoComplete="off" 
                        value={contact.subject} onChange={handleinput}></textarea>
                </div>
                <div class="form-group">
                    <label htmlFor="details">Share Details Here:</label>
                    <textarea class="form-control community-form-control" id="details" rows="4"
                        placeholder="Enter details" name="details" required autoComplete="off" 
                        value={contact.details} onChange={handleinput}></textarea>
                </div>
                <div class="form-group">
                    <label htmlFor="uploadImage">Upload Image(Optional):</label>
                    <input type="file" class="form-control community-form-control" id="uploadImage"
                        placeholder="Upload the image" name="uploadImage" autoComplete="off" 
                        value={contact.uploadImage} onChange={handleinput} />
                </div>
                <br />
                <button type="submit" class="btn submit-btn">Submit</button>
            </form>
            <br />
    </div>
    <Footer />
    </>
};