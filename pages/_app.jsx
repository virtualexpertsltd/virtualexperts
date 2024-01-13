import jwt_decode from "jwt-decode";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { createContext, useEffect, useState } from "react";
// organize-imports-disable-next-line
// organize-imports-disable-next-line
import "slick-carousel/slick/slick.css";
// organize-imports-disable-next-line
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";
import "../styles/globals.css";

nProgress.configure(
	{ showSpinner: true },
	{
		template: "<div role='bar' className='bg-info'>...</div>",
	}
);

export const UserContext = createContext();

const CommonContent = ({ children }) => {
	const [signedUser, setSignedUser] = useState({});

	//showing n-progress
	Router.events.on("routeChangeStart", (url) => {
		nProgress.start();
	});
	Router.events.on("routeChangeComplete", (url) => {
		nProgress.done();
	});
	Router.events.on("routeChangeError", () => nProgress.done());

	useEffect(() => {
		const info = JSON.parse(window.localStorage.getItem("info"));
		try {
			const decoded = jwt_decode(info);
			setSignedUser(decoded);
		} catch (err) {}
	}, []);

	return (
		<React.Fragment>
			<UserContext.Provider value={[signedUser, setSignedUser]}>
				{children}
			</UserContext.Provider>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</React.Fragment>
	);
};

export default function App({ Component, pageProps }) {
	return (
		<CommonContent>
			{Component.getLayout ? (
				Component.getLayout(<Component {...pageProps} />)
			) : (
				<React.Fragment>
					<Navbar />
					<Component {...pageProps} />
					<Footer />
				</React.Fragment>
			)}
		</CommonContent>
	);
}
