import logo from "@/appAssets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="inline-block align-middle">
			<Image
				src={logo}
				alt="virtualexperts.net"
				height={50}
				width={278}
				className="object-contain object-center max-h-full max-w-full align-middle h-[31px] md:h-[50px] w-auto"
				quality={100}
			/>
		</Link>
	);
}
