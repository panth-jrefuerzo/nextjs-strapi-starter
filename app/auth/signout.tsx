import { signOut, useSession } from 'next-auth/react';

const SignOutButton = () => {
  const { data: session } = useSession();

  if (!session) {
    return null; // Render nothing if user is not signed in
  }

  return (
    <button onClick={() => signOut()} className="font-semibold p-1 px-3 ">
      Sign Out
    </button>
  );
};

export default SignOutButton;
