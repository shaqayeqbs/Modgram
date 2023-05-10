import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Link } from "react-scroll";
import myVideo from "./vid.mp4";

function EventsLocation() {
  return (
    <section className="container !w-[90%] md:flex justify-between  !py-20 my-10">
      <div className="lg:w-[50%] ml-20">
        <h2 className="w-full text-5xl md:text-7xl  md:tracking-tighter">
          زمان و محل <div>برگزاری رویداد</div>
        </h2>
        <div className="text-center w-[130%] h-[100%] align-middle    !mx-auto md:w-[400px]  md:!h-[560px] my-10 rounded-[45px]">
          <video
            controls
            src={myVideo}
            type="video/mp4"
            width="100%"
            autoplay
            className=" w-[100%] md:h-[500px]  md:block object-cover rounded-2xl mx-auto"
          ></video>
        </div>
      </div>
      <div className="md:w-[50%] ">
        <p className="hidden md:inline-block text-[white]/60 text-[15px]">
          باتوجه به محدودیت‌های اینترنت و آسیب‌های وارد شده به کسب و کارهای
          اینترنتی و مخصوصا کسب و کارهای اینستاگرامی ما در همگرام با گروهی از
          کسب و کارها و اینفلوئنسرهای بزرگ همین حوزه، تصمیم گرفتیم تا با برگزاری
          یک نمایشگاه تخصصی در زمینه مد و پوشاک بانوان با ایجاد بستری برای فروش
          حضوری، تلاش کنیم تا بخشی از آسیب‌های کسب و کارهای اینستاگرامی جبران
          شود. پیشنهاد می‌کنیم برای کسب اطلاعات بیشتر حتما ویدیو مقابل را مشاهده
          کنید.
        </p>
        <div className="mt-16 md:mt-10 border-b-2 border-[white]/10 pb-6">
          <h3 className="text-5xl my-4">مکان</h3>
          <div className="flex">
            <span className="block text-[#89EAFF] text-4xl ml-3">
              {" "}
              <GoLocation />
            </span>
            <div className="w-full text-2xl font-bold">
              برج میلاد تهران، طبقه دوم
            </div>
          </div>
        </div>
        <div className=" mt-10 border-b-2 border-[white]/10 pb-6">
          <h3 className="text-5xl my-4">زمان</h3>
          <div className="flex">
            <span className="text-[#89EAFF] text-4xl ml-3">
              <AiOutlineClockCircle />
            </span>
            <div className="text-2xl font-bold">
              <h3>از ۱۷ تا ۲۰ اسفند ماه</h3>
              <h3> از ساعت ۱۱ الی ۲۰</h3>
            </div>
          </div>
        </div>
        <div className="text-center md:text-right">
          {" "}
          <Link to="reserve" offset={-90} className="p6">
            <button className="mt-10 text-2xl font-bold rounded-2xl px-4">
              رزرو غرفه{" "}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EventsLocation;
