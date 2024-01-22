"use client";

import SectionTitle from "@/appComponents/shared/SectionTitle";
import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem";

let data = [
	{
		id: 1,
		thumb: "/images/testimonial-authors/abdurahman-ravat.webp",
		quote: "Its been around 6 years since we started working with Virtual Experts. We have used their Amazon Listing Image Design and Ranking booster services a lot. Their services are too good for Amazon FBA Business.",
		authorName: "Abdurahman Adam Ravat",
		designation: "Founder & CEO, Amcrest Technologies",
	},
	{
		id: 2,
		thumb: "/images/testimonial-authors/alex-latham.webp",
		quote: "Exceptional Amazon listing image design revamp! Our sales have seen a significant boost since we redesigned our product listing images. The images are visually appealing and informative and have improved our overall brand presence. Highly recommended!",
		authorName: "Robert Cameron",
		designation: "Founder, T3-R LLC",
	},
	{
		id: 3,
		thumb: "/images/testimonial-authors/benjamin-arneberg.webp",
		quote: "After struggling with unprofessional Amazon product listing images, we sought help from Virtual Experts for their photography and listing image design services. Their expertise helped us increase our sales by 30%.",
		authorName: "Benjamin Arneberg",
		designation: "CEO of PetHonesty",
	},
	{
		id: 4,
		thumb: "/images/testimonial-authors/ian-page.webp",
		quote: "When launching our first products on Amazon, we were worried and sought the assistance of Virtual Experts. They provided end-to-end services for our Amazon FBA business, including product research, product listing, content writing, EBC content, and more.",
		authorName: "Ian Page",
		designation: "Owner, Bullseye Sellers Ecom Consulting",
	},
	{
		id: 5,
		thumb: "/images/testimonial-authors/alex-latham.webp",
		quote: "We have hired Virtual Experts for Amazon FBA (A-Z) 20 product launches for our clients Aspen Essentials LLC and they built the whole brand from scratch.",
		authorName: "Alex Latham",
		designation: "Owner, Activ8 Automation",
	},
];

let sliderSettings = {
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	adaptiveHeight: true,
	fade: true,
};

export default function Testimonials() {
	return (
		<section className="section bg-grey bg-opacity-50 py-20">
			<div className="container">
				<SectionTitle
					title="Voices of Success: Hear from Our Successful Clients"
					colored="Voices of Success: "
				/>
				<div className="testimonials max-w-[820px] mx-auto">
					<Slider {...sliderSettings} className="testimonials-slider">
						{data.map((item) => (
							<TestimonialItem key={item.id} data={item} />
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
}
