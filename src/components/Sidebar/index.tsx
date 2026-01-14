import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from 'assets/constants';
import logo from 'assets/logo.png';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

type NavLinksProps = {
  handleClick?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        to={item.to}
        key={item.name}
        end
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}>
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#27374D]">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          <p className="text-lg text-[#cd9bea] font-semibold text-center mt-3">Elegant Music</p>
        </div>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {isMobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b]
          backdrop-blur-lg z-10 p-6 md:hidden smooth-transition
          ${isMobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="Logo" className="w-full h-14 object-contain" />
        <p className="text-lg text-[#cd9bea] font-semibold text-center mt-3">Elegant Music</p>
        <NavLinks handleClick={() => setIsMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
