import Accordions from "@/appComponents/shared/Accordions";
import SectionTitle from "@/appComponents/shared/SectionTitle";

let data = [
	{
		priority: 1,
		question: "What do you need from me to get started?",
		answer: "First, provide product details (including ASIN if available), high-quality images, links to competitor products, preferred design samples, and other information you think fits this project.",
	},
	{
		priority: 2,
		question: "How can I obtain the source files for my design?",
		answer: "You can easily obtain the source files for your design by contacting our design team. We will provide all necessary formats, like AI, PSD, and PDF, ensuring your complete access and control over the design project.",
	},
	{
		priority: 3,
		question: "Do you provide Amazon product photography services?",
		answer: "Yes! We provide Amazon product photography services alongside product listing images and infographic design.",
	},
	{
		priority: 4,
		question: "Are my product photos and listing images safe with you?",
		answer: "Yes! We guarantee the security of your product and listing images. We maintain strict confidentiality and never disclose our client's files or information to third parties.",
	},
	{
		priority: 5,
		question: "Can you design Amazon Enhanced Brand Content (EBC)?",
		answer: "Yes! We can design the best Amazon EBC/A+ content for your product. Our process involves thorough research of your product niche, highlighting its best features and unique selling points to create compelling Amazon EBC content.",
	},
];

export default function Faqs() {
	return (
		<section className="section py-20">
			<div className="container">
				<SectionTitle title="Unlocking the Design Answers: FAQs" colored="FAQs" />
				<div className="accordions max-w-[890px] mx-auto">
					<Accordions data={data} />
				</div>
			</div>
		</section>
	);
}
