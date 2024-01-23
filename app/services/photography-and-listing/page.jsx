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

export const metadata = {
	title: "Photography & Listing",
};

const PhotographyAndListing = () => {
	return (
		<main className="relative z-10">
			<span className="shape fixed h-[800px] w-[800px] left-0 top-auto bottom-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,159,38,0.6)_0%,rgba(255,245,232,0.2)_80%,rgba(255,255,255,0)_100%)] pointer-events-none"></span>
			<span className="shape fixed h-[600px] w-[600px] left-auto right-0 top-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(79,168,207,0.5)_0%,rgba(255,245,232,0.3)_80%,rgba(255,255,255,0)_100%)] pointer-events-none"></span>
			<span className="fixed left-0 top-0 h-svh w-svw bg-white bg-opacity-50 filter backdrop-blur-xl z-10"></span>
			<div className="relative z-20">
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
		</main>
	);
};

export default PhotographyAndListing;
