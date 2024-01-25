import Image from "next/image";
import Link from "next/link";
import amazonLogo from "../../../../appAssets/images/service/photography/shapes/amazon-icon.svg";
import virtualExpertLogo from "../../../../appAssets/images/service/photography/shapes/virtual-experts-logo-gray.svg";

export default function CallToAction() {
	return (
		<div className="container">
			<div className="cta relative bg-grey rounded-lg py-10 text-center overflow-hidden">
				<div className="shape absolute left-[2%] top-auto bottom-[6%]">
					<Image src={amazonLogo} alt="amazonLogo" />
				</div>
				<div className="shape absolute left-auto right-[3%] top-[10%]">
					<Image src={virtualExpertLogo} alt="virtual expert logo" />
				</div>
				<div className="max-w-[800px] mx-auto space-y-5 relative z-10">
					<h3 className="font-medium">
						Our professional team has helped{" "}
						<span className="text-primary">5,000+</span> Amazon sellers to gain
						potential sales
					</h3>
					<Link
						href="https://calendly.com/virtualexpertsltd/amazon-fba-consultancy"
						target="_blank"
						className="btn"
					>
						<span>Schedule a Meeting</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
