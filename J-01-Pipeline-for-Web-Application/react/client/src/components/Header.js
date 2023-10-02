import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" 
            width="400" 
            height="200" />
        <h6 className="text-center mt-5">
          This app has been developed by fthyldz.
        </h6>
        <h1 className="text-center mt-5 header-text">fthyldz Todos</h1>
      </div>
    </div>
  );
};

export default Header;
