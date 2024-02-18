import SiteFooter from "@/appComponents/layout/SiteFooter";
import SiteHeader from "@/appComponents/layout/SiteHeader";
import { Poppins, Roboto } from "next/font/google";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// ignore-organize-import
import "@/styles/appGlobals.css";

export const metadata = {
	title: {
		template: "%s | VirtualExperts",
		default: "VirtualExperts",
	},
	description:
		"Stand Out from the Crowd and Maximize Your Profits with Virtual Experts Proven Method for Designing Amazon Listing Images that Turn Clicks into Sales.",
	keyword:
		"amazon fba consultant, amazon marketing service, amazon seo consultant, amazon seo agency, amazon listing optimisation, amazon listing images, amazon, ppc agency, amazon ppc services\n",
};

const roboto = Roboto({
	weight: ["400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--font-roboto",
});

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--font-poppins",
});

const RootLayout = ({ children }) => {
	return (
		<html lang="en" className={`${roboto.variable} ${poppins.variable} font-sans`}>
			<body>
				<div className="site-wrapper mt-[60px] md:mt-[80px]">
					<SiteHeader />
					{children}
					<SiteFooter />
				</div>
				<div id="modal-root"></div>
			</body>
		</html>
	);
};

export default RootLayout;
