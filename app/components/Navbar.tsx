import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="logo text-2xl">
                        MySite
                    </div>
                    <div className="menubar pt-2">
                        <ul className="flex justify-evenly gap-4">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/api/auth/signin">Sign In</Link></li>
                            <li><Link href="/api/auth/signout">Sign Out</Link></li>
                            <li><Link href="/server">Server</Link></li>
                            <li><Link href="/client">Client</Link></li>
                            <li><Link href="/extra">Extra</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
