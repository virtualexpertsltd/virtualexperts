"use client";

import SectionTitle from "@/appComponents/shared/SectionTitle";
import Image from "next/image";
import Slider from "react-slick";

let sliderSettings = {
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	adaptiveHeight: true,
};

export default function Testimonials() {
	return (
		<section className="section bg-grey bg-opacity-50 py-20 relative z-10">
			<div className="container">
				<SectionTitle
					title="Voices of Success: Hear What Our Clients Have to Say"
					colored="Voices of Success: "
				/>
				<div className="testimonials max-w-[820px] border border-border mx-auto">
					<Slider {...sliderSettings}>
						<div className="testimonial bg-white text-center px-7 py-7">
							<div className="max-w-[550px] mx-auto">
								<div className="thumbnail size-20 border-4 border-primary rounded-full inline-block mb-2 overflow-hidden">
									<Image
										src="/images/services/photography/authors/author-1.png"
										alt="author"
										height={70}
										width={70}
										className="object-cover object-center w-full h-full"
									/>
								</div>
								<p className="block before:content-['“'] after:content-['”'] text-xl">
									Its been around 6 years since we are working with Virtual
									Experts. We have used their Amazon Listing Image Design and
									Ranking booster services a lot. Their services are too good for
									Amazon FBA Business.
								</p>
								<div className="author mt-5">
									<h4 className="font-bold">Abdurahman Adam Ravat</h4>
									<h5>Founder & CEO, Amcrest Technologies</h5>
								</div>
							</div>
						</div>
						<div className="testimonial bg-white text-center px-7 py-7">
							<div className="max-w-[550px] mx-auto">
								<div className="thumbnail size-20 border-4 border-primary rounded-full inline-block mb-2 overflow-hidden">
									<Image
										src="/images/services/photography/authors/author-1.png"
										alt="author"
										height={70}
										width={70}
										className="object-cover object-center w-full h-full"
									/>
								</div>
								<p className="block before:content-['“'] after:content-['”'] text-xl">
									Its been around 6 years since we are working with Virtual
									Experts. We have used their Amazon Listing Image Design and
									Ranking booster services a lot. Their services are too good for
									Amazon FBA Business.
								</p>
								<div className="author mt-5">
									<h4 className="font-bold">Abdurahman Adam Ravat</h4>
									<h5>Founder & CEO, Amcrest Technologies</h5>
								</div>
							</div>
						</div>
						<div className="testimonial bg-white text-center px-7 py-7">
							<div className="max-w-[550px] mx-auto">
								<div className="thumbnail size-20 border-4 border-primary rounded-full inline-block mb-2 overflow-hidden">
									<Image
										src="/images/services/photography/authors/author-1.png"
										alt="author"
										height={70}
										width={70}
										className="object-cover object-center w-full h-full"
									/>
								</div>
								<p className="block before:content-['“'] after:content-['”'] text-xl">
									Its been around 6 years since we are working with Virtual
									Experts. We have used their Amazon Listing Image Design and
									Ranking booster services a lot. Their services are too good for
									Amazon FBA Business.
								</p>
								<div className="author mt-5">
									<h4 className="font-bold">Abdurahman Adam Ravat</h4>
									<h5>Founder & CEO, Amcrest Technologies</h5>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
}
