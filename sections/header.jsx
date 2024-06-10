import CenterHeader from "@/components/centerHeader";
import LeftHeader from "@/components/leftHeader";
import RightHeader from "@/components/rightHeader";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <LeftHeader/>
      
      <CenterHeader/>

      <RightHeader/>
    </div>
  );
};

export default Header;
