"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSolidChevronDown, BiSolidUser } from 'react-icons/bi';
import { useSession } from 'next-auth/react';
import SignOutButton from '../auth/signout';

const siteName = 'Jahz';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  const { data: session } = useSession();
  console.log(session?.user)

  const navStyle = 'sticky top-0 transition-all duration-300 dark:text-white dark:bg-slate-900 border-b-[0.1rem] border-gray-700 border-opcity-5	';
  const menuStyle = 'ml-10 flex items-baseline space-x-4 gap-4';
  const mobileMenuStyle = `${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'} md:hidden absolute top-16 inset-x-0 p-2 transform transition-all duration-400 ease-in-out z-10`;
  const dropDownStyle = `${isDropDownOpen ? 'opacity-100' : 'opacity-0'} bg-slate-800 transition-all duration-400 ease-in-out rounded-lg dropdown-menu absolute text-gray-300 p-2`;
  const dropDownItemStyle=`hover:bg-gray-300 px-2 py-1 block whitespace-no-wrap hover:rounded-md`
  
  const userName = session?.user.name;
  const profilePhoto = session?.user.picture;
  return (
    <nav className={navStyle}>
      <div className="flex items-center justify-between h-16 px-4 lg:px-auto container mx-auto container">
        <div className="text-left">
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
          <div className={menuStyle}>
            <MenuItems />

            {session ?  
            <div className="dropdown inline-block relative">
              <button className="font-semibold py-2 px-4 inline-flex items-center" onClick={toggleDropDown}>
               <span className="mr-1"><Image className='inline rounded-full mr-2' src={profilePhoto as string} width={30} height={30} alt="Photo"/>{userName}</span>
                <BiSolidChevronDown className="inline" />
              </button>
              <ul className={dropDownStyle}>
                <li className={dropDownItemStyle}><Link className='' href={`/profiles/${userName}`}><BiSolidUser className='inline'/> View Profile</Link></li>
                <li className={dropDownItemStyle}><SignOutButton /></li>
              </ul>
            </div> : ""
            }

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
