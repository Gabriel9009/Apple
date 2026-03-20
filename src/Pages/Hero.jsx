import Home from "../Components/Home.jsx";
import iphoneDesktop from '../assets/hero_iphone_17_pro.jpg'
import iphoneMobile from '../assets/hero_iphone_17.jpg'
import air from '../assets/hero_iphone_air.jpg'
import air_mobile from '../assets/hero_iphone_air_mobile.jpg'
import five from '../assets/hero_iphone_175.jpg'
import five_mobile from '../assets/hero_iphone_17_5.jpg'
import mac from '../assets/promo_macbook_air.jpg'
import mac_pro from '../assets/promo_macbook_pro_m5.jpg'
import ipad_pro from '../assets/promo_ipad_pro.jpg'
import ipad from '../assets/promo_ipad.jpg'
const Hero = () => {
  return (
    <div>
        <Home heading="iPhone 17 Pro" text="All out Pro." bgMobile={iphoneMobile}
  bgDesktop={iphoneDesktop}
  isHero={true} bgColor="bg-[#000000]" txtColor="text-white">
  </Home>
    <Home heading="iPhone Air" text={ <>
      The thinnest iPhone ever. <br />
      With the power of pro inside.
    </>} bgDesktop={air} isHero={true} txtColor="text-black" bgMobile={air_mobile}>
    </Home>
    <Home heading="iPhone 17" text="Magichromatic" bgDesktop={five} isHero={true} txtColor="text-black" bgMobile={five_mobile}>
    </Home>

    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:px-2.5  ">
        <Home heading='MacBook Pro 14"' text='Supercharged by M5' bgDesktop={mac_pro} isHero={true} txtColor="text-white" bgMobile={mac_pro} >
    </Home>
       <Home heading="iPad Pro" text={<> Advanced AI performance <br />and game-changing capabilites </>} bgDesktop={ipad_pro} isHero={true} txtColor="text-white" bgMobile={ipad_pro}>
    </Home>
       <Home heading="iPad" text={ <> Now with the speed of the A16 chip and <br /> double the starting storage</> } bgDesktop={ipad} isHero={true} txtColor="text-black" bgMobile={ipad}>
    </Home>
       <Home heading="MacBook Air" text={<>Sky blue color. <br />Sky high performance with M4 </> } bgDesktop={mac} isHero={true} txtColor="text-black" bgMobile={mac}>
    </Home>
      </div>
       
    </div>
    </div>
    
  )
}

export default Hero