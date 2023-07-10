"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import SignOutButton from '../auth/signout';

const siteName = "Jahz";


const MenuItems = () => (
  <>
    <NavItem href="/" label="Home" />
    <NavItem href="/server" label="Server" />
    <NavItem href="/client" label="Client" />
    <NavItem href="/auth/login" label="Login" />
  </>
);

const NavItem = ({ href, label }:any) => (
  <Link href={href} passHref className={``}>
    {label}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav className={`sticky top-0 transition-all duration-300`}>
      <div className="navigation">
        <div className="flex items-center justify-between h-16 px-4 lg:px-auto container mx-auto container">
          <div className="text-left">
            <Link href="/" className={`transition-all duration-300 text-2xl font-bold`}>
              {siteName}
            </Link>
          </div>
          <div className="flex md:hidden">
            <button type="button" className={`z-40`} onClick={toggleSidebar}>
              <span className="sr-only">Open sidebar</span>
              <GiHamburgerMenu className="inline" size={32} />
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <div className={`ml-10 flex items-baseline space-x-4 gap-8`}>
              <MenuItems />
              <SignOutButton />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'} md:hidden absolute top-16 inset-x-0 p-2 transform transition-all duration-400 ease-in-out z-10`}
      >
        <div className="pt-3 pb-4 px-5 space-y-6 flex flex-col rounded-md bg-zinc-100">
          <MenuItems />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;