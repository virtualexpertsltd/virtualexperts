import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";

import bannerImg from "../../../Assets/Images/home/amazon-fba-consultant-virtual-experts.webp";
import cardHeaderBg from "../../../Assets/Images/others/Group 157.svg";
import cardHeaderImg from "../../../Assets/Images/others/v-logo.svg";

import swal from "sweetalert";
import SideLink from "./SideLink/SideLink";
// import ReCAPTCHA from "react-google-recaptcha";

const Banner = ({ bannerData }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	// const [verfied, setVerifed] = useState(false);
	const [txt, setTxt] = useState("");

	const onSubmit = async (data) => {
		const Info = {
			name: data.name,
			email: data.email,
			productlink: data.productlink,
			description: txt,
		};

		const res = await fetch("https://virtualexperts.net/api/leads/post", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(Info),
		});

		if (res.status === 200) {
			const msgTemplate = {
				service_id: "service_rluy6hk",
				template_id: "template_4errde5",
				user_id: "seFfSonT2U8bIGJ8J",
				template_params: Info,
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

	const onInputChange = (e) => {
		const { value } = e.target;

		const re = /^[A-Za-z. ]+(?:[ .-][A-Za-z]+)*$/;
		if (value === "" || re.test(value)) {
			setTxt(value);
		}
	};

	return (
		<div className="">
			<div style={{ backgroundColor: "#f5f8fe" + "em" }} className="">
				<div className="container py-5">
					<div className="row d-flex align-items-center">
						<div className="col-md-6 order-2 order-md-1">
							<h1 className="fs-36 banner-lh-52 font-family-roboto">
								{bannerData?.title}
							</h1>
							<p className="fs-15 lh-30 text-justify">{bannerData?.description}</p>

							<button
								className="button px-4 py-1 slide_right"
								data-bs-toggle="modal"
								data-bs-target="#popup"
							>
								<span className="d-inline fs-14 font-family-roboto font-semibold">
									Get Free Quote!
								</span>
							</button>
						</div>
						<div className="col-md-6 order-1 order-md-2 pb-5 pb-md-0">
							<Image
								src={bannerImg}
								alt="amazon-fba-consultant-virtual-experts"
								title="amazon-fba-consultant-virtual-experts"
								className="banner-img img-fluid"
								sizes="(max-width: 768px) 80vw, 636px"
								// placeholder="blur"
								quality={75}
								priority
							/>
						</div>
					</div>
				</div>
			</div>

			{/* social link goes here */}
			<SideLink />

			{/* PopUp Modal */}
			<div
				className="modal fade"
				id="popup"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="position-relative">
								<div className="w-full overflow-hidden mx-auto rounded">
									<Image src={cardHeaderBg} alt="header" />
								</div>
								<div className="cardHeaderImg">
									<Image
										src={cardHeaderImg}
										className="mt-2 p-2"
										alt="cardImage"
									/>
								</div>
								<div className="btn-popup cursor-pointer">
									<AiOutlineClose
										size={32}
										className="text-dark bg-white rounded"
										data-bs-dismiss="modal"
										aria-label="Close"
									/>
								</div>
							</div>

							<div className="card-body mx-auto bg-white borderRadius">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="my-3">
										<input
											type="text"
											className="form-control"
											name="name"
											placeholder="Your Name/Brand Name"
											{...register("name", { required: true })}
										/>
										{errors.name && (
											<p className="fs-14 text-danger">Name Required</p>
										)}
									</div>

									<div className="my-3">
										<input
											type="text"
											className="form-control"
											placeholder="Your Email"
											name="email"
											{...register("email", { required: true })}
										/>
										{errors.email && (
											<p className="fs-14 text-danger">Email Required</p>
										)}
									</div>

									<div className="my-3">
										<input
											type="text"
											name="productlink"
											placeholder="Product Link/ASIN"
											{...register("productlink", { required: true })}
											className="form-control mt-3"
										/>
										{errors.productLinkOrASIN && (
											<p className="fs-14 text-danger">
												Product Link/ASIN Required
											</p>
										)}
									</div>

									<div className="my-3">
										<textarea
											rows="5"
											col="3"
											placeholder="Description"
											name="description"
											{...register("description", { required: true })}
											onChange={onInputChange}
											className="form-control my-4"
										/>
										{errors.description && (
											<p className="fs-14 text-danger">
												Description Required
											</p>
										)}
									</div>
									{/* <ReCAPTCHA
                    sitekey="6LfcpGQkAAAAACUIxoFBVl6ImItvJnSCJQtLxHJi"
                    onChange={onChange}
                  /> */}
									<button
										className={`cursor-pointer card-button mt-2 d-block`}
										type="submit"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
