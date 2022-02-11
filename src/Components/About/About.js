import React from "react";
import './About.css';


export default function About() {

    let aprilPic = require("../../resources/images/picOfApril-Team.jpg");
    let mattPic = require("../../resources/images/mattPic-Team.jpg");
    return(
        <section>
            <h1>Meet the Team!</h1>
            <div className="infoDiv aprilTeam">
                <img src={aprilPic.default} className="aprilPic" />
                <div className="infoBox aprilInfo">
                    <h3>April Merryman, LMT, NMT</h3>
                    <p>April earned her massage therapy license from the American Institute of Alternative Medicine. She has a certificate, and specializes in, neuromuscular therapy and has a passion for helping others by relieving pain and educated them on their health. When she is not working she volunteers with the Westerville Special Olympics where she is the cheerleading coach. </p>
                </div>
            </div>
            <div className="infoDiv mattTeam">
                <img src={mattPic.default} className="mattPic" />
                <div className="infoBox mattInfo">
                    <h3>Matt Parkhurst, LMT</h3>
                    <p>Matt received his LMT license from Columbus Sate Community College and is pursuing both Personal Training and Nutrition coaching certifications. In his personal life he has competed as a collegiate distance runner. After experiencing the highs of fitness and the lows of an injury, Matt has grown to view health as a complex multifaceted equation. </p>
                </div>
            </div>
        </section>
    )
}