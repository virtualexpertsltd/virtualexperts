import SectionTitle from "@/appComponents/shared/SectionTitle";

let data = [
	{
		id: 1,
		title: "Enhance First Impression:",
		desc: "The listing images on Amazon can significantly influence the primary perception of a consumer. Prospective buyers are naturally inclined towards listings featuring visually appealing content. When your product listing images are visually engaging and provide valuable information, shoppers are more likely to click on your listing.",
	},
	{
		id: 2,
		title: "Adhere to Amazon Guidelines:",
		desc: "Amazon listing image requirements and guidelines are critical for achieving success on Amazon.com. You must ensure that your images adhere to Amazon's dimensions, quality, and subject matter specifications to prevent potential complications and maintain a solid market presence.",
	},
	{
		id: 3,
		title: "Improve Brand Credibility:",
		desc: "A premium and professional product listing image design can enhance your brand's credibility on Amazon. When a customer sees well-planned and professionally designed product listing images or infographics, they will have more trust in your brand, leading to higher sales and business growth.",
	},
	{
		id: 4,
		title: "Achieve a Higher Conversion Rate:",
		desc: "Convincing Amazon listing images or infographics design influences the conversion rate of your Amazon product listings. Customers are more likely to act and make buying decisions when the product features and benefits are demonstrated through illustrations. It also helps to acquire higher revenue from conversions.",
	},
	{
		id: 5,
		title: "Build Credibility and Trust:",
		desc: "Trust is a vital ingredient of a successful e-commerce business. Your Amazon product listing images play an important role in building customer trust. A clear and accurate image design can reduce uncertainty and hesitation in customers' minds. It also encourages customers to gain more confidence in your product.",
	},
	{
		id: 6,
		title: "Increase Customer Engagement:",
		desc: "A professionally designed Amazon product listing image can effectively demonstrate the product's functionality and help to create a strong connection between customers and your product. If a product's images can acquire their attention, they will likely look deeper into your listing and buy it.",
	},
];

export default function ImpactListing() {
	return (
		<section className="section py-20">
			<div className="container">
				<SectionTitle
					title="The Impact of Professional Amazon Product Listing Images"
					underlined="Professional"
					colored="Amazon Product Listing Images"
					underlineHideOnMobile
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-14">
					{data.map((item) => (
						<div
							key={item.id}
							className="col-span-1 bg-white bg-opacity-40 rounded-3xl px-8 py-4 shadow-lg space-y-4"
						>
							<h3 className="text-primary font-medium">{item.title}</h3>
							<p className="text-xl text-dark">{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
