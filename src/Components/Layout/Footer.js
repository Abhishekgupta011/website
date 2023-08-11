import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="hungry">
                    <h1>Hungry?</h1>
                    <p>Savor the symphony of taste, crafted just for you.</p>
                </div>
                <div>
                    <p>WE’RE OPEN:</p>
                </div>
                <div className="address">
                <div>
                    <p>Monday - Saturday</p>
                    <p>12pm - 9pm</p>
                </div>
                <div>
                    <p>500 Terry Francine Street<br />San Francisco, CA 94158</p>
                </div>
                <div>
                    <p>Tel: 123-456-7890<br />Email: info@mysite.com</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
