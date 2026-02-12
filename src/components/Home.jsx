import Hero from "./Hero";
import Contact from "./Contact";
import MyWork from "./MyWork";
import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="home">
      <Hero />
      <MyWork />
      <Contact />
    </div>
  );
};

export default Home;
