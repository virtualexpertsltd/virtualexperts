"use client";

import SectionTitle from "@/appComponents/shared/SectionTitle";
import Image from "next/image";
import Slider from "react-slick";

let sliderSettings = {
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 4000,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: true,
};

export default function Portfolios() {
	return (
		<section className="section bg-white pt-20">
			<div className="container">
				<SectionTitle
					title="Transformative Designs for Amazon Success"
					colored="Amazon Success"
				/>
				<Slider className="portfolios-slider" {...sliderSettings}>
					<div className="portfolio-item">
						<Image
							src="/images/services/photography/portfolios/bugwomp-pest-repeller-protfolio-images.jpg"
							alt="portfolio"
							height={518}
							width={672}
						/>
					</div>
					<div className="portfolio-item">
						<Image
							src="/images/services/photography/portfolios/dominatorr-protfolio-image.jpg"
							alt="portfolio"
							height={518}
							width={672}
						/>
					</div>
					<div className="portfolio-item">
						<Image
							src="/images/services/photography/portfolios/doog-poo-bags--protfolio-image.jpg"
							alt="portfolio"
							height={518}
							width={672}
						/>
					</div>
					<div className="portfolio-item">
						<Image
							src="/images/services/photography/portfolios/get-well-soon-protfolio-image.jpg"
							alt="portfolio"
							height={518}
							width={672}
						/>
					</div>
					<div className="portfolio-item">
						<Image
							src="/images/services/photography/portfolios/tamec-listing-images-design.jpg"
							alt="portfolio"
							height={518}
							width={672}
						/>
					</div>
					<div className="portfolio-item">
						<Image
							src="/images/services/photography/portfolios/virtusale-urinal-screnr-protfolio-image.jpg"
							alt="portfolio"
							height={518}
							width={672}
						/>
					</div>
					<div className="portfolio-item">
						<Image
							src="/images/services/photography/portfolios/wrap-organizenr-protfolio-image.jpg"
							alt="portfolio"
							height={518}
							width={672}
						/>
					</div>
				</Slider>
			</div>
		</section>
	);
}
