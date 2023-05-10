import React from "react";
import { Element } from "react-scroll";

function Organizers() {
  const organizers = [
    {
      id: 1,
      name: "همگرام",
      href: "https://instagram.com/hamgramco",
      image: "/images/hamgram.png",
    },
    {
      id: 2,
      href: "https://instagram.com/sarmostyle",
      name: "سارمو",
      image: "/images/sarmo.jpg",
      follower: "29.8k",
    },
    {
      id: 3,
      href: "https://instagram.com/zahradabestaniii",
      name: "زهرا دبستانی",
      image: "/images/zahradabestani.jpg",
      follower: "92.3k",
    },
  ];
  return (
    <Element name="organizers">
      <section className="bg-[#8A0D3C] ">
        <div className="container block md:flex lg:justify-center !py-20  ">
          <div className=" ">
            {" "}
            <div className="text-5xl md:text-[100px] font-[1000] mb-10 leading-[7rem]">
              برگزارکنندگان این رویداد
            </div>
            <div className="flex">
              <div>
                {" "}
                <img
                  src="/images/malihefazeli.jpg"
                  className="block organizerImg"
                  alt="hamgram"
                />
              </div>
              <div className="mt-10 md:mt-20 md:m-4 text-2xl font-extrabold">
                <a href="https://instagram.com/malihefazelii">
                  <div className="my-6 pt-10 text-2xl md:mr-10 md:text-5xl w-full  font-[1000] ">
                    ملیحه فاضلی
                  </div>
                </a>
              </div>
            </div>
            <div className="flex ">
              <img
                src="/images/madeli.jpg"
                className="block organizerImg md:w-[170px] "
                alt="hamgram"
              />
              <div className=" mt-10 md:mt-20 md:m-4 text-2xl font-extrabold">
                <a href="https://instagram.com/madelii__">
                  <div className="my-6 pt-10 text-2xl md:mr-10 md:text-5xl md:w-full   font-[1000] ">
                    مادلی
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="-mt-10 w-full h-full  pr-[.1px] md:pr-10">
            {organizers.map((item) => (
              <a href={item.href}>
                <div className="flex my-10 !justify-between">
                  <img
                    src={item.image}
                    className="block organizerImg"
                    alt={item.name}
                  />

                  <div className="mt-20 md:m-4 w-full !text-right  text-2xl font-extrabold">
                    <div className="my-6 pt-10 text-2xl md:mr-10 md:text-5xl md:w-full  font-[1000]  ">
                      {item.name}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Organizers;
