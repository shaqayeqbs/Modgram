import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

function EventForm() {
  return (
    <Element name="reserve">
      <section className="bg-skin-gray">
        <h1 className="text-[40px] md:hidden  leading-tight mt-0 pt-10 w-[90%] mx-auto">
          همین الان غرفه خود را رزرو کنید
        </h1>
        <div className="container md:flex justify-between !py-20">
          <div className="md:w-[50%]">
            <form
              action="https://getform.io/f/8572ad48-5fe7-4ed3-8cc7-3cfcb094092b"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                className="input"
                type="text"
                name="name"
                required
                placeholder="نام و نام خانوادگی "
              />
              <input
                className="input"
                type="text"
                name="phone"
                required
                placeholder="شماره تلفن همراه "
              />
              <input
                className="input"
                type="text"
                placeholder="حوزه کاری "
                name="job"
                required
              />
              <input
                className="input"
                type="text"
                name="instagram"
                required
                placeholder="آدرس پیج اینستاگرام "
              />
              <label htmlFor="connection" className="text-2xl">
                شما از چه طریقی با ایونت آشنا شدید؟؟
              </label>
              <div className="input px-8  pt-4 md:pt-6 w-full ">
                <select
                  name="conection"
                  id="conection"
                  defaultValue="شما از چه طریقی با ایونت آشنا شدید؟؟"
                  className="w-full !pl-3 pt-2  text-xl  bg-transparent text-inherit focus-within:outline-none"
                >
                  <option value="اینستاگرام" className=" text-[black] text-xl">
                    اینستاگرام
                  </option>
                  <option
                    value="معرفی دوستان"
                    className=" text-[black] text-xl"
                  >
                    معرفی دوستان
                  </option>
                  <option value="دیجیفای" className=" text-[black] text-xl">
                    دیجیفای
                  </option>
                </select>
              </div>
              <div className="text-left mt-20 ml-0 text-[25px] font-extrabold">
                {" "}
                <button className="rounded-2xl px-8">
                  ارسال اطلاعات ثبت نام
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-[50%] md:mr-20">
            <h1 className="text-[40px] hidden md:block md:text-[100px] leading-tight mt-6 w-[100%]">
              همین الان غرفه خود را رزرو کنید
            </h1>
            <p className="text-2xl">
              از آنجایی که ظرفیت این رویداد محدود است، باید هرچه زودتر غرفه خود
              را رزرو کنید.{" "}
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default EventForm;
