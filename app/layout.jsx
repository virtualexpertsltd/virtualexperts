import SiteFooter from "@/appComponents/layout/SiteFooter";
import SiteHeader from "@/appComponents/layout/SiteHeader";
import { Poppins, Roboto } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// ignore-organize-import
import "@/styles/appGlobals.css";

export const metadata = {
	title: {
		template: "Virtual Experts | %s",
		default: "Virtual Experts",
	},
	description:
		"Virtual Experts is the best Amazon FBA Consultant who will reduce your workload and ensure your business growth. Virtual Experts provides Amazon Marketing Services including Amazon SEO Services with Listing Optimization Services & Amazon PPC",
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
