import amazonListing from "@/appAssets/images/service/photography/amazon-listing-images.svg";
import Image from "next/image";
import Link from "next/link";

export default function PageHeader() {
	return (
		<div className="page-header bg-grey bg-opacity-50">
			<div className="container">
				<div className="flex flex-wrap lg:flex-nowrap lg:flex-row-reverse justify-between items-center gap-x-8 gap-y-10 py-8">
					<div className="image max-w-[230px] lg:max-w-full mx-auto lg:mx-0">
						<Image src={amazonListing} alt="amazon listing" />
					</div>
					<div className="text-content max-w-[690px] space-y-4">
						<h2 className="font-bold">
							Worried About Amazon Listing Images Design?{" "}
							<span className="styled-underline">Maximize</span> Your Profits with{" "}
							<span className="text-primary">
								Professional Listing Images Design.
							</span>
						</h2>
						<h4 className="font-medium">
							Stand Out from the Crowd and Maximize Your Profits with Our Proven
							Method for Designing Amazon Listing Images that Turn Clicks into Sales.
						</h4>
						<div className="flex flex-wrap items-center gap-x-3 gap-y-3">
							<Link href="/" className="btn">
								<span>Get a Free Quote</span>
							</Link>
							<p className="text-dark max-w-[350px] lg:max-w-[400px]">
								Over Ten years of experience in Amazon FBA Business. Helped 5000+
								Amazon FBA Sellers to achieve success.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
