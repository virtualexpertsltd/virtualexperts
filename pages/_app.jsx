import jwt_decode from "jwt-decode";
import Router from "next/router";
import nProgress from "nprogress";
import React, { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";
import "../styles/globals.css";

nProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export const UserContext = createContext();

const CommonContent = ({ children }) => {
	const [signedUser, setSignedUser] = useState({});

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
