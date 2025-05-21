import React, { useState } from "react";
import Carosel from "../Components/Carosel";
import Testimonial from "../Components/Testimonial";
import FAQ from "../Components/FAQ";
import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router";
import Features from "../Components/Features";
const Home = () => {
  const initialGroup=useLoaderData();
  const [groups,setGroups]=useState(initialGroup);
    
  return (
    <div>
      <Fade>
        <Carosel></Carosel>
        <Features 
        groups={groups}
        setGroups={setGroups}
        ></Features>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      </Fade>
      
    </div>
  );
};

export default Home;
