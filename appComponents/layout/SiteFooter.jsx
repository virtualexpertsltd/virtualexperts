import paymentMethods from "@/appAssets/images/payment-methods.png";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { RiWhatsappLine } from "react-icons/ri";
import { SlEnvolope, SlSocialSkype } from "react-icons/sl";
import Logo from "./Logo";

let socialLinks = {
	facebook: "https://www.facebook.com/virtualexpertsltd",
	instagram: "https://www.instagram.com/virtualexpertsltd",
	telegram: "https://telegram.me/virtualexperts",
	twitter: "https://twitter.com/withExpert",
	skype: "https://join.skype.com/invite/NMl9NExzR6b3",
	youTube: "https://www.youtube.com/channel/UC2LkG4rJDLMPcU_2QJys1XA",
};

export default function SiteFooter() {
	return (
		<footer className="footer bg-grey relative z-40">
			<div className="container">
				<div className="footer-top flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-x-10 gap-y-14 py-20">
					<div className="widget text-center lg:text-left max-w-[370px] w-full">
						<Logo />
						<p className="text-sm mt-3">
							Virtual Experts Limited is the best Amazon FBA Consultant & Amazon
							Marketing Agency with 10 years of experience, who can reduce your
							workload & grow your brands.
						</p>
					</div>
					<div className="widget text-center lg:text-left w-full">
						<h6 className="widget-title font-medium relative pb-2 mb-3 before:absolute before:left-1/2 before:-ml-4 lg:before:left-0 lg:before:ml-0 before:top-auto before:bottom-0 before:content-[''] before:h-0.5 before:w-8 before:bg-primary">
							Get in Touch
						</h6>
						<ul className="space-y-3">
							<li className="flex justify-center lg:justify-start items-center gap-x-2 whitespace-nowrap">
								<SlEnvolope className="text-primary" />
								<Link
									href="mailto:help@virtualexperts.net"
									target="_blank"
									className="transition-all hover:text-primary"
								>
									<strong>Email :</strong> help@virtualexperts.net
								</Link>
							</li>
							<li className="flex justify-center lg:justify-start items-center gap-x-2 whitespace-nowrap">
								<SlSocialSkype className="text-primary" />
								<Link
									href="https://join.skype.com/invite/NMl9NExzR6b3"
									target="_blank"
									className="transition-all hover:text-primary"
								>
									<strong>Skype :</strong> VirtualExpertsLTD
								</Link>
							</li>
							<li className="flex justify-center lg:justify-start items-center gap-x-2 whitespace-nowrap">
								<RiWhatsappLine className="text-primary" />
								<Link
									href="https://wa.me/15099035120"
									target="_blank"
									className="transition-all hover:text-primary"
								>
									<strong>Whatsapp :</strong> +15099035120
								</Link>
							</li>
						</ul>
					</div>
					<div className="column w-full space-y-5">
						<div className="widget text-center lg:text-left">
							<h6 className="widget-title font-medium relative pb-2 mb-3 before:absolute before:left-1/2 before:-ml-4 lg:before:left-0 lg:before:ml-0 before:top-auto before:bottom-0 before:content-[''] before:h-0.5 before:w-8 before:bg-primary">
								Let&apos;s Get Social
							</h6>
							<ul className="flex justify-center lg:justify-start flex-wrap gap-3">
								{socialLinks.facebook ? (
									<li>
										<Link
											href={socialLinks.facebook}
											target="_blank"
											rel="noreferrer"
											className="group inline-flex justify-center items-center h-8 w-8 rounded-full border border-primary text-primary transition-all hover:border-black hover:text-black"
										>
											<FiFacebook className="text-primary transition-all group-hover:text-black" />
										</Link>
									</li>
								) : null}
								{socialLinks.instagram ? (
									<li>
										<Link
											href={socialLinks.instagram}
											target="_blank"
											rel="noreferrer"
											className="group inline-flex justify-center items-center h-8 w-8 rounded-full border border-primary text-primary transition-all hover:border-black hover:text-black"
										>
											<FiInstagram className="text-primary transition-all group-hover:text-black" />
										</Link>
									</li>
								) : null}
								{socialLinks.twitter ? (
									<li>
										<Link
											href={socialLinks.twitter}
											target="_blank"
											rel="noreferrer"
											className="group inline-flex justify-center items-center h-8 w-8 rounded-full border border-primary text-primary transition-all hover:border-black hover:text-black"
										>
											<FiTwitter className="text-primary transition-all group-hover:text-black" />
										</Link>
									</li>
								) : null}
								{socialLinks.youTube ? (
									<li>
										<Link
											href={socialLinks.youTube}
											target="_blank"
											rel="noreferrer"
											className="group inline-flex justify-center items-center h-8 w-8 rounded-full border border-primary text-primary transition-all hover:border-black hover:text-black"
										>
											<FiYoutube className="text-primary transition-all group-hover:text-black" />
										</Link>
									</li>
								) : null}
								{socialLinks.telegram ? (
									<li>
										<Link
											href={socialLinks.telegram}
											target="_blank"
											rel="noreferrer"
											className="group inline-flex justify-center items-center h-8 w-8 rounded-full border border-primary text-primary transition-all hover:border-black hover:text-black"
										>
											<LiaTelegram className="text-primary transition-all group-hover:text-black" />
										</Link>
									</li>
								) : null}
							</ul>
						</div>
						<div className="widget text-center lg:text-left">
							<h6 className="widget-title font-medium relative pb-2 mb-3 before:absolute before:left-1/2 before:-ml-4 lg:before:left-0 lg:before:ml-0 before:top-auto before:bottom-0 before:content-[''] before:h-0.5 before:w-8 before:bg-primary">
								Payment method
							</h6>
							<div className="payment-methods flex justify-center lg:justify-start">
								<Image
									src={paymentMethods}
									alt="payment methods"
									height={30}
									width={330}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom border-t border-border border-opacity-30 py-5">
					<p className="text-sm text-center">
						© 2014-{new Date().getFullYear()} Virtual Experts Limited | All Right
						Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
