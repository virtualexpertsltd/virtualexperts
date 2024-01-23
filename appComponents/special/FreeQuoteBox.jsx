import freeQuoteHeaderShape from "@/appAssets/images/shapes/free-quote-box-header.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Logo from "../layout/Logo";

export default function FreeQuoteBox() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		const res = await fetch("https://virtualexperts.net/api/leads/post", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		});

		if (res.status === 200) {
			const msgTemplate = {
				service_id: "service_rluy6hk",
				template_id: "template_4errde5",
				user_id: "seFfSonT2U8bIGJ8J",
				template_params: data,
			};

			fetch("https://api.emailjs.com/api/v1.0/email/send", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(msgTemplate),
			})
				.then((res) => res.json())
				.then((data) => {});
			reset();
			return swal("Thank You", "Lead Place Successfully.", "success");
		}
	};

	return (
		<div className="free-quote-box">
			<header className="header flex flex-col justify-center items-center">
				<div className="image relative rounded-lg overflow-hidden w-full h-20">
					<Image src={freeQuoteHeaderShape} alt="shape" fill />
				</div>
				<div className="inline-flex justify-center items-center w-[72px] h-[72px] p-3 !pt-5 -mt-9 relative z-10 rounded-full border-2 border-primary bg-white">
					<Logo mobileLogo />
				</div>
			</header>
			<form onSubmit={handleSubmit(onSubmit)} className="body mt-5 space-y-4">
				<div className="single-field">
					<input
						type="text"
						placeholder="Your Name/Brand Name"
						{...register("name", { required: true })}
					/>
					{errors.name && <p className="text-sm mt-1 text-red-500">Name Required</p>}
				</div>
				<div className="single-field">
					<input
						type="text"
						placeholder="Your Email"
						{...register("email", { required: true })}
					/>
					{errors.email && <p className="text-sm mt-1 text-red-500">Email Required</p>}
				</div>
				<div className="single-field">
					<input
						type="text"
						placeholder="Product Link/ASIN"
						{...register("productlink", { required: true })}
					/>
					{errors.productlink && (
						<p className="text-sm mt-1 text-red-500">Product Link/ASIN Required</p>
					)}
				</div>
				<div className="single-field">
					<textarea
						cols="30"
						rows="5"
						placeholder="Description"
						{...register("description", { required: true })}
					></textarea>
					{errors.description && (
						<p className="text-sm mt-1 text-red-500">Description Required</p>
					)}
				</div>
				<button title="Submit" type="submit" className="btn">
					<span>Submit</span>
				</button>
			</form>
		</div>
	);
}
