import BrandLogos from "./_components/BrandLogos";
import Expectation from "./_components/Expectation";
import ImpactListing from "./_components/ImpactListing";
import PageHeader from "./_components/PageHeader";
import Portfolios from "./_components/Portfolios";
import WhyChooseUs from "./_components/WhyChooseUs";

const PhotographyAndListing = () => {
	return (
		<div>
			<PageHeader />
			<ImpactListing />
			<Expectation />
			<WhyChooseUs />
			<BrandLogos />
			<Portfolios />
		</div>
	);
};

export const getStaticProps = async (ctx) => {
	return {
		props: {
			data: null,
		},
	};
};

export default PhotographyAndListing;
