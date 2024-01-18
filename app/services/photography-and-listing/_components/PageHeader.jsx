import amazonListing from "@/appAssets/images/service/photography/amazon-listing-images.svg";
import Image from "next/image";
import Link from "next/link";

export default function PageHeader() {
	return (
		<div className="page-header bg-grey bg-opacity-50 relative z-10">
			<div className="container">
				<div className="flex justify-between items-center gap-x-8 gap-y-10 py-8">
					<div className="text-content max-w-[690px] space-y-4">
						<h2 className="font-bold">
							Worried About Amazon Listing Images Design?{" "}
							<span className="styled-underline">Maximize</span> Your Amazon Sales
							with <span className="text-primary">Expert Listing Images Design.</span>
						</h2>
						<h4 className="font-medium">
							Stand out, Sell more with our proven approach to design high converting
							Amazon Listing Images.
						</h4>
						<div className="flex flex-wrap items-center gap-x-3 gap-y-3">
							<Link href="/" className="btn btn-black">
								Get a Free Quote
							</Link>
							<p className="text-dark max-w-[400px]">
								Over 10 year of experience in Amazon FBA Business. Helped more then
								1000 of Amazon FBA Sellers{" "}
							</p>
						</div>
					</div>
					<div className="image">
						<Image src={amazonListing} alt="amazon listing" />
					</div>
				</div>
			</div>
		</div>
	);
}
