"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();
    const isLogin = false;
    const handleNavigation = () => {
        if (isLogin) {
            router.push('/about/address')
        } else {
            router.push('/')
        }
        // router.push('/about/address')
    }
    return (
        <div >
            <h2 className="text-3xl">About Page</h2>
            <Link href='/about/address'>address</Link>
            <br />
            <button onClick={handleNavigation} type="button" className="btn btn-info">Address</button>
        </div>
    )
}
