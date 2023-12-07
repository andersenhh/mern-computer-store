import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//react-icons
import { FaBars, FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const {user} = useContext(AuthContext);
  console.log(user);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //navItems here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/Shop" },
    { link: "List Your Products Here", path: "/admin/dashboard" },
  ];
  return (
    <header className="w-full bg-gray-200 fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4  ${
          isSticky ? "sticky top-0 left-0 right-0 bg-black text-white" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* {logo} */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex item-center gap-2"
          >
          Computer Store
          </Link>
          {/* {nav item for large device} */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className={`block text-base text-black font-medium uppercase cursor-pointer hover:text-blue-700 ${
                  isSticky ? "text-white" : ""
                }`}
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* {btn for lg devices} */}
          <div className="space-x-12 hidden lg:flex item-center">
            {/* <button><FaBarsStaggered className="w-5 hover:text-blue-700"/></button> */}
            {/* show name user who login */}
            {/* <p> {user ? user.email : ""} </p> */}
            {/* {user && <p>Welcome, {user.email}</p>} */}
            {user ? <p>Welcome, {user.email}</p> : null}
      
          </div>
          {/* {menu btn for mobile devices} */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* {nav items for small devices} */}
        <div
          className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
