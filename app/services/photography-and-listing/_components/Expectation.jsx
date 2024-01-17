import React from "react";

export default function Expectation() {
	return (
		<section>
			<div className="container">
				<h2>
					What You Can Expect from Our
					<span className="bg-orange-400 text-white">Experienced Design Team?</span>
				</h2>
				<div className="grid grid-cols-2 gap-8">
					<div className="col-span-1">
						<ul className="block">
							<li>Enhanced Main/Hero Image</li>
							<li>Infographic/Feature Image</li>
							<li>Lifestyle/Action Image</li>
							<li>Comparison Chart with other products</li>
							<li>Product Dimensions Image</li>
							<li>Adding Shadows and Reflections</li>
							<li>Lighting and Color Adjustments</li>
							<li>Image editing and retouching</li>
						</ul>
						<button className="btn btn-dark rounded-lg">Order Now</button>
					</div>
					<div className="col-span-1"></div>
				</div>
			</div>
		</section>
	);
}
