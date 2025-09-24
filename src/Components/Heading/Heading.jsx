import React from "react";

export default function Heading() {
  return (
    <div className="mt-10 mb-8 mx-3">
      <h2 className="text-[40px] lg:text-[80px] text-[#c8c2bd] font-[600] text-center leading-none "
      style={{fontFamily:"SF Pro Display 600"}}>
        Choose your
        <br />
        <span className="  font-bold text-white 
                     [text-shadow:0_0_10px_#ffcc80,0_0_20px_#ffcc80,0_0_40px_#ff6a00]">
          Photographic Style.
        </span>
        <br />
        Change it up. Change it back.
      </h2>
    </div>
  );
}
