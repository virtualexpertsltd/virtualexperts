import Head from "next/head";
import Amazon from "../Components/Home/Amazon/Amazon";
import Banner from "../Components/Home/Banner/Banner";

import HowToPlaceAnOrder from "../Components/Home/HowToPlaceAnOrder/HowToPlaceAnOrder";
import TrustedPartners from "../Components/Home/Partners/TrustedPartners";
import TopAmazonClients from "../Components/Home/TopAmazonClients/TopAmazonClients";
import TopThreeServices from "../Components/Home/TopThreeServices/TopThreeServices";
import WhyChooseVirtualExperts from "../Components/Home/WhyChooseVirtualExperts/WhyChooseVirtualExperts";
import ScheduleMeeting from "../Components/ScheduleMeeting/ScheduleMeeting";

export async function getStaticProps() {
	const urls = [
		"http://localhost:5000/topServices",
		"http://localhost:5000/headerInfoTopServices",
		"http://localhost:5000/virtualService",
		"http://localhost:5000/headerInfoVirtualExports",
		"http://localhost:5000/banner",
		"http://localhost:5000/testimonials",
		"http://localhost:5000/amazon",
		"http://localhost:5000/placeAnOrderList",
		"http://localhost:5000/placeAnOrder",
		"http://localhost:5000/metaHome",
	];

	const [
		topServicesData,
		headerInfoTopServicesData,
		virtualServicesData,
		headerInfoVirtualExpertsData,
		bannerData,
		testimonials,
		amazonData,
		placeAnOrderListData,
		placeAnOrderData,
		metaHome,
	] = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));

	return {
		props: {
			topServicesData,
			headerInfoTopServicesData,
			virtualServicesData,
			headerInfoVirtualExpertsData,
			bannerData: bannerData[0],
			testimonials,
			amazonData,
			placeAnOrderListData,
			placeAnOrderData,
			metaHome: metaHome[0],
		},
		revalidate: 60 * 5,
	};
}

export default function Home({
	topServicesData,
	headerInfoTopServicesData,
	virtualServicesData,
	headerInfoVirtualExpertsData,
	bannerData,
	testimonials,
	amazonData,
	placeAnOrderListData,
	placeAnOrderData,
	metaHome,
}) {
	return (
		<>
			<Head>
				<title>
					{metaHome?.title
						? `Virtual Experts | ${metaHome?.title}`
						: "virtual Experts | Home"}
				</title>
				{/* <title>Virtual Experts | Home</title> */}
				<meta
					name="description"
					content={
						metaHome?.description ? ` ${metaHome?.description}` : "virtual Experts"
					}
				/>
				<meta
					name="keyword"
					content={
						metaHome?.keywords
							? ` ${metaHome?.keywords}`
							: "Amazon Marketing Service, amazon ppc, amazon seller feedback, amazon marketing strategy, amazon product review, amazon fba consultant, amazon seo agency, worst amazon reviews, amazon seo consultant, amazon seo services, amazon bad reviews, amazon negative review removal, listing optimization services"
					}
				/>
				<link rel="canonical" href="https://virtualexperts.net" key="canonical" />
			</Head>

			<main>
				<Banner bannerData={bannerData} />
				<Amazon amazonData={amazonData} />

				{virtualServicesData && headerInfoVirtualExpertsData && (
					<WhyChooseVirtualExperts
						virtualServicesData={virtualServicesData}
						headerInfoVirtualExpertsData={headerInfoVirtualExpertsData}
					/>
				)}

				{topServicesData && headerInfoTopServicesData && (
					<TopThreeServices
						topServicesData={topServicesData}
						headerInfoTopServicesData={headerInfoTopServicesData}
					/>
				)}

				<TrustedPartners />

				{placeAnOrderData && placeAnOrderListData && (
					<HowToPlaceAnOrder
						placeAnOrderData={placeAnOrderData}
						placeAnOrderListData={placeAnOrderListData}
					/>
				)}

				{testimonials && <TopAmazonClients topclients={testimonials} />}
				<ScheduleMeeting />
			</main>
		</>
	);
}
