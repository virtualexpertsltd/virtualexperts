import jwt_decode from "jwt-decode";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { createContext, useEffect, useState } from "react";
// organize-imports-disable-next-line
// organize-imports-disable-next-line
import "slick-carousel/slick/slick.css";
// organize-imports-disable-next-line
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";
import "../styles/globals.css";
import Script from "next/script";

nProgress.configure(
	{ showSpinner: true },
	{
		template: "<div role='bar' className='bg-info'>...</div>",
	}
);

export const UserContext = createContext();
export default function App({ Component, pageProps }) {
	const router = useRouter();
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

	if (Component.getLayout) {
		return Component.getLayout(
			<>
				{/* <Head> */}
				{/* Google Analytics Script Add */}
				{/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-M0L3PN9HQL"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-M0L3PN9HQL");`,
            }}
          /> */}
				{/* facebook Analytics Script Add */}
				{/* <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '878234442794429');
              fbq('track', 'PageView');`,
            }}
          /> */}
				{/* <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=878234442794429&ev=PageView&noscript=1"
            />
          </noscript> */}
				{/* </Head> */}
				<UserContext.Provider value={[signedUser, setSignedUser]}>
					<Component {...pageProps} />
				</UserContext.Provider>
			</>
		);
	}
	return (
		<>
			<Head>
        { /* eslint-disable-next-line @next/next/next-script-for-ga */ }
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MMLGVSGZ');`
        }}></script>
				{/* facebook Analytics Script Add */}
				{/* <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '878234442794429');
              fbq('track', 'PageView');`,
          }}
        /> */}
				{/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=878234442794429&ev=PageView&noscript=1"
          />
        </noscript> */}
			</Head>
			<Navbar />
			<UserContext.Provider value={[signedUser, setSignedUser]}>
				<Component {...pageProps} />
			</UserContext.Provider>
			<div
				className={
					router.pathname === "/richard" ||
					router.pathname === "/richard/service" ||
					router.pathname === "/richard/about" ||
					router.pathname === "/richard/orders" ||
					router.pathname === "/richard/invoice" ||
					router.pathname === "/richard/meta"
						? "d-none"
						: ""
				}
			>
				{/* <div
          onClick={handelClickTop}
          className="scrol-icon me-5 position-fixed end-0 top-80 cursor-pointer"
        >
          <FaArrowAltCircleUp size={40} />
        </div> */}
			</div>
			<Footer />
		</>
	);
}
