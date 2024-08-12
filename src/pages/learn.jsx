import "./css/learn.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Foot";

export const Learn = () => {
    return <>
    <Navbar />
    <h1 class="learn-h1">Article</h1>
    <br />
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card main_card">
            <div class="offer-image">
                <img src="../images/article 1.jpg" class="card-img-top card_image_top" alt="Article 1" />
            </div>
            <div class="card-body">
                <h5 class="card-title card_title">9 tips to stretch your food budget</h5>
                <a href="/article 1" class="btn btn_offer">Read Now...</a>
            </div>
        </div>
    </div>
    <br />
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card main_card">
            <div class="offer-image">
                <img src="../images/article 2.jpg" class="card-img-top card_image_top" alt="Article 2" />
            </div>
            <div class="card-body">
                <h5 class="card-title card_title">How to save like a pro</h5>
                <a href="/article 2" class="btn btn_offer">Read now...</a>
            </div>
        </div>
    </div>
    <Footer />
    </>
};