/* eslint-disable react/prop-types */

import { useState } from "react";
import { Wrapper } from "./styled";

const MyImgs = ({ imgs }) => {
  
  const [index, setIndex] = useState(0);

  const click = (index2) => {
    setIndex(index2);
  };
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs?.map((img, index) => (
          <img src={img.url} key={index} onClick={() => click(index)} alt="Img Not Found" loading="lazy"/>
        ))}
      </div>
      <div className="main-screen">
        <img src={imgs?.[index]?.url} alt="Img Not Found" loading="lazy"/>
      </div>
    </Wrapper>
  );
};

export default MyImgs;
