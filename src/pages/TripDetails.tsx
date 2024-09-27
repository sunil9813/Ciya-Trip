import { useParams } from "react-router-dom";
import { booking, gallary1, gallary2, gallary3, gallary4, gallary5, trips } from "../assets/data";
import { Progress, Title } from "../utils/Route";
import { RxCalendar } from "react-icons/rx";
import { FaDownload, FaLocationDot, FaStar } from "react-icons/fa6";
import React, { useState } from "react";
import { IoBookmark, IoTimeOutline } from "react-icons/io5";
import { MdOutlineModeComment } from "react-icons/md";
import { FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";
import { TitleDetails, TitleDetails2 } from "../components/common/Title";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Card } from "../components/common/Compoent";
import { GoDotFill } from "react-icons/go";
import { AiFillMinusCircle } from "react-icons/ai";
import { options, Value } from "../utils";
import Select from "react-select";
import DatePicker from "react-date-picker";
import { CiCalendarDate } from "react-icons/ci";
import RangeSlider from "../components/common/RangeSlider";

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
}
interface TripImgProps {
  img: string;
  desc: string;
}
interface TripRatingProps {
  rating: string;
}

export const TripDetails = () => {
  const { id } = useParams<{ id: string }>();
  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) {
    return <p>Trip not found</p>;
  }

  return (
    <>
      <section className="mt-20">
        <div className="img h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-[rgba(16,38,54,0.6)]"></div>
          <img src="../images/back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute left-0 bottom-0 w-full h-10">
            <img src="../images/back2.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="containers">
          <div className="heading -mt-72 relative z-20">
            <Title text="Tour Details" title1="" title2="Tour Details" page={false} />
          </div>
          <div className="content mt-60">
            <div className="flexc justify-between">
              <h3 className="text-3xl font-semibold">{trip?.country}</h3>
              <img src={trip.flag} alt="" />
            </div>
            <div className="flexc justify-between my-6 text-gray-400 border-t border-b border-gray-200 py-3 lg:flex-nowrap flex-wrap">
              <div className="flexc gap-5 lg:flex-nowrap flex-wrap">
                <div className="flexc gap-3">
                  <RxCalendar size={20} className=" text-gray-500" />
                  <span className="text-md">Day</span>
                </div>
                <div className="flexc gap-2">
                  <FaStar size={20} className="text-yellow-500" />
                  <span className="text-md">{trip.rating}</span>
                </div>
                <div className="flexc gap-2 my-4 text-gray-400">
                  <FaLocationDot size={20} className=" text-gray-500" />
                  <span className="text-sm">{trip.address}</span>
                </div>
              </div>
              <div className="flexc gap-5">
                <div className="flexc gap-2">
                  <span className="text-md line-through">{trip.discount}</span>
                  <span className="text-md text-xl font-semibold text-black">{trip.price}</span>
                </div>
                <button className="primary-btn flexc gap-2">
                  <RiVerifiedBadgeFill size={20} />
                  Verified Tour
                </button>
              </div>
            </div>
            <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5">
              <div className="lg:w-2/3 w-full">
                <div className="buttons flexc gap-5 flex-wrap lg:flex-nowrap">
                  <Button text="Save" icon={<FaDownload size={15} />} />
                  <Button text="Bookmark" icon={<IoBookmark size={15} />} />
                  <Button text="Write a review" icon={<MdOutlineModeComment size={15} />} />
                  <Button text="Share" icon={<FaShareAlt size={15} />} />
                  <Button text="Report" icon={<TbMessageReportFilled size={15} />} />
                </div>
                <TripImg img={trip?.image} desc={trip.desc} />
                <TripRating rating={trip.rating.slice(0, 3)} />
                <TripBooking />
                <TripGallary />
                <TripMap />
                <TripReview />
              </div>
              <div className="lg:w-1/3 w-full">
                <TripBookingForm />
                <TripPriceSlider />
                <TripLocation />
                <TripForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className="flexc gap-2 bg-white shadow-s4 px-6 py-3 hover:bg-primary transition-colors ease-in-out rounded-md hover:text-white">
      {icon}
      {text}
    </button>
  );
};

