import React from 'react';
import './Home.css';


export default function Home() {
    let frontPic = require("../../resources/images/frontPicture.jpg");

    return (
        <section className="home" id="home">
            <div className="topSection">
                <img className="frontPic" src={frontPic.default} />
                <div className="introTextContainer">
                   <div className="introText">
                        <h2>Who we are, What we do</h2>
                        <p>At Mobility Goals, we specialize in Neuromuscular Therapy, focusing on an outcome of individual muscle relief, using trigger point and myofascial release therapy. Our passion has always been centered around the care of each individual's physical health. Treatments are specifically tailored to the needs of each client to make sure they receive the approach that works best for them. Please contact us to find out more, or book yourself an appointment. </p>
                   </div>
                </div>
            </div>
        </section>
    )
}