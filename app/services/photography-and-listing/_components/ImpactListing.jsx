import SectionTitle from "@/appComponents/shared/SectionTitle";

export default function ImpactListing() {
	return (
		<section className="section py-20">
			<div className="container">
				<SectionTitle
					title="The Impact of Professional Amazon Product Listing Images"
					underlined="Professional"
					colored="Amazon Product Listing Images"
				/>
				<div className="grid grid-cols-2 gap-14">
					<div className="col-span-1 bg-white bg-opacity-40 rounded-3xl px-8 py-4 shadow-lg space-y-4">
						<h3 className="text-primary font-medium">Enhance First Impression</h3>
						<p className="text-xl text-dark">
							EnhancProfessional Amazon product images significantly increase
							visibility in search results, catching the eye of potential customers.
							This heightened visibility often leads to improved click-through rates,
							increasing the chances of turning browsing users into engaged customers.
							ed Visibility and Click-Through Rates:
						</p>
					</div>
					<div className="col-span-1 bg-white bg-opacity-40 rounded-3xl px-8 py-4 shadow-lg space-y-4">
						<h3 className="text-primary font-medium">Adherence Amazon Guidelines</h3>
						<p className="text-xl text-dark">
							Professional product images go beyond mere representation; they tell a
							visual story. This storytelling aspect not only creates a connection
							with the audience but also reinforces your brand identity, making your
							products memorable in the crowded marketplace.
						</p>
					</div>
					<div className="col-span-1 bg-white bg-opacity-40 rounded-3xl px-8 py-4 shadow-lg space-y-4">
						<h3 className="text-primary font-medium">Higher Conversion Rate</h3>
						<p className="text-xl text-dark">
							Engaging and well-crafted images not only attract attention but also
							contribute to higher conversion rates. When customers can clearly see
							the value and features of your product, they are more likely to make a
							purchase decision.
						</p>
					</div>
					<div className="col-span-1 bg-white bg-opacity-40 rounded-3xl px-8 py-4 shadow-lg space-y-4">
						<h3 className="text-primary font-medium">Improve Brand Credibility</h3>
						<p className="text-xl text-dark">
							Clear and accurate images leave little room for misunderstandings about
							the product. This clarity leads to reduced return rates, as customers
							receive what they expect. Improved customer satisfaction, in turn,
							contributes to positive reviews and repeat business.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
