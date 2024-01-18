"use client";

import Accordions from "@/appComponents/shared/Accordions";
import SectionTitle from "@/appComponents/shared/SectionTitle";

export default function Faqs() {
	return (
		<section className="section py-20 relative z-10">
			<div className="container">
				<SectionTitle
					title="Frequently Asked Questions about Our Design Service"
					colored="Frequently Asked Questions"
				/>
				<div className="accordions max-w-[890px] mx-auto">
					<Accordions
						data={[
							{
								priority: 1,
								question: "What do you need from me to get started?",
								answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis harum soluta repudiandae odit voluptate provident nisi fuga maxime vitae expedita velit eaque, necessitatibus ullam tempora sequi. Accusantium, eius. Alias.",
							},
							{
								priority: 2,
								question: "I need source files. How do I get those?",
								answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat similique aperiam excepturi culpa rem dolorum? Expedita, perspiciatis?",
							},
							{
								priority: 3,
								question: "Do you provide Amazon product photography service?",
								answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a asperiores provident perspiciatis eius optio accusantium quisquam maiores cum libero inventore voluptates.",
							},
							{
								priority: 4,
								question: "Can you help me with my Amazon's product description?",
								answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat officia itaque eveniet ullam odit quod sed dolorum impedit nulla. Officia laborum veniam doloribus? Qui necessitatibus harum nemo fugit dicta!",
							},
							{
								priority: 5,
								question: "Are my product photos and listing images safe with you?",
								answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum obcaecati architecto quaerat magnam distinctio ea. Minus accusantium eum vel magni voluptates. Aperiam minus beatae expedita aliquam nemo ipsam nesciunt.",
							},
						]}
					/>
				</div>
			</div>
		</section>
	);
}
