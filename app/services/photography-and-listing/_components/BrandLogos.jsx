"use client";

import SectionTitle from "@/appComponents/shared/SectionTitle";
import { generateAltFromFilename } from "@/utils/utils";
import Image from "next/image";
import Slider from "react-slick";

let data = [
	{
		id: 1,
		image: "/images/services/photography/logos/hfwythr.png",
	},
	{
		id: 2,
		image: "/images/services/photography/logos/bugwomp.png",
	},
	{
		id: 3,
		image: "/images/services/photography/logos/t3r.png",
	},
	{
		id: 4,
		image: "/images/services/photography/logos/virtusale.png",
	},
	{
		id: 5,
		image: "/images/services/photography/logos/hfwythr.png",
	},
	{
		id: 6,
		image: "/images/services/photography/logos/bugwomp.png",
	},
	{
		id: 7,
		image: "/images/services/photography/logos/t3r.png",
	},
	{
		id: 8,
		image: "/images/services/photography/logos/virtusale.png",
	},
];

let sliderSettings = {
	infinite: true,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 4000,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 380,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

export default function BrandLogos() {
	return (
		<section className="section pt-20">
			<div className="container">
				<SectionTitle title="Prominent Brands we have worked with" underlined="Brands" />
				<Slider className="brandlogos" {...sliderSettings}>
					{data.map((item) => (
						<div key={item.id} className="singlelogo relative h-14">
							<Image
								src={item.image}
								alt={`${generateAltFromFilename(item.image)} logo`}
								fill
								className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
							/>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
