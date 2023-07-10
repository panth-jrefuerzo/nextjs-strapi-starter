import { useRouter } from 'next/navigation';

export default function clientAuthChecker(session: any, status: any) {
  const router = useRouter();

  async function fetchUserStatus() {
    try {
      const response = await fetch(`${process.env.STRAPI_PUBLIC_API_URL}/api/users/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${session?.user.jwt}`,
        },
      });
      const data = await response.json();

      // Check if the response indicates an error
      if (response.status === 401 || response.status === 403) {
        console.error('Error:', data.error.message);
      } else if (data.banstatus === true) {
        // Redirect the user to the "/banned" page if banned
        console.log("banned");
        router.push("/banned");
      } 
    } catch (error) {
      console.error('Failed to fetch user status:', error);
    }
  }

  // Call fetchUserStatus if the user is authenticated and a JWT token is present in the session
  if (status === 'authenticated' && session?.user.jwt) {
    fetchUserStatus();
  }
}
