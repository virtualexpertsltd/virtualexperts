import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const AboutComponents = dynamic(() => import("../Components/About/About"));
const ScheduleMeeting = dynamic(() => import("../Components/ScheduleMeeting/ScheduleMeeting"));

export async function getServerSideProps() {
	const urls = [
		"http://localhost:5000/about",
		"http://localhost:5000/aboutUnique",
		"http://localhost:5000/aboutUniqueList",
		"http://localhost:5000/aboutTeam",
		"http://localhost:5000/aboutMission",
		"http://localhost:5000/teams",
		"http://localhost:5000/metaAbout",
	];

	const [
		aboutData,
		aboutUniquetData,
		aboutUniquetListData,
		aboutTeamData,
		aboutMissionData,
		teams,
		metaAbout,
	] = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));

	return {
		props: {
			aboutData: aboutData[0],
			aboutUniquetData: aboutUniquetData[0],
			aboutUniquetListData,
			aboutTeamData: aboutTeamData[0],
			aboutMissionData: aboutMissionData[0],
			teams,
			metaAbout: metaAbout[0],
		},
	};
}

const AboutCopy = ({
	aboutData,
	aboutUniquetData,
	aboutUniquetListData,
	aboutTeamData,
	aboutMissionData,
	teams,
	metaAbout,
}) => {
	// const [aboutData, setAboutData] = useState();
	// const [aboutUniquetData, setAboutUniquetData] = useState();
	// const [aboutUniquetListData, setAboutUniquetListData] = useState();
	// const [aboutTeamData, setAboutTeamData] = useState();
	// const [aboutMissionData, setAboutMissionData] = useState();
	// const [metaAbout, setMetaAbout] = useState([])
	// const [teams, setTeams] = useState()

	// useEffect(() => {
	//   (async () => {
	//     fetch("https://virtual-experts-server.cyclic.app/about").then((firstRes) => firstRes.json()).then(res => {
	//       setAboutData(res[0])
	//     }).catch((e) => {
	//       console.log(e)
	//     });

	//     fetch("https://virtual-experts-server.cyclic.app/aboutUnique").then((firstRes) => firstRes.json()).then(res => {
	//       setAboutUniquetData(res[0])
	//     }).catch((e) => {
	//       console.log(e)
	//     });

	//     fetch("https://virtual-experts-server.cyclic.app/aboutMission").then((firstRes) => firstRes.json()).then(res => {
	//       setAboutMissionData(res[0])
	//     }).catch((e) => {
	//       console.log(e)
	//     });

	//     fetch("https://virtual-experts-server.cyclic.app/aboutUniqueList").then((firstRes) => firstRes.json()).then(res => {
	//       setAboutUniquetListData(res)
	//     }).catch((e) => {
	//       console.log(e)
	//     });

	//     fetch("https://virtual-experts-server.cyclic.app/aboutTeam").then((firstRes) => firstRes.json()).then(res => {
	//       setAboutTeamData(res[0])
	//     }).catch((e) => {
	//       console.log(e)
	//     });

	//     fetch("https://virtual-experts-server.cyclic.app/teams").then((firstRes) => firstRes.json()).then(res => {
	//       setTeams(res)
	//     }).catch((e) => {
	//       console.log(e)
	//     });

	//     fetch("https://virtual-experts-server.cyclic.app/metaAbout").then((firstRes) => firstRes.json()).then(res => {
	//       setMetaAbout(res[0])
	//     }).catch((e) => {
	//       console.log(e)
	//     });

	//   })()
	// }, [])

	return (
		<>
			<Head>
				<title>
					{metaAbout?.title
						? `Virtual Experts |  ${metaAbout?.title}`
						: "virtual Experts | About"}
				</title>
				<meta
					name="description"
					content={
						metaAbout?.description ? ` ${metaAbout?.description}` : "virtual Experts"
					}
				/>
				<meta
					name="keyword"
					content={
						metaAbout?.keywords
							? ` ${metaAbout?.keywords}`
							: "amazon fba consultant, amazon seo services, amazon seo consultant, amazon seo agency"
					}
				/>
			</Head>
			<AboutComponents
				aboutData={aboutData}
				aboutTeamData={aboutTeamData}
				aboutUniquetData={aboutUniquetData}
				aboutMissionData={aboutMissionData}
				aboutUniquetListData={aboutUniquetListData}
				teams={teams}
			/>
			{/* ===================================== */}
			<ScheduleMeeting />
		</>
	);
};

export default AboutCopy;
