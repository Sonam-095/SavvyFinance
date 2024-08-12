import "./css/about.css"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";

export const About = () => {
    return <>
    <Navbar />
    <body className="about-body">
    
    <div class="container about-container">
        <div class="row align-items-center my-5">
            <div class="col-md-6">
                <div class="circle-image-container">
                    <img src="/images/about 1.jpg" alt="Image 1" class="circle-image img-fluid" />
                    <img src="/images/about 2.jpg" alt="Image 2" class="circle-image img-fluid overlap-image" />
                    <img src="/images/about 3.jpg" alt="Image 3" class="circle-image img-fluid overlap-image2" />
                </div>
            </div>
            <div class="col-md-6">
                <h1 className="about-h1">About us</h1>
                <p className="about-p">Welcome to SavvyFinance where we strive to empower individuals to take control of their financial future through intuitive and user-friendly tools. Our platform was created to address the challenges people face when managing their personal finances. We offer comprehensive solutions for budgeting, expense tracking, and savings goal setting, all designed to provide you with a clear and complete picture of your financial health.</p>
                <p className="about-p">Our mission is to transform how you interact with your finances, making informed financial decisions easier and more accessible. We prioritize your security and privacy, employing advanced encryption and protection measures to ensure your data is safe with us. At SavvyFinance, we are dedicated to continuous improvement, always seeking to enhance our platform based on your feedback to better serve your financial management needs.</p>
            </div>
        </div>
    </div>

    </body>

    <Footer />
    </>
};