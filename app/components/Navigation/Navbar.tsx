"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdComputer, MdDashboard, MdHomeFilled } from 'react-icons/md';
import ProfileDropDown from './ProfileDropDown';
import Image from 'next/image';

const MenuItems = () => (
  <>
    <NavItem href="/" label="Home" icon={MdHomeFilled} />
    <NavItem href="/server" label="Server" icon={MdDashboard} />
    <NavItem href="/client" label="Client" icon={MdComputer} />
  </>
);

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ElementType; 
}

const NavItem: React.FC<NavItemProps> = ({ href, label, icon: Icon }) => (
  <Link href={href} passHref>
    <Icon className="inline" size={20} /> <span className='sm:hidden lg:inline-block'>{label}</span>
  </Link>
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navStyle = 'sticky top-0 transition-all duration-300 dark:text-white backdrop-filter backdrop-blur-lg bg-opacity-50 border-b-[1px] border-slate-500 border-opacity-50 py-4 px-4';
  const menuStyle = 'flex items-baseline space-x-4 gap-4 font-medium text-slate-300';
  const mobileMenuStyle = `${isMobileMenuOpen ? 'opacity-100 translate-x-0 bg-slate-800 w-full' : 'opacity-0 translate-x-[-100%]'} md:hidden absolute top-16 transform transition-all duration-400 ease-in-out z-0`;

  return (
    <nav className={navStyle}>
      <div className="flex items-center justify-between h-12 container mx-auto container sm:px-4 lg:px-[8rem]">
        <div className="text-left pr-6 border-r-[1px] border-gray-700">
          <Link href="/" className={`transition-all duration-300 text-4xl font-bold `}>
            <Image className='my-4 invert' src="/vercel.svg" width={150} height={80} alt="logo" />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button type="button" className={`z-40`} onClick={toggleMobileMenu}>
            <span className="sr-only">Open sidebar</span>
            <GiHamburgerMenu className="inline" size={32} />
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <div className={menuStyle}>
            <MenuItems />
            <ProfileDropDown />
          </div>
        </div>
      </div>
      <div className={mobileMenuStyle}>
        <div className="pt-3 pb-4 px-5 space-y-6 flex-block">
          <MenuItems />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
