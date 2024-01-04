import Head from "next/head";
import React from "react";

import ScheduleMeeting from "../Components/ScheduleMeeting/ScheduleMeeting";
import ServicesComponents from "../Components/Services/Services";

export async function getServerSideProps() {
	const urls = [
		"http://localhost:5000/servicesCard",
		"http://localhost:5000/whatWeDo",
		"http://localhost:5000/serviceCardHeader",
		"http://localhost:5000/metaService",
	];

	const [servicesCardData, whatWeDo, serviceCardHeader, metaService] = await Promise.all(
		urls.map((url) => fetch(url).then((res) => res.json()))
	);

	return {
		props: {
			servicesCardData,
			whatWeDo,
			serviceCardHeader,
			metaService: metaService[0],
		},
	};
}

const Services = ({ servicesCardData, whatWeDo, serviceCardHeader, metaService }) => {
	// const [servicesCardData, setServicesCardData] = useState();
	// const [whatWeDo, setWhatWeDo] = useState();
	// const [serviceCardHeader, setServiceCardHeader] = useState();
	// const [metaService, setMetaService] = useState();

	// useEffect(() => {
	//   (async () => {
	//     fetch("https://virtualexperts.net/api/servicesCard").then(firstRes => firstRes.json()).then(res => {
	//       setServicesCardData(res);
	//     }).catch(err => console.log(err))

	//     fetch("https://virtualexperts.net/api/whatWeDo").then(firstRes => firstRes.json()).then(res => {
	//       setWhatWeDo(res);
	//     }).catch(err => console.log(err))

	//     fetch("https://virtualexperts.net/api/serviceCardHeader").then(firstRes => firstRes.json()).then(res => {
	//       setServiceCardHeader(res);
	//     }).catch(err => console.log(err))

	//     fetch("https://virtualexperts.net/api/metaService").then(firstRes => firstRes.json()).then(res => {
	//       setMetaService(res[0]);
	//     }).catch(err => console.log(err))
	//   })()
	// }, [])

	return (
		<>
			<Head>
				<title>
					{metaService?.title
						? `Virtual Experts |  ${metaService?.title}`
						: "virtual Experts | Service"}
				</title>
				<meta
					name="description"
					content={
						metaService?.description
							? ` ${metaService?.description}`
							: "virtual Experts"
					}
				/>
				<meta
					name="keyword"
					content={
						metaService?.keywords
							? ` ${metaService?.keywords}`
							: "Amazon Marketing Services, amazon seller feedback, amazon product review, amazon seo, amazon fba consultant, amazonseo services, amazonsearch engine optimization, amazonseo consultant, amazon seo agency, worst amazon reviews, amazon bad reviews, amazon fba consulting services, listing optimization services, amazon negative review removal, how to remove bad reviews on amazon"
					}
				/>
			</Head>
			<ServicesComponents
				whatWeDo={whatWeDo}
				servicesCardData={servicesCardData}
				serviceCardHeader={serviceCardHeader}
			/>
			{/* ===================================== */}
			<ScheduleMeeting />
		</>
	);
};

export default Services;
