import IconStrip from "../../components/ui/IconStrip";
import display from "/display.svg";
import imac from "/imac.svg";
import macbook from "/macbook.svg";
import macstudio from "/macstudio.svg";
import macpro from "/macpro.svg";
import macmini from "/macmini.svg";

const macProducts = [
  { name: "MacBook Air", image: macbook },
  { name: "MacBook Pro", image: macbook },
  { name: "iMac", image: imac },
  { name: "Mac mini", image: macmini },
  { name: "Mac Studio", image: macstudio },
  { name: "Mac Pro", image: macpro },
  { name: "Displays", image: display },
];

const MacIconStrip = () => <IconStrip items={macProducts} />;

export default MacIconStrip;
