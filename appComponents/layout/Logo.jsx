import logo from "@/appAssets/images/logo.png";
import smallLogo from "@/appAssets/images/mobile-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ mobileLogo }) {
	return (
		<Link href="/" className="inline-block align-middle">
			{mobileLogo ? (
				<Image
					src={smallLogo}
					alt="virtualexperts.net"
					height={50}
					width={56}
					className="object-contain object-center max-h-full max-w-full align-middle"
				/>
			) : (
				<Image
					src={logo}
					alt="virtualexperts.net"
					height={50}
					width={278}
					className="object-contain object-center max-h-full max-w-full align-middle"
				/>
			)}
		</Link>
	);
}
