import { NavButtons } from "../atoms/Buttons/Buttons";
import Dashboard from "../../assets/icons/Dashboard.svg";
import { PrimaryUserCard } from "../molecules/UserCard";


const Navbar = () => {
  return (
    <nav className="bg-[#830823] p-4 h-[60px]">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          e-hospital
        </div>
        <div className="flex  justify-center mr-[314px] ml-[439px]gap-[16px]">
          <NavButtons typo={"Dashboard"}/>
          <NavButtons typo={"Requests"}/>
          <NavButtons typo={"Feedback"}/>
          <NavButtons typo={"Reports"}/>
          <NavButtons typo={"Patient"}/>
          <NavButtons typo={"Settings"}/>          {/* have to implement */}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
