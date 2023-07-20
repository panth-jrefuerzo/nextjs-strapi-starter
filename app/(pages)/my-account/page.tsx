import React from 'react'
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import ProfileCard from './components/ProfileCard'

async function MyAccount() {

    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/my-account')
    }

  return (
    <div>
        <ProfileCard user={session.user}/>
    </div>
  )
}

export default MyAccount