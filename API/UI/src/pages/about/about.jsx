import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Aboutcomp from "../../components/aboutcomp/aboutcomp";
import "./about.css";

export default function About() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <div className="video-background">
        <video src="https://res.cloudinary.com/do3op0083/video/upload/v1688613727/You_have_no_enemies._xmyza8.mp4" autoPlay loop />
      </div>
      <div className="about">
        <Aboutcomp />
      </div>
    </>
  );
}
