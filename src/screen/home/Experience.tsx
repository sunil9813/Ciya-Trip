import { FaLocationDot, FaStar } from "react-icons/fa6";
import { trips } from "../../assets/data";
import { Title } from "../../utils/Route";

export const Experience = () => {
  return (
    <>
      <section className="py-16 experience">
        <div className="containers">
          <div className="content flexc justify-between mt-10 flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/2 w-full">
              <img src="../images/Experience.png" alt="Experience" />
            </div>
            <div className="lg:w-1/2 w-full">
              <Title title1="The Smiling" title2="Agent For Travel" text="A smiling agent for you" page={true} />
              <p className="py-8">What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {trips.slice(0, 2).map((item) => (
                  <div className="box rounded-xl p-2 bg-white shadow-s2 flex gap-2" key={item?.id}>
                    <div className="h-32 w-56 lg:w-32">
                      <img src={item?.image} alt="" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="details w-full">
                      <div className="flexc justify-between">
                        <h3 className="text-xl font-semibold">{item?.country.slice(0, 7)}</h3>
                        <img src={item.flag} alt="" />
                      </div>
                      <div className="flexc gap-2 my-4 text-gray-400">
                        <FaLocationDot size={15} className=" text-gray-500" />
                        <span className="text-sm">{item.address.slice(0, 15)}...</span>
                      </div>
                      <div className="flexc justify-between text-gray-400 border-t border-gray-200 pt-3">
                        <div className="flexc gap-5">
                          <div className="flexc gap-2">
                            <FaStar size={15} className="text-yellow-500" />
                            <span className="text-xs">{item.rating}</span>
                          </div>
                        </div>
                        <div className="flexc gap-2">
                          <span className="text-xs line-through">{item.discount}</span>
                          <span className="text-sm  font-semibold text-black">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
