import whyChooseImage from "@/appAssets/images/service/photography/amazon-product-images-design.svg";
import SectionTitle from "@/appComponents/shared/SectionTitle";
import Image from "next/image";

let data = [
	{
		id: 1,
		content: "Well-written Product Features",
	},
	{
		id: 2,
		content: "Top-Tier Amazon Product Infographics",
	},
	{
		id: 3,
		content: "Defeat your Rivals and Maximize Profits",
	},
	{
		id: 4,
		content: "Transform Your Amazon Listing Images That Drive Sales",
	},
	{
		id: 5,
		content: "Compliance with Amazon's Image Requirements and Guidelines",
	},
];

let data2 = [
	{
		id: 1,
		icon: "/images/services/photography/icons/icon-designer.svg",
		name: "Skilled Designers",
	},
	{
		id: 2,
		icon: "/images/services/photography/icons/icon-solutions.svg",
		name: "Customized Solutions",
	},
	{
		id: 3,
		icon: "/images/services/photography/icons/icon-workflow.svg",
		name: "Efficient Workflow",
	},
	{
		id: 4,
		icon: "/images/services/photography/icons/icon-premium-design.svg",
		name: "Premium Design",
	},
	{
		id: 5,
		icon: "/images/services/photography/icons/icon-support.svg",
		name: "24/7 Support",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="section bg-grey bg-opacity-50 py-20">
			<div className="container">
				<SectionTitle
					title="Why Choose Us to Avoid Design Errors?"
					colored="Why Choose Us"
					underlined="Errors"
					underlineColor="red"
				/>
				<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
					<div className="col-span-1 lg:col-span-5">
						<Image
							src={whyChooseImage}
							alt="why choose us"
							height={368}
							width={366}
							className="mx-auto lg:mx-0"
						/>
					</div>
					<div className="col-span-1 lg:col-span-7">
						<ul className="space-y-3 border-l border-border ml-2.5 *:pl-8 *:relative *:text-2xl *:font-medium">
							{data.map((item) => (
								<li
									key={item.id}
									className="before:content before:absolute before:size-4 before:bg-primary before:rounded-full before:-left-2 before:-ml-px  before:top-2"
								>
									{item.content}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex justify-center xl:justify-between flex-wrap gap-5 mt-14 lg:mt-20">
					{data2.map((item) => (
						<div
							key={item.id}
							className="item w-[175px] lg:w-[200px] rounded-lg bg-white shadow-custom px-3 py-4 text-center"
						>
							<Image
								src={item.icon}
								alt={`${item.name} icon`}
								height={55}
								width={55}
								className="object-contain object-center inline-block h-[55px] w-[55px] align-middle"
							/>
							<h4 className="font-medium text-dark mt-3 text-center mx-auto leading-tight">
								{item.name}
							</h4>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
