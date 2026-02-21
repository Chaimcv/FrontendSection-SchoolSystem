import React from "react";
import HeaderImage from "../assets/HeaderImage.png";

const Header = () => {
  return (
    <div
      className="h-[100px] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeaderImage})` }}
    >
      {/* <div className="bg-black/50 w-full h-full flex items-center justify-center">
      </div> */}

      <div className="flex flex-row-3 flex justify-around w-full">
         <div><img src="./assets/c" /></div>
          <div>search functionality</div>
           <div>login</div>
      </div>
    </div>
  );
};

export default Header;