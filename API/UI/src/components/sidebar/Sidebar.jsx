
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import axiosInstance from "../../config";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
      <img
    src="https://res.cloudinary.com/do3op0083/image/upload/v1686103994/robotic-hand_ockk0p.png"
    alt=""
   
  />
        <span className="sidebarTitle">About OpenSource FreedomWall</span>

        <p>Welcome to the Open Source Freedom Wall, a virtual space dedicated to computer science students like yourself! This platform serves as a digital "freedom wall" where you can express your thoughts, ideas, and experiences.</p>
       
        <img
          src="https://res.cloudinary.com/do3op0083/image/upload/v1686362786/OnlineLearning_SouthAsia_Learning_Indoor_GettyImages-1071652068_rubnpu.webp"
          alt=""
        />
        <h4>Insights & Reflections </h4>
        <p>
        Share your insights, reflections, and personal experiences as a computer science student. Discuss challenges, successes, and lessons learned throughout your educational journey.
        </p>
        <img
          src="https://res.cloudinary.com/do3op0083/image/upload/v1686362787/36804042881_ef090e57af_b_amqj5b.jpg"
          alt=""
        />
        <h4>Tutorials & Resources </h4>
        <p>
        Discover and contribute to a wealth of tutorials and resources tailored for computer science students. From coding tips and study guides to project ideas and learning materials, find the support you need to excel in your studies.

        </p>
        <img
          src="https://res.cloudinary.com/do3op0083/image/upload/v1686362787/POTUS_Code_qpsfwf.jpg"
          alt=""
        />
        <h4>Discussions & Debates </h4>
        <p>
        Engage in lively discussions and debates on a wide range of computer science topics. Exchange ideas, perspectives, and opinions with fellow students to broaden your understanding and enhance critical thinking skills.
        </p>
        <img
          src="https://res.cloudinary.com/do3op0083/image/upload/v1686362786/09e93d557d1a8b62a22cea3464575e4a_fsoiva.jpg"
          alt=""
        />
        <h4>Inspiration & Motivation </h4>
        <p>
        Seek inspiration and motivation from the experiences and achievements of others in the computer science community. Discover innovative projects, breakthrough research, and inspiring stories that fuel your passion for the field.
        </p>



      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">TAGS</span>
        <ul className="sidebarList">
          {cats.map((c, index) => (
            <Link to={`/?cat=${c.name}`} className="link" key={index}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
