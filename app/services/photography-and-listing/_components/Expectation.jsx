import SectionTitle from "@/appComponents/shared/SectionTitle";

let data = [
	{
		id: 1,
		content: "Enhanced Main/Hero Image",
	},
	{
		id: 2,
		content: "Infographic or Featured Images",
	},
	{
		id: 3,
		content: "Lifestyle/Action Image",
	},
	{
		id: 4,
		content: "Comparison Chart with other products",
	},
	{
		id: 5,
		content: "Image of Product Dimensions",
	},
	{
		id: 6,
		content: "Adding Shadows and Reflections",
	},
	{
		id: 7,
		content: "Lighting and Color Adjustments",
	},
	{
		id: 8,
		content: "Image editing and retouching",
	},
];

export default function Expectation() {
	return (
		<section className="section pb-20">
			<div className="container">
				<SectionTitle
					title="What You Can Expect from Our Experienced Design Team?"
					colored="Experienced Design Team?"
				/>
				<div className="grid grid-cols-12 items-center gap-8">
					<div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
						<ul className="space-y-3 *:text-2xl *:font-medium *:text-dark">
							{data.map((item) => (
								<li key={item.id}>{item.content}</li>
							))}
						</ul>
						<button className="btn mt-7">
							<span>Order Now</span>
						</button>
					</div>
					<div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
						<div className="max-w-[450px] lg:max-w-none mx-auto lg:mx-0 aspect-video rounded-2xl overflow-hidden">
							<iframe
								src="https://www.youtube.com/embed/ChAeF2io9ck?si=722cFdGtNp_1_8ep"
								title="YouTube video player"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								className="h-full w-full border-none outline-none"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
