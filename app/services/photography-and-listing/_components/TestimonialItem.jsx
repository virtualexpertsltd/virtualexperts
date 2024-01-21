import Image from "next/image";

export default function TestimonialItem({ data }) {
	let { thumb, quote, authorName, designation } = data;
	return (
		<div className="testimonial bg-white text-center px-5 py-7 rounded-lg overflow-hidden">
			<div className="max-w-[550px] mx-auto">
				<div className="thumbnail size-20 border-4 border-primary rounded-full inline-block mb-2 overflow-hidden">
					<Image
						src={thumb}
						alt={authorName}
						height={70}
						width={70}
						className="object-cover object-center w-full h-full"
						loading="eager"
					/>
				</div>
				<p className="block before:content-['“'] after:content-['”'] text-xl">{quote}</p>
				<div className="author mt-5">
					<h4 className="font-bold">{authorName}</h4>
					<h5>{designation}</h5>
				</div>
			</div>
		</div>
	);
}
