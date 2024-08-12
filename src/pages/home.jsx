import "./css/home.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";

export const Home = () => {
    return <>

        <header class="text-center bg-lightgreen py-3">
            <div class="container">
                <h1 class="font-weight-bold">YOUR FINANCE MANAGER</h1>
                <a href="/your finance manager" class="btn btn-light btn-lg mt-2 text-button">LEARN MORE</a>
            </div>
        </header>

<Navbar />
        <div className="container my-5">
            <div className="row">
                <div className="col content-main">
                    <h2 className="text-primary">BEST FINANCE <span className="different-color">MANAGER</span></h2>
                    <p className="lead font-italic">You can achieve your financial goals with us</p>
                    <p className="mt-4">SavvyFinance is designed to be your comprehensive personal finance management tool, helping you
                        take control of your financial life. With features such as expense tracking, income monitoring,
                        budget setting, and savings goal management, the site provides a clear and organized overview of
                        your finances.</p>
                    <a href="/best finance manager" className="btn btn-my">Read more...</a>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/card 1.jpg" className="card-img-top card-img" alt="Card Image" />
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}