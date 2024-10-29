import React from "react";

type LogoProps = {
  width?: string;
};

const Logo: React.FC<LogoProps> = ({ width = "100px" }) => {
  return (
    <>
      <div style={{ width: width }}>Logo</div>
    </>
  );
};

export default Logo;
