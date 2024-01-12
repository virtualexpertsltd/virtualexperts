import Head from "next/head";
import React from "react";

import AmazonFBAConsultant from "../Components/AmazonFBA/AmazonFBAConsultant";
import ScheduleMeeting from "../Components/ScheduleMeeting/ScheduleMeeting";

export async function getStaticProps() {
	const urls = [
		"http://localhost:5000/amazonfba",
		"http://localhost:5000/fbadesc1",
		"http://localhost:5000/whyshouldhire",
		"http://localhost:5000/fbaservice",
		"http://localhost:5000/metaFBA",
	];

	const [fbaData, fbad1Data, whyshouldhireData, fbaServiceData, metaFBA] = await Promise.all(
		urls.map((url) => fetch(url).then((res) => res.json()))
	);

	return {
		props: {
			fbaData: fbaData[0],
			fbad1Data: fbad1Data[0],
			whyshouldhireData,
			fbaServiceData,
			metaFBA: metaFBA[0],
		},
		revalidate: 60 * 5,
	};
}

const AmazonFBA = ({ fbaData, fbad1Data, whyshouldhireData, fbaServiceData, metaFBA }) => {
	// const [fbaData, setFbaData] = useState();
	// const [fbad1Data, setfbad1Data] = useState();
	// const [whyshouldhireData, setwhyshouldhireData] = useState();
	// const [fbaServiceData, setfbaServiceData] = useState();
	// const [metaFBA, setmetaFBA] = useState();

	// useEffect(() => {
	//   (() => {

	//     fetch("https://virtualexperts.net/api/amazonfba").then(firstRes => firstRes.json()).then(res => {
	//       setFbaData(res[0])
	//     }).catch(err => console.log(err))

	//     fetch("https://virtualexperts.net/api/fbadesc1").then(firstRes => firstRes.json()).then(res => {
	//       setfbad1Data(res[0])
	//     }).catch(err => console.log(err))

	//     fetch("https://virtualexperts.net/api/whyshouldhire").then(firstRes => firstRes.json()).then(res => {
	//       setwhyshouldhireData(res)
	//     }).catch(err => console.log(err))

	//     fetch("https://virtualexperts.net/api/fbaservice").then(firstRes => firstRes.json()).then(res => {
	//       setfbaServiceData(res)
	//     }).catch(err => console.log(err))

	//     fetch("https://virtualexperts.net/api/metaFBA").then(firstRes => firstRes.json()).then(res => {
	//       setmetaFBA(res[0])
	//     }).catch(err => console.log(err))

	//   })()
	// }, [])

	return (
		<>
			<Head>
				<title>
					{metaFBA?.title
						? `Virtual Experts |  ${metaFBA?.title}`
						: "virtual Experts | Amazon FBA Consultant"}
				</title>
				<meta
					name="description"
					content={metaFBA?.description ? ` ${metaFBA?.description}` : "virtual Experts"}
				/>
				<meta
					name="keyword"
					content={
						metaFBA?.keywords
							? ` ${metaFBA?.keywords}`
							: "amazon fba consultant, amazon seo services, amazon seo consultant, amazon seo agency"
					}
				/>
				<link
					rel="canonical"
					href="https://virtualexperts.net/amazon-fba-consultant"
					key="canonical"
				/>
			</Head>

			<AmazonFBAConsultant
				fbaData={fbaData}
				fbad1Data={fbad1Data}
				whyshouldhireData={whyshouldhireData}
				fbaServiceData={fbaServiceData}
			/>
			{/* ===================================== */}
			<ScheduleMeeting />
		</>
	);
};

export default AmazonFBA;
