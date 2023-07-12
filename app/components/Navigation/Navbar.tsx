"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import ProfileDropDown from './ProfileDropDown';

const siteName = 'Jahz';

const MenuItems = () => (
  <>
    <NavItem href="/" label="Home" />
  </>
);

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <Link href={href} passHref>
    {label}
  </Link>
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navStyle = 'sticky top-0 transition-all duration-300 dark:text-white backdrop-filter backdrop-blur-lg bg-opacity-50 border-b-[1px] border-slate-500 border-opacity-50';
  const menuStyle = 'flex items-baseline space-x-4 gap-4 font-medium text-slate-300';
  const mobileMenuStyle = `${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'
    } md:hidden absolute top-16 p-2 transform transition-all duration-400 ease-in-out z-0`;

  return (
      <nav className={navStyle}>
        <div className="flex items-center justify-between h-16 container mx-auto container sm:px-4 lg:px-[8rem]">
          <div className="text-left pr-6 border-r-[1px] border-gray-700">
            <Link href="/" className={`transition-all duration-300 text-2xl font-bold`}>
              {siteName}
            </Link>
          </div>
          <div className="flex md:hidden">
            <button type="button" className={`z-40`} onClick={toggleMobileMenu}>
              <span className="sr-only">Open sidebar</span>
              <GiHamburgerMenu className="inline" size={32} />
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <div className={menuStyle + `px-4 text-slate-400`}>
              <MenuItems />
              <ProfileDropDown />
            </div>
          </div>
        </div>
        <div className={mobileMenuStyle}>
          <div className="pt-3 pb-4 px-5 space-y-6 flex flex-col rounded-md dark:bg-slate-800">
            <MenuItems />
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
