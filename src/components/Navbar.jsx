import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logoDT from "../assets/logoDT.png";  
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-medium"
      >
        <a href="#home" className="flex text-slate-50 items-center hover:text-blue-500 transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-medium"
      >
        <a href="#about" className="flex text-slate-50 items-center hover:text-blue-500 transition-colors">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        
        className="p-1  font-medium"
      >
        <a href="#" className="flex text-slate-50 items-center hover:text-blue-500 transition-colors">
          Portofio
        </a>
      </Typography>
  
    </ul>
  );
}
 
export default function AppNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="sticky bg-transparent top-4 z-50 w-[90%] max-w-6xl mt-1 max-w-screen-xl overflow-scroll bg-gray-800 m-auto mb-10 px-6 py-3">
      <div className="flex items-center justify-between text-white">
        <img className="h-9 w-9 mr-4 object-contain" src={logoDT} alt="Logo DT" width={200} />

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}