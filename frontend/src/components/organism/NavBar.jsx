import { useState } from "react";

const navLinks = [
  { text: "Dashboard", url: "/" },
  { text: "Requests", url: "/" },
  { text: "Feedbacks", url: "/" },
  { text: "Reports", url: "/" },
  { text: "Patient", url: "/" },

];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header
      className={"text-gray-600 body-font bg-[#830823]"}
    >
      <div className="container mx-auto flex p-5 justify-between items-center">
        <div className="">
        </div>
        
        <div className="hidden md:block">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
            {navLinks.map((link, index) => (
              <div
                key={index}
                href={link.url}
                className="mr-5 text-white cursor-pointer"
              >
                {link.text}
              </div>
            ))}
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white h-screen w-full absolute flex flex-col top-2 pt-5 pl-5">
          <div className="mb-[37.5px] text-[#100C08] font-medium text-sm cursor-pointer">
          </div>
          <div className="flex flex-col gap-[32px]">
            {navLinks.map((link, index) => (
              <div
                key={index}
                href={link.url}
                className="mr-5 text-[#100C08] font-medium text-sm cursor-pointer "
              >
                {link.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;