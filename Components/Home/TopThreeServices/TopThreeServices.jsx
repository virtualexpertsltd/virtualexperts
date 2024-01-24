import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import styles from "../../../styles/TopServices.module.css";

const TopThreeServices = ({ topServicesData, headerInfoTopServicesData }) => {
	return (
		<div className="container py-5">
			<div className="py-5">
				<h2 className={`${styles.title1} fs-24 roboto-font-family fw-400`}>
					{headerInfoTopServicesData[0]?.title}
				</h2>
				<div className="row">
					{topServicesData?.map((service, index) => {
						return (
							<div
								key={service._id}
								className={`${styles.serviceCard} col-12 col-md-4 mx-auto mt-md-5`}
							>
								{service.title === "Photography & Listing Images Design" ? (
									<Link
										href={"/services/photography-and-listing"}
										className="d-flex justify-content-center mx-auto"
									>
										<Image
											src={service.imgURL}
											title="Service"
											alt="Service"
											height={150}
											width={150}
										/>
									</Link>
								) : (
									<div className="d-flex justify-content-center mx-auto">
										<Image
											src={service.imgURL}
											title="Service"
											alt="Service"
											height={150}
											width={150}
										/>
									</div>
								)}

								<div className="boxShadow p-2 rounded">
									<h3 className="text-center mt-5 font-family-roboto fs-18 fs-600 lh-28">
										{service.title === "Photography & Listing Images Design" ? (
											<Link
												href="/services/photography-and-listing"
												className=""
											>
												{service.title}
											</Link>
										) : (
											service.title
										)}
									</h3>
									<p
										className={`${styles.description} text-justify fs-14 lh-24 mt-3 text-color`}
									>
										{service.description}
									</p>
									<Link
										href="/order"
										className="text-center order-color d-block buttonLink px-3 fs-14"
									>
										Order Now
										<RiArrowRightSLine />
									</Link>
								</div>
							</div>
						);
					})}
				</div>
				<div className="d-flex justify-content-center mt-4">
					<Link href="/services" className="button slide_right bg-white py-1 px-3">
						<h4 className="d-inline font-family-roboto fs-14">
							View all Amazon Services
						</h4>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopThreeServices;
