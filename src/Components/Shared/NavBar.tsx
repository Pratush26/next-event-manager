import Link from "next/link";

export default function NavBar() {
    return (
        <header className="bg-stone-900">
            <nav className="flex items-center justify-between gap-4 w-11/12 mx-auto my-4 text-sm font-medium">
                <div>
                    <h3 className="text-lg font-semibold">Next Event Manager</h3>
                </div>
                <div>
                    <Link href='/'>Home</Link>
                </div>
                <div>
                    <Link href='/login'>Login</Link>
                </div>
            </nav>
        </header>
    )
}