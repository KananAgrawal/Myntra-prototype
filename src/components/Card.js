import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faComment as faCommentSolid, faShare as faShareSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import post4 from './images/post4.jpg';
import post5 from './images/post5.jpg';
import post6 from './images/post6.jpg';
//import post2 from './images/post2.jpg';
import post3 from './images/post3.jpg';
import pimage from "./images/post1.png";

export default function Card() {
  
        const [liked, setLiked] = useState(false);
      
        const handleLikeClick = () => {
          setLiked(!liked);
        };
        
        const ExampleCarouselImage = ({ src, alt }) => {
            return <img src={src} alt={alt} className="d-block w-100" />;
          };
  return (
    <>
      <div className="postCard">
        <div className="left">
        <img src={pimage} alt="Post Image according to the description." />
        <div className="post-actions">
        <button className="action-button2" onClick={handleLikeClick}>
          <FontAwesomeIcon icon={liked ? faHeartSolid : faHeart} style={{ color: liked ? 'red' : 'inherit' }} />
          <p> 25 Like</p>
        </button>
        <button className="action-button2">
          <FontAwesomeIcon icon={faComment} />
          <p>4 Comment</p>
        </button>
        <button className="action-button2">
          <FontAwesomeIcon icon={faShareSquare} />
          <p>2 Share</p>
        </button>
        </div>
        </div>
        <div className="right">
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius
          voluptatem amet rem quasi in! Placeat repellendus alias nulla ipsa
          earum? Id, ad?
        </span>
        </div>
      </div>
      <div className="blogCard">
      <div className="leftB">
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius
          voluptatem amet rem quasi in! Placeat repellendus alias nulla ipsa
          earum? Id, ad?
        </span>
        </div>
      <div className="rightB">
      <div className="blog-header">
        <img src={post3} alt="profile" className="profile-pic" />
       
        <span className="username">Username</span>
      </div>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage src={post4} alt="First slide" className="blog-image"/>
         
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={post5} alt="Second slide" className="blog-image" />
          
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={post6} alt="Third slide" className="blog-image" />
          
        </Carousel.Item>
      </Carousel>
      {/* <img src={post2} alt="Blog image for description." className="blog-image" /> */}
      <div className="blog-actions">
      <button className="action-button" onClick={handleLikeClick}>
          <FontAwesomeIcon icon={liked ? faHeartSolid : faHeart} style={{ color: liked ? 'red' : 'inherit' }} />
          <p> 25 Like</p>
        </button>
        <button className="action-button">
          <FontAwesomeIcon icon={faComment} />
          <p>4 Comment</p>
        </button>
        <button className="action-button">
          <FontAwesomeIcon icon={faShareSquare} />
          <p>2 Share</p>
        </button>
      </div>
    </div>
    <Carousel/>
      </div>
    </>
  );
}
