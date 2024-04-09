import React from "react";
// import { styled } from 'styled-components';
import '../index.css'

import backhroundImage from "../assest/bg-image.jpg";
const BackgroundImage = () => {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <img
        src={backhroundImage}
        alt="img"
        className=" w-[100vw] h-[100vh] bg-cover"
      />
    </div>
  );
};

export default BackgroundImage;
