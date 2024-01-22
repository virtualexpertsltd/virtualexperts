import SiteFooter from "@/appComponents/layout/SiteFooter";
import SiteHeader from "@/appComponents/layout/SiteHeader";
import { Roboto } from "next/font/google";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
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
	weight: ["300", "400", "500", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--font-roboto",
});

const RootLayout = ({ children }) => {
	return (
		<html lang="en" className={`${roboto.variable} font-sans`}>
			<body>
				<div className="site-wrapper mt-[82px]">
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
