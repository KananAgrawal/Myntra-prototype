import React from "react";
import img2 from "./images/model.png";
import image1 from "./images/logo1.png";
import image2 from "./images/logo2.png";
import image3 from "./images/logo3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Card from './Card';

import { Link } from "react-router-dom";

export default function Mainbar({onJoin}) {
  return (
    <>
      <div className="main-container">
        <div className="ellipse">
          <img src={img2} alt="" />
        </div>

        <div className="text-container">
          <p>
            <h1 id="head1">From Trends To Friends:</h1>
            <h1 id="head2">
              Welcome to the fashionable <br />
              community of Myntra!
            </h1>
            <p
              style={{
                fontFamily: "Georgia",
                fontSize: "1em",
                marginTop: "-3%",
              }}
            ></p>
          </p>
       
          <div className="join">
            <Link to="/signup">
              <button className="btn btn-orange mx-1">
                {" "}
                Join our Community
              </button>
            </Link>
          </div>
        </div>
        <button className="play-button" onClick={onJoin}>
      <span className="icon-container">
        <FontAwesomeIcon icon={faPlay} className="play-icon" />
      </span>
      <span className="button-text">Join Challenge!</span>
    </button>
      </div>
      <div className="NumberCount">
      <div className="column">
        <p>20</p>Posts</div>
      <div className="column">
        <p>500</p>Members</div>
      <div className="column">
        <p>44</p>Blog Articles</div>
      </div>
      <div className="lastCont">
        <Card/>
        <div className="rectangle">
<Link to="/inspiration" className="link-no-highlight">
<div className="ellipse1">
          <img src={image1} alt="inspiration" />
        </div>
        <span className="ellipse-text">Inspiration</span>
</Link>
       
<Link to="/discovery" className="link-no-highlight">
<div className="ellipse2">
          <img src={image2} alt="discovery" />
        </div>
        <span className="ellipse-text">Discovery</span>
</Link>
        <Link to="/leaderboard" className="link-no-highlight">
        <div className="ellipse3">
          <img src={image3} alt="top-pick" />
        </div>
        <span className="ellipse-text">Top-pick</span>
        
        </Link>
        </div>
       <Footer/>
      </div>
    </>
  );
}
