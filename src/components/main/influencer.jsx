import React from "react";
import Carousel from "./Carousel";
import { Element } from "react-scroll";

function Influencer() {
  return (
    <Element name="influencers">
      <section className="container !py-10">
        <p className="text-center">
          هدف از برگزای این نمایشگاه، بهبود وضعیت فروش کسب و کارهای اینستاگرامی
          و جایگاه یابی آنها (Barnding) در ذهن مخاطبین است. اگر شما هم کسب و
          کاری در حوزه مد و پوشاک بانوان دارید، این نمایشگاه مخصوص شماست. اگر
          رفت و آمد برج میلاد را هم در نظر نگیریم، اینفلوئنسرهای مطرحی در این
          حوزه برای افزایش تعداد بازدیدکننده‌ها در کنار ما هستند. هممچنین ما این
          رویداد را صرفا یک نمایشگاه ساده در نظر نمی‌گیریم، چراکه شما با شرکت در
          این نمایشگاه امکان همکاری با دیجیفای (یکی از زیرمجموعه‌های گروه
          دیجیکالا) را برای راه اندازی سایت خواهید داشت و حتی می‌توانید بعد از
          اتمام نمایشگاه نیز از آن استفاده کنید. علاوه بر این، از برترین
          کارآفرینان و سرمایه‌گذاران این حوزه دعوت کردیم تا با برگزاری چند
          کارگاه آموزشی، تجربه خودشان را از راه‌اندازی و توسعه کسب و کار با شما
          به اشتراک بگذارند.
        </p>
        <div className="relative">
          <div className=" bg-gradient-to-r rounded-xl from-[#2D3342]/75 to-[#2D3342]/0 z-50 md:w-[970px] !h-[500px] "></div>
          <img
            src="/images/avali.jpg"
            alt=""
            className="object-cover absolute top-8 -z-30 inline-block rounded-xl  w-[970px] !h-[460px] "
          />
          <div className="absolute top-[57%] md:top-[20%] w-[90%]   md:w-[30%] left-10 md:left-0">
            {" "}
            <h2 className="text-5xl md:text-[100px] leading-tight">
              کارگاه آموزشی
            </h2>
            <p>
              شاید شما تا به حال تجربه فروش حضوری و مخصوصا فروش در نمایشگاه را
              نداشته باشید؛ اما لازم نیست از این بابت نگران نباشید! 2 هفته قبل
              از آعاز نمایشگاه با برگزاری یک کارگاه آموزشی نکات لازم را از قیمت
              گذاری تا نحوه فروش حضوری و... را به شما یاد خواهیم داد.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Influencer;
