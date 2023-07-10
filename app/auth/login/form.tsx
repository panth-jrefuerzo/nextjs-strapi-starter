"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { LiaDiscord,LiaGithub } from "react-icons/lia";

export const LoginForm = () => {
  // Get the search parameters from the URL
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  // CSS class for the buttons
  const buttonStyle =
    "flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mb-4";

  // Function to handle sign-in for different providers
  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl });
  };

  return (
    <div className="flex gap-3 mt-6">
      {/* Button for signing in with Google */}
      <button className={buttonStyle} onClick={() => handleSignIn("google")}>
        <FcGoogle size={36} className="mr-4" />
        Continue with Google
      </button>

      {/* Button for signing in with Discord */}
      <button className={buttonStyle} onClick={() => handleSignIn("discord")}>
        <LiaDiscord size={36} className="mr-4" />
        Continue with Discord
      </button>

    </div>
  );
};