import React from "react";
import hafta from "../icons/hafta.svg";
import All from "../icons/AllLogo.svg";
import pixer from "../icons/pixmer.svg";

function Hamian() {
  return (
    <section className="container text-center !py-20">
      <h1 className="text-6xl md:text-[75px]">حامیان این رویداد</h1>
      <div className="md:flex text-center justify-between mt-20 my-10">
        {" "}
        <img src={All} alt="دیجی فای " className="mx-auto mb-6" />
        <img src={hafta} alt="هفتا" className="mx-auto mb-6" />
        <img src={pixer} alt="همگرام" className="mx-auto mb-6" />
      </div>
    </section>
  );
}

export default Hamian;
