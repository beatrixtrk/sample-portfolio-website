import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/jd_logo.svg' width={80} height={73} priority alt='' />
        </Link>
    )
}

export default Logo;