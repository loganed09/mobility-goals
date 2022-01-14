import React from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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
            <div className='testimonials'>
                <h2>Testimonials</h2>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}>
                    <div>
                        <div className="myCarousel testimonial1">
                            <p>April truly gave me my life back. She saved me from an almost bedridden existence at 30 years old after two spinal surgeries and still had extreme pain to the point I couldn't even stand for more than 5 minutes. After seeing her I knew almost immediately that she would change my life. After one month of seeing her once a week I saw enormous change and after 3 months I was almost 100% pain free. I can never give her enough credit for giving me my life back. I can work and travel and work out again. I give her my whole hearted endorsement. She's also incredibly well educated and can tell you exactly what is going on and how to fix it. She answers all my questions and knows exactly what she is talking about. She's awesome!!! If you were hopeless like me and thought you would live the rest of your life in pain then go see April once a week for a few months and you'll be amazed at the change!</p>
                            <h4>- Rebecca</h4>
                        </div>
                    </div>
                    <div>
                        <div className="myCarousel testimonial2">
                            <p>After a summer of cycling I developed a stinging nerve pain in my heel. Immediately I consulted Dr. Google and decided that I either had plantar fascitis or some type of nerve compression in my heel from a tight calf; which made sense coming off a summer of cycling. I didn't want to go to a podiatrist. I had gone with my husband to see one once and was not impressed. Thankfully I had an appointment with April and on a whim told her about the nerve pain. April immediately set to work on my calf and released a two inch knot from my soleus! I had immediate relief. I am back on my bike and forever grateful for April and her focus on helping her clients achieve their mobility goals.</p>
                            <h4>- Susan G.</h4>
                        </div>
                    </div>
                    <div>
                        <div className="myCarousel testimonial3">
                            <p>Before I met April, I used to get regular massages and never understood why I didn’t feel that much different after. She is the one who introduced me to Neuromuscular therapy and it changed everything. It literally changed everything! What I mean by that is that the the shape of my legs has changed for the better! By working on my muscle fibers, April relaxed and lengthened my muscles. Now my legs look more toned and more defined! April is simply one of the most gifted holistic massage therapists I've encountered anywhere. Her techniques of softening, lengthening, and loosening the fascia are simply amazing. Beside being knowledgeable and super professional, April is also one of the most pleasant and caring people I ever met.</p>
                            <h4>- Anna</h4>
                        </div>
                    </div>
                    <div>
                        <div className='myCarousel testimonial4'>
                            <p>I found April by chance working for a different massage company. She immediately identified areas I had problems with without me telling her where the pain was! She is a wealth of knowledge and offers stretch techniques to maximize her sessions! Adding sports massages to your exercise routine is imperative if you want to stay flexible and injury free! April is very professional, accommodating.</p>
                            <h4>- Amie</h4>
                        </div>
                    </div>
                    <div>
                        <div className='myCarousel testimonial5'>
                            <p>April is the best massage therapist I've ever had! She focuses on the individual needs of her clients and customizes the massages with the utmost care.</p>
                            <h4>- Rhonda</h4>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}