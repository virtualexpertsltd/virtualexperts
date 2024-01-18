import Head from "next/head";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import AdminAmazon from "../../Components/Admin/Dashboard/Home/Amazon/Amazon";
import AdminBanner from "../../Components/Admin/Dashboard/Home/Banner/Banner";
import AdminHowToPlaceAnOrder from "../../Components/Admin/Dashboard/Home/HowToPlaceAnOrder/HowToPlaceAnOrder";
import AdminTestimonials from "../../Components/Admin/Dashboard/Home/Testimonials/Testimonials";
import AdminTopThreeService from "../../Components/Admin/Dashboard/Home/TopThreeServices/TopThreeServices";
import AdminWhyChooseVirtualExperts from "../../Components/Admin/Dashboard/Home/WhyChooseVirtualExperts/WhyChooseVirtualExperts";
import Sidebar from "../../Components/Admin/Dashboard/Others/Sidebar/Sidebar";
import WithAdminAuth from "../../Components/Others/WithAdminAuth";

const Dashboard = () => {
	return (
		<>
			<Head>
				<title>Virtual Experts | Admin</title>
			</Head>
			<section className="overflow-hidden">
				<div className="row">
					<div className="col-12 col-md-2 d-none d-md-block">
						<Sidebar />
					</div>
					<div className="d-md-none col-12 mt-2 me-2">
						<BiMenu
							size={32}
							className="ms-2"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasRight3"
							aria-controls="offcanvasRight"
						/>
						<div
							className="offcanvas offcanvas-start bg-gray3"
							tabIndex="-1"
							id="offcanvasRight3"
							aria-labelledby="offcanvasRightLabel"
						>
							<div className="offcanvas-header">
								<AiOutlineClose
									size={32}
									className="text-reset d-block ms-auto mt-2"
									style={{ color: "#fff!important" }}
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								/>
							</div>
							<div className="offcanvas-body">
								<Sidebar />
							</div>
						</div>
					</div>
					<div className="col-12 col-md-10 py-4 vh-100 scroll">
						<AdminBanner />
						<AdminAmazon />
						<AdminWhyChooseVirtualExperts />
						<AdminTopThreeService />
						<AdminHowToPlaceAnOrder />
						<AdminTestimonials />
						{/* <ScheduleMeeting /> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default WithAdminAuth(Dashboard);

Dashboard.getLayout = function PageLayout(page) {
	return <>{page}</>;
};
