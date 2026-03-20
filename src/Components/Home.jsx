import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = ({
  heading,
  bgMobile,
  bgDesktop,
  text,
  txtColor,
  isHero = false,
}) => {
  const [bgImage, setBgImage] = useState(bgMobile);

  useEffect(() => {
    const handleResize = () => {
      if (isHero && window.innerWidth <= 900) {
        setBgImage(bgMobile);
      } else {
       
         setBgImage(bgDesktop);
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [bgMobile, bgDesktop, isHero]);

  return (
    <section  className="w-full min-h-screen pt-2.5">
  <Link to="/"className="block min-h-screen">
    <div
      className={`w-full min-h-screen  font-[inter] ${txtColor}
                  bg-no-repeat bg-center bg-cover md:bg-center`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
            
          <div className="h-auto flex flex-col items-center pt-20 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">{heading}</h1>
            <p className="text-2xl mt-2">{text}</p>
            <button className="bg-[#0071E3] px-5 py-2 rounded-3xl mt-3 text-white">
              Learn More
            </button>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Home;
