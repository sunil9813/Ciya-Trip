import { useState } from "react";
import { Title } from "../../utils/Route";
import { dots } from "../../assets/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TitleDetails2 } from "../../components/common/Title";

interface Dot {
  top: string;
  left: string;
  info: string;
  image: string;
  country: string;
}

export const Map: React.FC = () => {
  const [hoveredDot, setHoveredDot] = useState<Dot | null>(null);

  return (
    <section className="testi my-20 relative">
      <div className="containers">
        <div className="flex justify-center items-center flex-col">
          <Title title1="Your" title2="Tour Plan" text="Let’s plan the trip of your dreams" page={true} />
          <p className="lg:w-1/2 w-full text-center my-5">Let success motivate you. Find a picture of what epitomizes success to you and then pull it out when you are in need.</p>
        </div>

        {/* Map Image */}
        <div className="relative">
          <img src="../images/map.png" alt="Map" className="w-full" />

          {/* Dots on the map */}
          {dots.map((dot, index) => (
            <button className="dot absolute cursor-pointer" key={index} style={{ top: dot.top, left: dot.left }} onMouseEnter={() => setHoveredDot(dot)} onMouseLeave={() => setHoveredDot(null)}>
              <FaMapMarkerAlt size={20} />
            </button>
          ))}

          {/* Hover info box */}
          {hoveredDot && (
            <div className="absolute bg-white p-3 border rounded-lg text-center shadow-lg w-48" style={{ top: hoveredDot.top, left: hoveredDot.left, transform: "translate(-50%, -120%)" }}>
              <div className="h-48">
                <img src={hoveredDot.image} alt="" className=" rounded-lg mb-2 w-full h-full object-cover" />
              </div>
              <TitleDetails2 title={hoveredDot.country} />
              <span className="mt-2 block">{hoveredDot.info} </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
