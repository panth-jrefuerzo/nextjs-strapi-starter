import React from 'react'
import { useSession } from 'next-auth/react';
import Image from 'next/image';

function UserNavLink() {
    const { data: session } = useSession();
    const userFName = session?.user.name;
    const userPhoto = session?.user.picture;

    if(!session){
        return null
    }
    
  return (
    <div className={`flex px-4 border-b-[1px] border-slate-500 pb-4 mb-4`}>
    <Image
        className="rounded-full inline transition-all duration-400 ease-in-out mr-3"
        src={userPhoto as string}
        width={60}
        height={60}
        alt="Photo"
    />
    <div className="">
        <span className="text-xl block font-semibold">{userFName}</span>
        <span className="text-sm block font-semibold">{session?.user.email}</span>
    </div>
</div>
  )
}

export default UserNavLink