export const TripImg: React.FC<TripImgProps> = ({ img, desc }) => {
  return (
    <Card>
      <img src={img} alt="" className="rounded-md pb-6" />
      <TitleDetails title="Listing Description" />
      <p>The other virtues practice in succession by Franklin were silence, order, resolution, frugality, industry, sincerity, Justice, moderation, cleanliness, tranquility, chastity and humility.</p>
      <p className="py-2">
        From eight till twelve he worked at his trade. From twelve to one he read or overlooked his accounts and dined. From two to five he worked at his trade. The rest of the evening until 10 he
        spent in music, or diversion of some sort. This time is used also to put things in their places. In the last thing before retiring was examination of the day. At the age of 79, he ascribed his
        health to temperance; the acquisition of misfortune to industry and frugality;
      </p>
      <p>{desc}</p>
    </Card>
  );
};

export const TripRating: React.FC<TripRatingProps> = ({ rating }) => {
  return (
    <Card>
      <TitleDetails title="Listing Average Reviews" />

      <div className="flexc justify-between bg-slate-900 p-4 rounded-md">
        <div className="flexc gap-2 text-white text-sm">
          <span className="bg-green-500 text-xs rounded-md p-1 border">{rating}</span>
          <span>12 Rating</span>
        </div>
        <div className="flexc gap-1 text-yellow-400">
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
        <Progress text="Quality" value={50} />
        <Progress text="Space" value={30} />
        <Progress text="Price" value={20} />
        <Progress text="Location" value={80} />
        <Progress text="Service" value={65} />
        <Progress text="Cleanliness" value={90} />
      </div>
    </Card>
  );
};

export const TripBooking = () => {
  const [activeId, setActiveId] = useState<number>(1); // State to track active accordion, open the first item by default

  const toggleAccordion = (id: number) => {
    setActiveId((prevId) => (prevId === id ? 0 : id)); // Toggle the accordion
  };
  return (
    <Card>
      <TitleDetails title="Booking" />
      <section className="booking-accordion">
        {booking.map((item) => (
          <div key={item.id} className={`mb-6 ${activeId === item.id ? "active" : ""}`}>
            {/* Accordion header */}
            <div className="relative z-10 flex gap-2 cursor-pointer" onClick={() => toggleAccordion(item.id)}>
              <div className="relative z-10 bg-transparent rounded-full">
                {activeId === item.id ? (
                  <div className="bg-primary text-white w-6 h-6 p-1 rounded-full">
                    <FaMapMarkerAlt />
                  </div>
                ) : (
                  <div className="bg-gray-500 text-white p-0.5 rounded-full">
                    <GoDotFill size={20} />
                  </div>
                )}
              </div>
              <TitleDetails2 title={item.day} />
            </div>

            {/* Accordion content */}
            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${activeId === item.id ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex gap-7 pl-10 p-5 flex-wrap-reverse lg:flex-nowrap">
                <img src={item.img} alt={item.day} className="h-32 w-32 rounded-lg" />
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Card>
  );
};

export const TripGallary = () => {
  return (
    <Card>
      <TitleDetails title="Form Our Gallery" />
      <div className="flex justify-between gap-5 lg:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 w-full">
          <img src={gallary1} alt="gallary1" className="w-full h-full rounded-md" />
        </div>
        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-5">
          <img src={gallary2} alt="gallary1" className="w-full h-full rounded-md" />
          <img src={gallary3} alt="gallary1" className="w-full h-full rounded-md" />
          <img src={gallary4} alt="gallary1" className="w-full h-full rounded-md" />
          <img src={gallary5} alt="gallary1" className="w-full h-full rounded-md" />
        </div>
      </div>
    </Card>
  );
};

export const TripMap = () => {
  return (
    <Card>
      <TitleDetails title="Add a Review" />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28260.358678836557!2d85.314503!3d27.7004595!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1727436587524!5m2!1sen!2snp"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
    </Card>
  );
};

export const TripReview = () => {
  return (
    <Card>
      <TitleDetails title="Listing Location" />
      <div>
        <div className="flexc gap-1 text-yellow-400">
          <FaStar size={22} />
          <FaStar size={22} />
          <FaStar size={22} />
          <FaStar size={22} />
          <FaStar size={22} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
          <div className="">
            <span>Your name</span>
            <input type="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your name" />
          </div>
          <div className="">
            <span>Your email</span>
            <input type="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your email" />
          </div>
          <div className="">
            <span>Subject</span>
            <input type="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Subject" />
          </div>
        </div>
        <div className="mt-5">
          <span>Your message</span>
          <textarea rows={5} className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your message"></textarea>
        </div>
        <button className="primary-btn mt-4">Submit</button>
      </div>
    </Card>
  );
};

export const TripBookingForm = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <Card>
      <div className="flexc justify-between bookingform mb-5">
        <TitleDetails2 title="Booking" />
        <AiFillMinusCircle size={25} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full border border-gray-300 rounded-md">
          <DatePicker className="border-none" onChange={onChange} value={value} calendarIcon={<CiCalendarDate size={22} />} clearIcon={null} />
        </div>
        <div className="w-full border border-gray-300 rounded-md">
          <DatePicker className="border-none" onChange={onChange} value={value} calendarIcon={<IoTimeOutline size={22} />} clearIcon={null} />
        </div>
        <Select
          placeholder="Adult"
          options={options}
          className="w-full"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: "6px",
              backgroundColor: "white",
              outline: "none",
            }),
          }}
        />
        <Select
          placeholder="Children"
          options={options}
          className="w-full"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: "6px",
              backgroundColor: "white",
              outline: "none",
            }),
          }}
        />
        <button className="primary-btn w-full">Request Booking</button>
      </div>
    </Card>
  );
};

