import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { PiSignOut } from 'react-icons/pi';

const SignOutButton = () => {
  const { data: session } = useSession();

  if (!session) {
    return null; // Render nothing if user is not signed in
  }

  return (
    <Link className="mr-2" href="#" onClick={() => signOut()}>
      <PiSignOut size={20} className="inline mr-4" /> Signout
    </Link>
    
  );
};

export default SignOutButton;
