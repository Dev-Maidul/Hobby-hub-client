import React, { useState } from "react";
import Carosel from "../Components/Carosel";
import Testimonial from "../Components/Testimonial";
import FAQ from "../Components/FAQ";
import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router";
import Features from "../Components/Features";
import HowItWorks from "../Components/HowItWorks";
const Home = () => {
  const initialGroup=useLoaderData();
  const [groups,setGroups]=useState(initialGroup);
    
  return (
    <div className="">
      <Fade>
        <Carosel></Carosel>
        <Features 
        groups={groups}
        setGroups={setGroups}
        ></Features>
      <Testimonial></Testimonial>
      <HowItWorks></HowItWorks>
      <FAQ></FAQ>
      </Fade>
      
    </div>
  );
};

export default Home;
