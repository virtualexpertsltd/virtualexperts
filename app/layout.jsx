import "@/styles/appGlobals.css";

const RootLayout = ({ children }) => {
	return (
		<div className="site-wrapper">
			{/* <Navbar /> */}
			{children}
			{/* <Footer /> */}
		</div>
	);
};

export default RootLayout;
