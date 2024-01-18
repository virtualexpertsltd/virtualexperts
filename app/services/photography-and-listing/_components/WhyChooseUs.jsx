import whyChooseImage from "@/appAssets/images/service/photography/amazon-product-images-design.svg";
import SectionTitle from "@/appComponents/shared/SectionTitle";
import Image from "next/image";

export default function WhyChooseUs() {
	return (
		<section className="section bg-grey bg-opacity-50 py-20">
			<div className="container">
				<SectionTitle
					title="Why Choose us to Avoid Design Errors"
					colored="Avoid Design Errors"
				/>
				<div className="grid grid-cols-12 items-center gap-8">
					<div className="col-span-5">
						<Image src={whyChooseImage} alt="why choose us" height={368} width={366} />
					</div>
					<div className="col-span-7">
						<ul className="space-y-3 border-l border-border ml-2 *:pl-8 *:relative *:text-2xl *:font-medium">
							<li className="before:content before:absolute before:size-4 before:bg-primary before:rounded-full before:-left-2  before:top-2">
								Well written product features
							</li>
							<li className="before:content before:absolute before:size-4 before:bg-primary before:rounded-full before:-left-2  before:top-2">
								Premium Amazon Product Infographic
							</li>
							<li className="before:content before:absolute before:size-4 before:bg-primary before:rounded-full before:-left-2  before:top-2">
								Beat your competitors and stands out{" "}
							</li>
							<li className="before:content before:absolute before:size-4 before:bg-primary before:rounded-full before:-left-2  before:top-2">
								High Converting Amazon Listing images
							</li>
							<li className="before:content before:absolute before:size-4 before:bg-primary before:rounded-full before:-left-2  before:top-2">
								Follow Amazon Image Requirements and Guidelines{" "}
							</li>
						</ul>
					</div>
				</div>
				<div className="flex justify-between flex-wrap gap-5 mt-20">
					<div className="item w-[200px] rounded-lg bg-white shadow-custom px-3 py-4 text-center">
						<Image
							src="/images/services/photography/icons/icon-designer.svg"
							alt="designer"
							height={55}
							width={55}
							className="object-contain object-center inline-block"
						/>
						<h4 className="font-medium text-light mt-3 text-center mx-auto leading-tight">
							Skilled Designers
						</h4>
					</div>
					<div className="item w-[200px] rounded-lg bg-white shadow-custom px-3 py-4 text-center">
						<Image
							src="/images/services/photography/icons/icon-solutions.svg"
							alt="designer"
							height={55}
							width={55}
							className="object-contain object-center inline-block"
						/>
						<h4 className="font-medium text-light mt-3 text-center mx-auto leading-tight">
							Customized Solutions
						</h4>
					</div>
					<div className="item w-[200px] rounded-lg bg-white shadow-custom px-3 py-4 text-center">
						<Image
							src="/images/services/photography/icons/icon-designer.svg"
							alt="designer"
							height={55}
							width={55}
							className="object-contain object-center inline-block"
						/>
						<h4 className="font-medium text-light mt-3 text-center mx-auto leading-tight">
							Efficient Workflow
						</h4>
					</div>
					<div className="item w-[200px] rounded-lg bg-white shadow-custom px-3 py-4 text-center">
						<Image
							src="/images/services/photography/icons/icon-designer.svg"
							alt="designer"
							height={55}
							width={55}
							className="object-contain object-center inline-block"
						/>
						<h4 className="font-medium text-light mt-3 text-center mx-auto leading-tight">
							Premium Design
						</h4>
					</div>
					<div className="item w-[200px] rounded-lg bg-white shadow-custom px-3 py-4 text-center">
						<Image
							src="/images/services/photography/icons/icon-designer.svg"
							alt="designer"
							height={55}
							width={55}
							className="object-contain object-center inline-block"
						/>
						<h4 className="font-medium text-light mt-3 text-center mx-auto leading-tight">
							24/7 Support
						</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
