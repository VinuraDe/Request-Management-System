// import { NavButtons } from "../atoms/Buttons/Buttons";
// import Dashboard from "../../assets/icons/Dashboard.svg";
// import { PrimaryUserCard } from "../molecules/UserCard";


// const Navbar = () => {
//   return (
//     <nav className="bg-[#830823] p-4 h-[60px]">
//       <div className="container mx-auto flex flex-row justify-between items-center">
//         <div className="text-white text-2xl font-semibold">
//           e-hospital
//         </div>
//         <div className="flex  justify-center mr-[314px] ml-[439px]gap-[16px]">
//           <NavButtons typo={"Dashboard"}/>
//           <NavButtons typo={"Requests"}/>
//           <NavButtons typo={"Feedback"}/>
//           <NavButtons typo={"Reports"}/>
//           <NavButtons typo={"Patient"}/>
//           <NavButtons typo={"Settings"}/>          {/* have to implement */}
//         </div>
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../routes/routes";
// import NavLinks from "./navlinks";
// import { ProfileMenu } from "./profileMenu";
// import NotificationsMenu from "./notificationsMenu";
// import usePermission from "../../../hooks/usePermission";
// import { Permissions } from "../../../constants/enums";
// import useRole from "../../../hooks/useRole";
// import HalfArrowDown from "../../../assets/Icons/HalfArrowDown";

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const { checkPermission } = usePermission();
  // const { checkRole } = useRole();


  const isActiveTab = (path) => {
    return path === pathname;
  };

  const handleDashboardClick = () => {
    navigate("/admin");
  };


  return (
    <nav className="flex justify-between items-center bg-[#830823] md:px-50 px-2 py-3.75 z-50 relative">
      <div
        className="text-white font-semibold text-2xl cursor-pointer"
        onClick={handleDashboardClick}
      >
        e-hospital
      </div>
       <div className="flex gap-1.5 md:gap-4 items-center">
        {RoutePaths.map((item, index) => {
          return (
            <Link
              key={`${index}_${item?.name}`}
              to={item?.link}
              className={` ${
                isActiveTab(item.link)
                  ? "bg-white !text-[#830823] z-50 rounded-[6px]"
                  : "text-white"
              }`}
            >
              <div className="rounded-[6px] hover:bg-white p-1 md:px-3 md:py-2 group duration-300 flex items-center gap-2">
                {/* <div className="">{item?.icon}</div> */}

                <div className="group-hover:text-[#830823] text-xsxl hidden xl:block">
                  {item?.name}
                </div>
              </div>
            </Link>
          );
        })}
        {/* <NavLinks /> */}
      </div>
      <div className="flex items-center gap-1 md:gap-3">
        {/* <NotificationsMenu /> */}
        <span className="text-[#CEBEBE]">|</span>
        <div className="flex items-center md:gap-2.5">
          <span className="text-[#E7E7E7] md:block hidden">English</span>
          {/* <HalfArrowDown color="#E7E7E7" /> */}
        </div>
        <span className="text-[#CEBEBE] md:block hidden">|</span>
        <div className="flex flex-col items-end ">
          <span className="text-xsl text-[#CEBEBE] md:block hidden">
            Welcome
          </span>
          <span className="text-xsl text-white font-semibold max-w-[100px] truncate md:block hidden">
            Vinura
          </span>
        </div>
        <span className="text-[#CEBEBE] xl:block hidden">|</span>
        {/* <ProfileMenu /> */}
      </div>
      </nav>
      
  );
};

export default NavBar;
