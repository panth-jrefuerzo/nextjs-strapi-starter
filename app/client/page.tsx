'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'
import clientAuthChecker from '../lib/strapi/clientauthchecker'

export default function ClientPage() {
  const { data: session, status  } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    }
  })

  clientAuthChecker(session, status);

  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} pagetype={"Client"} />
    </section>
  )
}
