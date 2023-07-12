import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { VscSignOut } from 'react-icons/vsc';

const SignOutButton = () => {
  const { data: session } = useSession();

  if (!session) {
    return null; // Render nothing if user is not signed in
  }

  return (
    <Link href="#" onClick={() => signOut()}>
      <VscSignOut className="inline" /> Signout
    </Link>
  );
};

export default SignOutButton;
