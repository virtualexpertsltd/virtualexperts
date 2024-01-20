"use client";

import SectionTitle from "@/appComponents/shared/SectionTitle";
import Image from "next/image";
import Slider from "react-slick";

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
			breakpoint: 480,
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
					<div className="singlelogo relative h-14">
						<Image
							src="/images/services/photography/logos/hfwythr.png"
							alt="hf-wy-thr"
							fill
							className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
						/>
					</div>
					<div className="singlelogo relative h-14">
						<Image
							src="/images/services/photography/logos/bugwomp.png"
							alt="bugwomp"
							fill
							className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
						/>
					</div>
					<div className="singlelogo relative h-14">
						<Image
							src="/images/services/photography/logos/t3r.png"
							alt="t3r"
							fill
							className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
						/>
					</div>
					<div className="singlelogo relative h-14">
						<Image
							src="/images/services/photography/logos/virtusale.png"
							alt="virtusale"
							fill
							className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
						/>
					</div>
					<div className="singlelogo relative h-14">
						<Image
							src="/images/services/photography/logos/hfwythr.png"
							alt="hf-wy-thr"
							fill
							className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
						/>
					</div>
					<div className="singlelogo relative h-14">
						<Image
							src="/images/services/photography/logos/bugwomp.png"
							alt="bugwomp"
							fill
							className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
						/>
					</div>
					<div className="singlelogo relative h-14">
						<Image
							src="/images/services/photography/logos/t3r.png"
							alt="t3r"
							fill
							className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
						/>
					</div>
					<div className="singlelogo relative h-14">
						<Image
							src="/images/services/photography/logos/virtusale.png"
							alt="virtusale"
							fill
							className="object-contain object-center max-w-full transition-all filter grayscale hover:grayscale-0"
						/>
					</div>
				</Slider>
			</div>
		</section>
	);
}
