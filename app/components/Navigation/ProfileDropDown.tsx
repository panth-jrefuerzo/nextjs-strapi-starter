import React, { useState, useEffect, useRef } from 'react';
import SignOutButton from '../../auth/signout';
import {PiSignIn, PiUserBold} from 'react-icons/pi';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import UserNavLink from './UserNavLink';


function ProfileDropDown() {

    const { data: session } = useSession();
    const userFName = session?.user.name;
    const userPhoto = session?.user.picture;

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

    const dropDownStyle = `${isDropDownOpen ? 'opacity-100 ' : 'opacity-0 translate-y-[-300px]'} 
    bg-slate-800 
    transition-all 
    duration-400 
    ease-in-out 
    rounded-2xl 
    dropdown-menu 
    text-gray-300 
    absolute 
    z-10 
    w-screen 
    max-w-[260px] 
    sm:right-[1rem] 
    mt-[1rem]
   `;

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropDownOpen(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const dropdownRef = useRef<HTMLDivElement>(null);


    return (
        <>
            {session ? (
                <div className="relative" ref={dropdownRef}>
                    <button className="font-semibold py-2 px-4 inline-flex items-center" onClick={toggleDropDown}>
                        <span className="group">
                            <Image
                                className="border-4 inset-0 border-opacity-0 border-slate-500 group-hover:border-opacity-50 rounded-full inline transition-all duration-400 ease-in-out"
                                src={userPhoto as string}
                                width={40}
                                height={40}
                                alt="Photo"
                            />
                        </span>
                    </button>
                    <div className={`${dropDownStyle} mr-2 px-2 py-4`}>
                        <UserNavLink />
                        <div className='text-neutral-500 dark:text-neutral-300 px-4 space-y-4'>
                            <div className=''>
                                <Link className="mr-2" href={`/profiles/${userFName}`}>
                                    <PiUserBold size={24} className="inline mr-4" /> My Account
                                </Link>
                            </div>
                            <div className=''>
                                <SignOutButton />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Link href={`/auth/login`}>
                    <PiSignIn size={24} className="inline mr-1"/> Login
                </Link>
            )}
        </>
    )
}

export default ProfileDropDown