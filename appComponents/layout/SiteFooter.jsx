import BTC from "@/Assets/Images/others/Bitcoin.svg";
import PayPal from "@/Assets/Images/others/PayPal.svg";
import Payoneer from "@/Assets/Images/others/Payoneer.svg";
import skrill from "@/Assets/Images/others/Skrill.svg";
import footerLogo from "@/appAssets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaSkype, FaTelegram, FaYoutube } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

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
		<footer className="footer font-poppins bg-grey relative z-40">
			<div className="container">
				<div className="footer-top grid grid-cols-1 gap-y-7 md:grid-cols-3 py-16 px-4 md:px-12">
					<div className="col-span-1 widget">
						<Image
							src={footerLogo}
							alt="virtualexperts.net"
							height={60}
							width={334}
							className="object-contain object-center max-h-full max-w-full align-middle"
							quality={100}
						/>
						<p className="text-sm leading-[1.625rem] mt-2">
							Virtual Experts Limited is the best Amazon FBA Consultant & Amazon
							Marketing Agency with 10 years of experience, who can reduce your
							workload & grow your brands.
						</p>
					</div>
					<div className="col-span-1 widget w-full px-12">
						<h6 className="widget-title text-center md:text-left font-poppins text-base font-medium relative pb-3 mb-3 before:absolute before:left-1/2 before:-ml-4 lg:before:left-0 lg:before:ml-0 before:top-auto before:bottom-0 before:content-[''] before:h-0.5 before:w-8 before:bg-primary">
							Get in Touch
						</h6>
						<ul className="space-y-7">
							<li className="flex justify-start items-center text-sm gap-x-2 whitespace-nowrap">
								<MdEmail className="text-xl basis-[30px] grow-0 shrink-0 text-primary transition-all transform scale-100 hover:scale-[1.4]" />
								<Link
									href="mailto:help@virtualexperts.net"
									target="_blank"
									className="transition-all hover:text-primary"
								>
									<span className="font-medium">Email :</span>{" "}
									help@virtualexperts.net
								</Link>
							</li>
							<li className="flex justify-start items-center text-sm gap-x-2 whitespace-nowrap">
								<FaSkype className="text-xl basis-[30px] grow-0 shrink-0 text-primary transition-all transform scale-100 hover:scale-[1.4]" />
								<Link
									href="https://join.skype.com/invite/NMl9NExzR6b3"
									target="_blank"
									className="transition-all hover:text-primary"
								>
									<span className="font-medium">Skype :</span> VirtualExpertsLTD
								</Link>
							</li>
							<li className="flex justify-start items-center text-sm gap-x-2 whitespace-nowrap">
								<IoLogoWhatsapp className="text-xl basis-[30px] grow-0 shrink-0 text-primary transition-all transform scale-100 hover:scale-[1.4]" />
								<Link
									href="https://wa.me/15099035120"
									target="_blank"
									className="transition-all hover:text-primary"
								>
									<span className="font-medium">Whatsapp :</span> +15099035120
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-span-1 column w-full space-y-5">
						<div className="widget text-center lg:text-left">
							<h6 className="widget-title text-center md:text-left font-poppins text-base font-medium relative pb-3 mb-3 before:absolute before:left-1/2 before:-ml-4 lg:before:left-0 lg:before:ml-0 before:top-auto before:bottom-0 before:content-[''] before:h-0.5 before:w-8 before:bg-primary">
								Let&apos;s Get Social
							</h6>
							<ul className="flex justify-center lg:justify-start items-center flex-wrap gap-x-4">
								{socialLinks.facebook ? (
									<li>
										<Link
											href={socialLinks.facebook}
											target="_blank"
											rel="noreferrer"
											className="group text-xl"
											aria-label="Facebook"
										>
											<FaFacebook className="text-primary transition-all transform scale-100 group-hover:scale-[1.4]" />
										</Link>
									</li>
								) : null}
								{socialLinks.instagram ? (
									<li>
										<Link
											href={socialLinks.instagram}
											target="_blank"
											rel="noreferrer"
											className="group text-xl"
											aria-label="Instagram"
										>
											<AiFillInstagram className="text-primary transition-all transform scale-100 group-hover:scale-[1.4]" />
										</Link>
									</li>
								) : null}
								{socialLinks.telegram ? (
									<li>
										<Link
											href={socialLinks.telegram}
											target="_blank"
											rel="noreferrer"
											className="group text-xl"
											aria-label="Telegram"
										>
											<FaTelegram className="text-primary transition-all transform scale-100 group-hover:scale-[1.4]" />
										</Link>
									</li>
								) : null}
								{socialLinks.twitter ? (
									<li>
										<Link
											href={socialLinks.twitter}
											target="_blank"
											rel="noreferrer"
											className="group text-xl"
											aria-label="Twitter"
										>
											<ImTwitter className="text-primary transition-all transform scale-100 group-hover:scale-[1.4]" />
										</Link>
									</li>
								) : null}
								{socialLinks.youTube ? (
									<li>
										<Link
											href={socialLinks.youTube}
											target="_blank"
											rel="noreferrer"
											className="group text-xl"
											aria-label="Youtube"
										>
											<FaYoutube className="text-primary transition-all transform scale-100 group-hover:scale-[1.4]" />
										</Link>
									</li>
								) : null}
							</ul>
						</div>
						<div className="widget text-center lg:text-left">
							<h6 className="widget-title text-center md:text-left font-poppins text-base font-medium relative pb-3 mb-3 before:absolute before:left-1/2 before:-ml-4 lg:before:left-0 lg:before:ml-0 before:top-auto before:bottom-0 before:content-[''] before:h-0.5 before:w-8 before:bg-primary">
								Payment method
							</h6>
							<div className="payment-methods flex justify-center lg:justify-start items-center gap-x-4 gap-y-2">
								<div className="">
									<Image src={PayPal} alt="paypal" />
								</div>
								<div className="">
									<Image src={Payoneer} alt="Payoneer" />
								</div>
								<div className="">
									<Image src={skrill} alt="skrill" />
								</div>
								<div className="">
									<Image src={BTC} alt="BTC" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom border-t border-border border-opacity-30 py-5">
					<p className="text-sm text-center pt-4">
						© 2014-{new Date().getFullYear()} Virtual Experts Limited | All Right
						Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
