import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import useTimer from "../hooks/useTImer";
import { Link } from "react-scroll";

function TopSection() {
  const targetTime = new Date("2023-03-08").getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());
  const timeBetween = targetTime - currentTime;
  const nowseconds = Math.floor((timeBetween / 1000) % 60);
  const nowminutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const nowhours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const nowdays = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 2000);

    return () => clearInterval(interval);
  });

  const [days, hours, minutes, seconds, farsMin, FaHours, Faseconds, FarsDays] =
    useTimer(nowseconds, nowminutes, nowhours, nowdays);
  return (
    <section className="container relative w-full   !py-8">
      <div className="  bg-gradient-to-t md:bg-gradient-to-r rounded-xl from-[#2D3342] to-[#2D3342]/0 z-50 w-full md:w-[970px] !h-[700px] "></div>
      <img
        src="/images/milad.png"
        alt=""
        className="object-cover absolute top-8 -z-30 inline-block rounded-xl  md:w-[970px] !h-[700px] "
      />

      <div className="md:absolute mt-[-15rem]  w-[] top-[40%] md:top-[40%] -left-[30%]  md:-left-[10%] tracking-tighter ">
        <h3 className="mb-1  text-[24px] md:text-[40px]   ">
          از ۱۷ تا ۲۰ اسفند ماه
        </h3>
        <h3 className="md:mb-10 text-[30px] "> از ساعت ۱۱ الی ۲۰</h3>
        <h1 className=" md:w-[35rem]  leading-[5rem] text-[40px] md:text-[76px] tracking-tighter !font-extrabold ">
          <span className="text-[#8A0D3C] mx-2 inline-block ">مُدگِرام</span>
          نمایشگاه تخصصی مد و پوشاک بانوان
        </h1>
        <p className="lg:w-[34rem] my-8 text-[20px] md:text-[30px] font-bold  text-white">
          با حضور برترین تولید کنندگان و فروشندگان مد و پوشاک بانوان در برج
          میلاد تهران
        </p>
        <div className="ltr hidden lg:block">
          <Link to="reserve" offset={-90} className="px-6">
            <button className=" inline-block rounded-3xl bg-[#8A0D3C] border-0 p-5 text-[60px]  !font-extrabold text-skin-primary">
              {" "}
              <AiOutlineDown />
            </button>
          </Link>
        </div>
      </div>
      <div className="md:absolute bg-[#444B5F] p-2 px-8 bottom-0 rounded-[32px] w-full lg:w-[35rem]">
        {(hours === 0) & (minutes === 0) && seconds === 0 ? (
          <div>0:0</div>
        ) : (
          <h3 className="ltr text-xl md:text-4xl  lg:text-5xl w-full pt-2  text-center md:text-[75px]">
            {FarsDays}
            <span className="mx-4 md:mx-6 "> {FaHours} </span>
            <span className="mx-4 md:mx-6 ">{farsMin}</span>
            {seconds < 10 ? (
              <span className="inline-block ml-6"> ۰{Faseconds}</span>
            ) : (
              <span className="inline-block ml-6">{Faseconds}</span>
            )}
          </h3>
        )}
        <ul className="flex w-[90%] text-sm md:text-xl  lg:text-xl lg:w-[50%] justify-center flex-row-reverse text-center !mx-auto ">
          <li className="md:margin">روز</li>
          <li className="md:margin">ساعت</li>
          <li className="md:margin">دقیقه</li>
          <li className="md:margin">ثانیه</li>
        </ul>
      </div>
    </section>
  );
}

export default TopSection;
