"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose, MdComputer, MdDashboard, MdHomeFilled, MdLogin } from 'react-icons/md';
import { PiUserBold } from 'react-icons/pi';

import ProfileDropDown from './ProfileDropDown';
import UserNavLink from './UserNavLink';
import SignOutButton from '@/app/auth/signout';

import { useSession } from 'next-auth/react';
import ThemeButton from '../Theme/ThemeButton';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
}

const Navbar = () => {
  const { data: session,status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const navStyle = `${isMobileMenuOpen ? 'absolute opacity-0 translate-x-[-100%]' : 'sticky top-0'} transition-all duration-300 dark:text-white backdrop-filter backdrop-blur-lg bg-opacity-50 border-b-[1px] border-slate-500 border-opacity-50 py-4 px-4`;
  const menuStyle = `flex items-baseline gap-4 font-medium dark:text-slate-300  ${isMobileMenuOpen ? '' : ''}`;
  const mobileMenuStyle = `${isMobileMenuOpen ? 'opacity-100 translate-x-0 bg-slate-800 w-auto sticky top-0' : 'opacity-0 translate-x-[-100%] '} text-slate-300 font-medium pb-8 left-0 top-0 absolute transform transition-all duration-400 ease-in-out z-0`;
  const MenuItems = () => (
    <>
      <NavItem href="/" label="Home" icon={MdHomeFilled} />
      <NavItem href="/server" label="Server" icon={MdDashboard} />
      <NavItem href="/client" label="Client" icon={MdComputer} />
      {status === "unauthenticated" ? <NavItem href="/auth/login" label="Login" icon={MdLogin} /> : null}
    </>
  );
  const NavItem = ({ href, label, icon: Icon }:any) => (
    <div>
      <Link href={href} passHref>
        <Icon className={`inline  ${isMobileMenuOpen ? 'mr-4' : ''}`} size={20} /> <span className='md:hidden lg:inline-block'>{label}</span>
      </Link>
    </div>
  );
  {/** Use Effect to close on outside click */}
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);
  
  return (
    <>
      <nav className={navStyle}>
        <div className="flex items-center justify-between h-12 container mx-auto container sm:px-4 lg:px-[8rem]">
          <div className="text-left pr-6 border-r-[1px] border-gray-700">
            <Link href="/" className={`transition-all duration-300 text-4xl font-bold `}>
              <Image className='my-4 dark:invert' src="/next.svg" width={150} height={80} alt="logo" />
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
              <ThemeButton />

              {/** Pass session data component */}
              <ProfileDropDown user={session?.user} status={status}/>
            </div>
          </div>
        </div>
      </nav>
      {/** Start Mobile Nav */}
      <div ref={mobileMenuRef} className={mobileMenuStyle}>
        <div className="px-5 pt-2 space-y-6 flex-block">
          <div className="flex absolute right-4 top-6">
            <button type="button" className={`z-40`} onClick={toggleMobileMenu}>
              <span className="sr-only">Open sidebar</span>
              <MdClose className="inline" size={32} />
            </button>
          </div>
          <div className="border-b-[1px] border-slate-500">
            <Link href="/" className={`transition-all duration-300 text-4xl font-bold border-b-[1px] border-slate-500`}>
              <Image className='my-4 invert mx-auto' src="/next.svg" width={150} height={80} alt="logo" />
            </Link>
          </div>
          {/** Pass session data component */}
          <UserNavLink user={session?.user}/>
          <div className=''>
            <Link className="mr-2" href={`/profiles/`}>
              <PiUserBold size={20} className="inline mr-4" /> My Account
            </Link>
          </div>
          <MenuItems />
          <div>
            <SignOutButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;