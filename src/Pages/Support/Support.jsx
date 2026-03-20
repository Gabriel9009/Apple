import support from "/support_home.png";
import { CiSearch } from "react-icons/ci";
import promo from "/promo_tile.png";

const features = [
  {
    title: "IPhone",
    image: "/image_grid.png",
  },
  {
    title: "Mac",
    image: "/image_grid_mac.png",
  },
  {
    title: "IPad",
    image: "/image_grid_ipad.png",
  },
];

const Support = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <div className=" pt-15 flex flex-col items-center justify-center">
          <img className="w-50" src={support} alt="" />
          <h1 className="text-6xl font-bold mb-6 text-center">Apple Support</h1>
          <p className="text-2xl mb-20 text-center">Need help? Start here.</p>

          <div className="flex md:flex-row items-center text-center gap-50 flex-col">
            {features.map((feature, index) => {
              return (
                <div key={index}>
                  <img className="" src={feature.image} alt="" />
                  <p>{feature.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold my-20">Support Tools</h2>

          <div className="flex flex-col md:flex-row text-center gap-5 items-center justify-center">
            <div className="rounded-2xl p-10 bg-gray-100 border-0 shadow-lg shadow-gray-300">
              <p className="text-blue-600">Reset Apple Account Password</p>
            </div>
            <div className="rounded-2xl bg-gray-100 border-0 shadow-lg shadow-gray-300 px-24 py-10">
              <p className="text-blue-600">Check Warranty</p>
            </div>
            <div className="rounded-2xl py-10 px-20 bg-gray-100 border-0 shadow-lg shadow-gray-300">
              <p className="text-blue-600">Change a subscription</p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-4xl font-bold my-20 text-center">
            Search for More Topics
          </h2>
          <div className=" border border-gray-400 flex items-center gap-3 rounded-2xl">
            <CiSearch size={30} className="ml-3" />
            <input
              className="border-none w-full h-15 focus:outline-0"
              type="search"
              placeholder="Search Support"
            />
          </div>
        </div>
      </div>

      <div className=" bg-gray-100 pb-3">
        <div className="max-w-5xl mx-auto py-10 text-center">
            <div className="bg-white leading-14 rounded-t-2xl py-5">
                <h2 className="text-4xl font-bold">Apple Support App</h2>
          <p>
            Get help for all of your Apple products in one place, or connect
            with an expert.
          </p>
          <p>Download</p>
            </div>
            <div className="max-w-5xl">
                   <img className="rounded-b-2xl w-full" src={promo} alt="" />
            </div>
       
        </div>
        <div className="max-w-5xl mx-auto bg-white p-8"> 
            <h2 className="text-2xl font-bold">Beware of counterfeit parts</h2>
            <p className="text-lg">Some counterfeit and third party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Authorized Service Provider. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.
            Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</p>
        </div>
        
      </div>
    </section>
  );
};

export default Support;
