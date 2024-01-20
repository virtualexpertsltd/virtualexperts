import { Roboto } from "next/font/google";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// ignore-organize-import
import "@/styles/appGlobals.css";

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
				<div className="site-wrapper">
					{/* <Navbar /> */}
					{children}
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
