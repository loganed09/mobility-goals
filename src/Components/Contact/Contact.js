import React from "react";
import './Contact.css';




export default function Contact() {
    return(
        <div className="contact" id="contact">
            <h2>Contact Us</h2>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5131.527865995232!2d-83.0094008681063!3d40.11499514463288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838f344a6eaaaab%3A0xd921a3dcb6b76430!2s200%20E%20Campus%20View%20Blvd%20%23200%2C%20Columbus%2C%20OH%2043235!5e0!3m2!1sen!2sus!4v1642111422204!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
            <div className="contactInfo">
                <p>Address: <a href="https://www.google.com/maps/place/Mobility+Goals+LLC/@40.119292,-83.0103189,15z/data=!4m2!3m1!1s0x0:0x4e3fa8509887964e?sa=X&ved=2ahUKEwiVp9aa6a_1AhVMaM0KHQH8B6MQ_BJ6BAgwEAU" target="_blank">200 E Campus View Blvd Suite 200, Columbus, OH 43235</a></p>
                <p>Phone: <a href="tel:+16143680413">(614)-368-0413</a></p>
            </div>
            
        </div>
    )
}

