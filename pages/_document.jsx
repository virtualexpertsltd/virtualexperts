import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,100;1,200;1,300;1,400;1,600&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				></link>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
					defer
				></script>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `
{
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Virtual Experts",
	"legalName": "Virtual Experts Limited",
	"alternateName": "Virtual Experts | Amazon FBA Consultant & Amazon Marketing Services",
	"description": "Virtual Experts Limited is a well-known USA-based Amazon FBA/Kindle Consultant & Amazon Marketing Services provider. Virtual Experts Limited was founded in 2014 by Richard Sid, an experienced Amazon seller who saw a need for specialized amazon services. Richard Sid, helped hundreds of online sellers navigate the complex world of Amazon FBA with Consultancy & Marketing Services. Our team of experts has a combined experience of over 9 years in Amazon FBA Marketing, and we've helped our clients achieve millions of dollars in sales.",
	"logo": "https://virtualexperts.net/Logo.svg",
	"image": "https://virtualexperts.net/Logo.svg",
	"url": "https://virtualexperts.net",
	"sameAs": [
		"https://www.facebook.com/virtualexpertsltd",
		"https://twitter.com/withExpert",
		"https://www.youtube.com/channel/UC2LkG4rJDLMPcU_2QJys1XA",
		"https://telegram.me/virtualexperts"
	],
	"email": "help@virtualexperts.net",
	"telephone": "+1 347-871-3917",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "9070 179 PL Jamaica AV, New York, NY, United States, New York",
		"addressLocality": "New York",
		"addressRegion": "NY",
		"postalCode": "11432",
		"addressCountry": "US"
	},
	"contactPoint": {
		"@type": "ContactPoint",
		"contactType": "Customer Support",
		"telephone": "+1 347-871-3917"
	},
	"foundingDate": "2014"
}
					`,
					}}
				></script>
			</Head>
			<body>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-MMLGVSGZ"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				<Main />
				<NextScript />
				<Script
					id="gtag-manager-custom"
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MMLGVSGZ');`,
					}}
				/>
			</body>
		</Html>
	);
}
