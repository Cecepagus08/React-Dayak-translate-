import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoDT from "../assets/logoDT.png"; 

function NavList() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "About", "Portofolio"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium text-white cursor-pointer"
          onClick={() => handleScroll(item.toLowerCase())} // Scroll ke id yang sesuai
        >
          {item}
        </Typography>
      ))}
    </ul>
  );
}

export default function AppNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="fixed bg-transparent top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl mt-10 max-w-screen-xl overflow-scroll bg-gray-800 m-auto px-6 py-3">
      <div className="flex items-center justify-between text-white">
        <img className="h-10 w-10 mr-4 object-contain" src={logoDT} alt="Logo DT" width={200} />

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
