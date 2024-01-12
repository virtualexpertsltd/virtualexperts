import Head from "next/head";
import LetsTalk from "../Components/LetsTalk/LetsTalk";

// const LetsTalk = dynamic(() => import('../Components/LetsTalk/LetsTalk'));

export async function getStaticProps() {
	const urls = ["http://localhost:5000/footer", "http://localhost:5000/metaLetsTalk"];

	const [footerData, metaLetsTalk] = await Promise.all(
		urls.map((url) => fetch(url).then((res) => res.json()))
	);

	return {
		props: {
			footerData,
			metaLetsTalk: metaLetsTalk[0],
		},
		revalidate: 60 * 5,
	};
}

const LetsTalks = ({ footerData, metaLetsTalk }) => {
	// const [footerData, setFooterData] = useState();
	// const [metaLetsTalk, setMetaLetsTalk] = useState();

	// useEffect(() => {
	//   (() => {
	//     fetch("https://virtualexperts.net/api/footer").then(firstRes => firstRes.json()).then(res => {
	//       setFooterData(res)
	//     }).catch(err => console.log(err))

	//     fetch("https://virtualexperts.net/api/metaLetsTalk").then(firstRes => firstRes.json()).then(res => {
	//       setMetaLetsTalk(res[0])
	//     }).catch(err => console.log(err))

	//   })()
	// }, [])

	return (
		<>
			<Head>
				<title>
					{metaLetsTalk?.title
						? `Virtual Experts |  ${metaLetsTalk?.title}`
						: "virtual Experts | Let's Talk"}
				</title>
				{/* <title>Virtual Experts | Let&apos;s Talk</title> */}
				<meta
					name="description"
					content={
						metaLetsTalk?.description
							? ` ${metaLetsTalk?.description}`
							: "virtual Experts"
					}
				/>
				<link
          rel="canonical"
          href="https://virtualexperts.net/letstalk"
          key="canonical"
        />
			</Head>

			{footerData && <LetsTalk footerData={footerData} />}
		</>
	);
};

export default LetsTalks;
