import whyChooseImage from "@/appAssets/images/service/photography/amazon-product-images-design.svg";
import Image from "next/image";

export default function WhyChooseUs() {
	return (
		<section>
			<div className="container">
				<h2>
					Why Choose us to
					<span className="bg-orange-400 text-white">Avoid Design Errors</span>
				</h2>
				<div className="grid grid-cols-3 gap-8">
					<div className="col-span-1">
						<Image src={whyChooseImage} alt="why choose us" height={368} width={366} />
					</div>
					<div className="col-span-2">
						<ul className="block">
							<li>Well written product features</li>
							<li>Premium Amazon Product Infographic</li>
							<li>Beat your competitors and stands out </li>
							<li>High Converting Amazon Listing images</li>
							<li>Follow Amazon Image Requirements and Guidelines </li>
						</ul>
					</div>
				</div>
				<div className="flex justify-between gap-x-5">
					<div className="item w-[232px] rounded-3xl shadow-lg px-3 py-3">
						<h4>Skilled Designers</h4>
					</div>
					<div className="item w-[232px] rounded-3xl shadow-lg px-3 py-3">
						<h4>Skilled Designers</h4>
					</div>
					<div className="item w-[232px] rounded-3xl shadow-lg px-3 py-3">
						<h4>Skilled Designers</h4>
					</div>
					<div className="item w-[232px] rounded-3xl shadow-lg px-3 py-3">
						<h4>Skilled Designers</h4>
					</div>
					<div className="item w-[232px] rounded-3xl shadow-lg px-3 py-3">
						<h4>Skilled Designers</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