export const TripPriceSlider = () => {
  const [sliderValues, setSliderValues] = useState<[number, number]>([25, 75]);

  const handleSliderChange = (values: [number, number], userInteraction: boolean) => {
    setSliderValues(values);
    console.log("Slider values:", values, "User interaction:", userInteraction);
  };

  return (
    <Card>
      <div className="flexc justify-between bookingform mb-5">
        <TitleDetails2 title="Price" />
        <AiFillMinusCircle size={25} />
      </div>
      <div className="flex flex-col gap-5">
        <span>Select Price Range</span>
        <RangeSlider min={0} max={100} step={1} value={sliderValues} onChange={handleSliderChange} />
        <button className="primary-btn w-full mt-5">Request Booking</button>
      </div>
    </Card>
  );
};

export const TripLocation = () => {
  return (
    <Card>
      <div className="flexc justify-between bookingform mb-5">
        <TitleDetails2 title="Location" />
        <AiFillMinusCircle size={25} />
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28260.358678836557!2d85.314503!3d27.7004595!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1727436587524!5m2!1sen!2snp"
          width="100%"
          height="200"
          loading="lazy"
        ></iframe>

        <p className="font-semibold text-black mt-7">
          Address: <span className="font-normal text-gray-500">214 West Arnold St. New York</span>
        </p>
        <p className="font-semibold text-black my-5">
          Website: <span className="font-normal text-gray-500">potenzaglobalsolutions.com</span>
        </p>
        <p className="font-semibold text-black">
          Phone: <span className="font-normal text-gray-500">(123) 345-6789</span>
        </p>
        <p className="font-semibold text-black mt-5">
          Office Number: <span className="font-normal text-gray-500">(123) 345-6789</span>
        </p>
      </div>
    </Card>
  );
};

export const TripForm = () => {
  return (
    <Card>
      <TitleDetails title="Listing Location" />
      <div>
        <div className="">
          <span>Your name</span>
          <input type="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your name" />
        </div>
        <div className="my-5">
          <span>Your email</span>
          <input type="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your email" />
        </div>
      </div>
      <div className="mt-5">
        <span>Your message</span>
        <textarea rows={5} className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your message"></textarea>
      </div>
      <button className="primary-btn mt-4">Submit</button>
    </Card>
  );
};
