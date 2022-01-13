import React from 'react';
import './Home.css';


export default function Home() {
    let frontPic = require("../../resources/images/frontPicture.jpg");
    let NMTpic = require("../../resources/images/NMTpic.jpg");
    let workInProgress = require("../../resources/images/workInProgress.jpg");

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
            <div className="whatIsNMT">
                <div className="NMTText">
                    <h2>What is NMT?</h2>
                    <p className="NMTText1">
                        NMT stands for Neuromuscular Therapy.
                    </p>
                    <p className='NMTText2'>
                        There are many ways our muscles can be damaged. Sometimes when we get injured, the muscle does not heal properly. Connective tissue and fibers will grow back in irregular ways, which decreases mobility and can cause pain. In other cases, repeated use on muscles will put strain on them and cause them to hold themselves in a position that is not natural or comfortable.
                    </p>
                    <p className='NMTText3'>
                        NMT is a therapy process that helps repair damage from normal wear and tear, and from serious injuries. It heals muscles by stretching and breaking down the fascia and adhesions, and engaging trigger points in the muscles. This is done mostly manually and sometimes using tools such as therapeutic cupping and gua sha stone massage. 
                    </p>
                </div>
                <img className='NMTpic' src={NMTpic.default} />
            </div>
            <div className='services'>
                <h2>Services</h2>
             
                <div className='serviceImages'>
                    <div className="service1">
                        <h3>Service1</h3>
                        <img src={workInProgress.default} alt="" className="service1" />
                    </div>
                    <div className="service2">
                        <h3>Service2</h3>
                        <img src={workInProgress.default} alt="" className="service2" />
                    </div>
                    <div className="service3">
                        <h3>Service3</h3>
                        <img src={workInProgress.default} alt="" className="service3" />
                    </div>
                    <div className="service4">
                        <h3>Service4</h3>
                        <img src={workInProgress.default} alt="" className="service4" />
                    </div>
                    <div className="service5">
                        <h3>Service5</h3>
                        <img src={workInProgress.default} alt="" className="service5" />
                    </div>
                </div>
            </div>
        </section>
    )
}