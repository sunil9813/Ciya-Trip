import { IoIosSearch } from "react-icons/io";
import Select from "react-select";
import DatePicker from "react-date-picker";
import { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { flag1, flag2, flag3, flag4, flag5 } from "../../assets/data";
import { options, Value } from "../../utils";

export const Hero = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <section className="hero relative mt-20 h-screen">
        <div className="absolute top-0 left-0">
          <img src="../images/hero.png" alt="img" className="w-full h-full object-cover" />
        </div>

        <div className="containers relative lg:pt-96 pt-48">
          <h1 className="lg:text-[60px] text-4xl font-semibold text-primary leading-snug">Travel doesn’t</h1>
          <h1 className="lg:text-[60px] text-4xl font-semibold leading-snug">have to be expensive…</h1>
          <p className="lg:w-1/2 w-full my-5"> Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today.</p>

          <div className="flex flex-wrap lg:flex-nowrap lg:w-2/3 w-full bg-white shadow-s2">
            <Select
              placeholder="Destination"
              options={options}
              className="w-full"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: "0 !important",
                  boxShadow: "0 !important",
                  "&:hover": {
                    border: "0 !important",
                  },
                  padding: "10px",
                  backgroundColor: "white",
                  outline: "none",
                }),
              }}
            />
            <div className="w-full">
              <DatePicker className="border-none" onChange={onChange} value={value} clearAriaLabel="Depart Date" clearIcon={null} />
            </div>

            <Select
              placeholder="Travel Type"
              options={options}
              className="w-full"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: "0 !important",
                  boxShadow: "0 !important",
                  "&:hover": {
                    border: "0 !important",
                  },
                  padding: "10px",
                  backgroundColor: "white",
                  outline: "none",
                }),
              }}
            />
            <button className="primary-btn flex items-center gap-3 w-full lg:w-auto">
              <IoIosSearch size={20} />
              Search
            </button>
          </div>
          <div className="flex items-center mt-8 gap-5">
            <div className="flex items-center -space-x-2">
              <img src={flag1} alt="flag1" className="w-7 h-7 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
              <img src={flag2} alt="flag1" className="w-7 h-7 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
              <img src={flag3} alt="flag1" className="w-7 h-7 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
              <img src={flag4} alt="flag1" className="w-7 h-7 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
              <img src={flag5} alt="flag1" className="w-7 h-7 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
            </div>
            <p className="text-sm">Top Search Location London, USA, India, Rio, Tokyo</p>
          </div>
        </div>
      </section>
    </>
  );
};
