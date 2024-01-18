import SectionTitle from "@/appComponents/shared/SectionTitle";

export default function Pricing() {
	return (
		<section className="section py-20 relative z-10">
			<div className="container">
				<SectionTitle
					title="Amazon Listing Images Design Service"
					colored="Design Service"
				/>
				<div className="grid grid-cols-3 gap-8">
					<div className="col-span-1 space-y-4 text-center bg-grey bg-opacity-50 shadow-custom py-8 px-4 flex flex-col items-center">
						<h3 className="inline-block px-1 py-1 min-w-[170px] uppercase font-bold border border-primary text-center">
							Starter
						</h3>
						<h5 className="text-center text-primary font-medium uppercase">
							3x Amazon Listing Images
						</h5>
						<div className="flex-grow">
							<ul className="styled-list *:text-lg text-left inline-block">
								<li>1x Main Hero Image</li>
								<li>1x Premium Infographic</li>
								<li>1x Lifestyle Picture</li>
								<li>Include Source Files</li>
								<li>Commercial Use</li>
								<li>Delivery Time: 3 Days</li>
							</ul>
						</div>
						<div className="">
							<button className="btn">Order Now</button>
						</div>
					</div>
					<div className="col-span-1 space-y-4 text-center bg-grey bg-opacity-50 shadow-custom py-8 px-4 flex flex-col items-center">
						<h3 className="inline-block px-1 py-1 min-w-[170px] uppercase font-bold border border-primary text-center">
							Pro
						</h3>
						<h5 className="text-center text-primary font-medium uppercase">
							x Amazon Listing Images
						</h5>
						<div className="flex-grow">
							<ul className="styled-list *:text-lg text-left inline-block">
								<li>1x Main Hero Image</li>
								<li>4x Premium Infographic</li>
								<li>2x Lifestyle Picture</li>
								<li>Include Source Files</li>
								<li>Commercial Use</li>
								<li>Delivery Time: 5 Days</li>
							</ul>
						</div>
						<div className="">
							<button className="btn">Order Now</button>
						</div>
					</div>
					<div className="col-span-1 space-y-4 text-center bg-grey bg-opacity-50 shadow-custom py-8 px-4 flex flex-col items-center">
						<h3 className="inline-block px-1 py-1 min-w-[170px] uppercase font-bold border border-primary text-center">
							Elite
						</h3>
						<h5 className="text-center text-primary font-medium uppercase">
							3x Amazon Listing Images
						</h5>
						<div className="flex-grow">
							<ul className="styled-list *:text-lg text-left inline-block">
								<li>1x Main Hero Image</li>
								<li>4x Premium Infographic</li>
								<li>2x Lifestyle Picture</li>
								<li>1 ASIN Product Photography</li>
								<li>Include Source Files</li>
								<li>Commercial Use</li>
								<li>Delivery Time: 10 Days</li>
							</ul>
						</div>
						<div className="">
							<button className="btn">Order Now</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
