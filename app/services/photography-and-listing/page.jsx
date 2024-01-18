import BrandLogos from "./_components/BrandLogos";
import CallToAction from "./_components/CallToAction";
import Expectation from "./_components/Expectation";
import Faqs from "./_components/Faqs";
import ImpactListing from "./_components/ImpactListing";
import PageHeader from "./_components/PageHeader";
import Portfolios from "./_components/Portfolios";
import Pricing from "./_components/Pricing";
import Testimonials from "./_components/Testimonials";
import WhyChooseUs from "./_components/WhyChooseUs";

const PhotographyAndListing = () => {
	return (
		<div className="relative">
			<span className="shape fixed h-[1566px] w-[1566px] -left-[48%] top-[25%] rounded-full opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,159,38,0.9)_0%,rgba(255,245,232,0.1)_51%,rgba(255,255,255,0)_100%)] pointer-events-none"></span>
			<span className="shape fixed h-[1237px] w-[1237px] left-auto -right-[35%] -top-[45%] rounded-full opacity-30 bg-[radial-gradient(circle_at_bottom_left,rgba(79,168,207,0.9)_0%,rgba(255,245,232,0.1)_51%,rgba(255,255,255,0)_100%)] pointer-events-none"></span>
			<PageHeader />
			<ImpactListing />
			<Expectation />
			<WhyChooseUs />
			<BrandLogos />
			<Portfolios />
			<Pricing />
			<Testimonials />
			<Faqs />
			<CallToAction />
			<span className="block pb-20"></span>
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
