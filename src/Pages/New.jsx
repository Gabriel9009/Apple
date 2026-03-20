import { Link } from "react-router-dom";
import iphone from '../assets/new.png'
const New = () => {
  
  return (
    <section className="h-screen" >
      <Link>
        <div
          className="
           font-[Inter]
            text-white
           
            bg-[#000000]
            
          "
        >
          <div className="flex flex-col items-center pt-20">
            <h1 className="text-3xl md:text-5xl font-bold">
              iPhone 17 Pro
            </h1>
            <p className="text-2xl mt-2">All out Pro.</p>
            <button className="bg-[#0071E3] px-5 py-2 rounded-3xl mt-3">
              Learn More
            </button>
            <img src={iphone} alt=""   className="w-150 max-w-full object-contain" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default New;
