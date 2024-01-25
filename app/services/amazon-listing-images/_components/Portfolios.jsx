"use client";

import SectionTitle from "@/appComponents/shared/SectionTitle";
import { generateAltFromFilename } from "@/utils/utils";
import Image from "next/image";
import Slider from "react-slick";

let data = [
	{
		id: 1,
		image: "/images/services/photography/portfolios/bugwomp-pest-repeller-protfolio-images.jpg",
	},
	{
		id: 2,
		image: "/images/services/photography/portfolios/dominatorr-protfolio-image.jpg",
	},
	{
		id: 3,
		image: "/images/services/photography/portfolios/doog-poo-bags--protfolio-image.jpg",
	},
	{
		id: 4,
		image: "/images/services/photography/portfolios/get-well-soon-protfolio-image.jpg",
	},
	{
		id: 5,
		image: "/images/services/photography/portfolios/tamec-listing-images-design.jpg",
	},
	{
		id: 6,
		image: "/images/services/photography/portfolios/virtusale-urinal-screnr-protfolio-image.jpg",
	},
];

let sliderSettings = {
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 3000,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

export default function Portfolios() {
	return (
		<section className="section pt-20">
			<div className="container">
				<SectionTitle
					title="Our Transformed Clients Design Portfolio"
					colored="Design Portfolio"
				/>
				<Slider className="portfolios-slider" {...sliderSettings}>
					{data.map((item) => (
						<div key={item.id} className="portfolio-item rounded-lg overflow-hidden">
							<Image
								src={item.image}
								alt={generateAltFromFilename(item.image)}
								height={518}
								width={672}
							/>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
