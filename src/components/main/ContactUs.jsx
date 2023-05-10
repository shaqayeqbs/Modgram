import React from "react";
import Call from "../icon/Call";

function ContactUs() {
  return (
    <section className="bg-skin-bordercolor  py-20 h-full">
      <div className="container md:flex">
        <div className="md:w-[50%]">
          <div className="mb-10 text-skin-blue font-bold text-[18px]">
            تماس با ما
          </div>
          <div className="text-4xl md:text-[76px] mb-16 md:w-[75%] leading-normal font-extrabold">
            به مشاوره نیاز دارید؟
          </div>
          <div className=" ">
            <img
              src="/images/avali.jpg"
              className="h-[471px] w-[470px] object-cover rounded-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-[50%] md:py-28 md:text-7xl">
          <p>در صورت بروز هرگونه سوال می‌توانید با شماره زیر تماس بگیرید.</p>

          <div className="relative mb-56">
            <h1 className="mt-20 md:mt-40 absolute text-5xl text-center md:text-7xl z-30">
              <a href="tel:09331842043"> 09331842043</a>
              <h1 className="w-full  my-5 text-right md:mt-6  text-5xl  md:text-7xl z-30">
                <a href="tel:09331842043">021-77687012</a>
              </h1>
            </h1>

            <div className="absolute top-[-1rem] md:top-[4.5rem]  right-[-10%rem] md:right-[-2rem] ">
              <Call />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
