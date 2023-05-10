import React from "react";
import { Link } from "react-scroll";

function PriceSection() {
  const uptions = [
    {
      id: 1,
      kind: "عادی",
      price: "۵.۵۰۰.۰۰۰",
      description: "تمام امکانات + لوکیشن معمولی",
      link: "/",
    },
    {
      id: 1,
      kind: "نقره ای",
      price: "۶.۵۰۰.۰۰۰ ",
      description: "تمام امکانات + لوکیشن معمولی  + کانتر",
      link: "/",
    },

    {
      id: 1,
      kind: "طلایی",
      price: "۷.۵۰۰.۰۰۰",
      description: "تمام امکانات + لوکیشن نزدیک ورودی + کانتر",
      link: "/",
    },
    {
      id: 1,
      kind: "ویژه",

      description:
        "بر اساس کسب و کار شما غرفه‌ای ویژه با امکانات مورد نظر شما طراحی خواهد شد.",
      link: "/",
    },
  ];
  return (
    <section className="bg-[#444B5F] py-14">
      <div className="md:flex justify-between container">
        <div className="w-[100%]">
          <h2 className="text-5xl md:text-[100px] leading-tight w-[70%] tracking-w">
            هزینه شرکت در این رویداد
          </h2>
          <p>
            <div>
              شما با پرداخت هزینه این رویداد موارد زیر را دریافت خواهید کرد:
            </div>
            <ul>
              <li>• بستر فروش حضوری</li>
              <li>
                • اقلام مورد نیاز از جمله رگال، صندلی، میز و.... (باتوجه به حوزه
                فعالیت شما)
              </li>
              <li>
                • امکان استفاده و راه‌اندازی سایت بدون کدنویسی توسط دیجیفای (زیر
                مجموعه گروه دیجی کالا)
              </li>
              <li>
                • شرکت در کارگاه آموزشی نحوه قیمت گذاری، آموزش فروش حضوری و... (
                2 هفته قبل از برگزاری نمایشگاه)
              </li>
              <li>
                • شرکت در کارگاه آموزشی (روز دوم نمایشگاه و با توجه به عملکرد
                روز قبلی)
              </li>
              <li>
                • دریافت خوراک محتوا (هر روز تعدادی تیزر و عکس از نمایشگاه تهیه
                خواهد شد که مناسب به اشتراک‌گذاری در اینستاگرام است)
              </li>
              <li>• تخفیف 20% برای استفاده از کافه برج میلاد</li>
              <li>• امکان ارتباط با شبکه سرمایه گذاران کسب و کار</li>
            </ul>
          </p>
        </div>
        <div className="w-full  md:w-[50%] md:mr-20  ">
          {uptions.map((item) => (
            <div
              key={item.id}
              className="text-center md:text-left md:float-left"
            >
              <div
                className={
                  item.kind === "عادی"
                    ? "bg-skin-blue text-skin-primry text-xl w-[7rem] p-1 text-center rounded-lg my-3 font-[1000]"
                    : item.kind === "نقره ای"
                    ? "bg-[#8A0D3C]  text-xl w-[7rem] p-1 text-center rounded-lg my-3 font-[1000]"
                    : item.kind === "طلایی"
                    ? "bg-[#f1e253] text-[white] text-xl w-[8rem] p-1 text-center rounded-lg my-3 font-[1000]"
                    : "bg-[#FF7F37] text-[white] text-xl w-[8rem] p-1 text-center rounded-lg my-3 font-[1000]"
                }
              >
                {item.kind}
              </div>
              {item.price && (
                <div
                  className={
                    item.kind === "عادی"
                      ? "p-6 px-10 border-2 border-skin-blue w-full  text-center rounded-2xl mt-5"
                      : item.kind === "نقره ای"
                      ? "border-[#8A0D3C] p-6 px-10 border-2  w-full text-center rounded-2xl mt-5"
                      : item.kind === "طلایی"
                      ? "border-[#f1e253] p-6 px-10 border-2  w-full text-center rounded-2xl mt-5"
                      : "p-6 px-10 border-2 border-[#FF7F37] w-full text-center rounded-2xl mt-5"
                  }
                >
                  <div className="text-4xl md:text-7xl font-extabold">
                    {item.price}
                  </div>
                  <div className="text-right"> تومان</div>
                </div>
              )}
              <p className="w-[80%] text-xl">{item.description}</p>
              <div className=" text-left relative ">
                <div className="border-t-2 w-[8rem] left-0 top-0 my-6 absolute  border-[#9d9696]/40 "></div>
              </div>
              <div className="w-full mt-24">
                <Link to="reserve" offset={-90} className="px-6">
                  <div className="text-left  md:float-left">
                    {" "}
                    <button className="text-2xl my-5 !mb-10">
                      {" "}
                      همین حالا غرفه را رزرو کنید{" "}
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PriceSection;
