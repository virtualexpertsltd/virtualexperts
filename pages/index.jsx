import dynamic from "next/dynamic";
import Head from "next/head";
import { useState, useEffect } from "react";
import Amazon from "../Components/Home/Amazon/Amazon";
import Banner from "../Components/Home/Banner/Banner";


// const Banner = dynamic(() => import('../Components/Home/Banner/Banner'));
// const Amazon = dynamic(() => import('../Components/Home/Amazon/Amazon'));
const HowToPlaceAnOrder = dynamic(() => import('../Components/Home/HowToPlaceAnOrder/HowToPlaceAnOrder'));
const TrustedPartners = dynamic(() => import('../Components/Home/Partners/TrustedPartners'));
const TopAmazonClients = dynamic(() => import('../Components/Home/TopAmazonClients/TopAmazonClients'));
const TopThreeServices = dynamic(() => import('../Components/Home/TopThreeServices/TopThreeServices'));
const WhyChooseVirtualExperts = dynamic(() => import('../Components/Home/WhyChooseVirtualExperts/WhyChooseVirtualExperts'));
const ScheduleMeeting = dynamic(() => import('../Components/ScheduleMeeting/ScheduleMeeting'));


export default function Home() {
  const [topServicesData, setTopServicesData] = useState()
  const [headerInfoTopServicesData, setHeaderInfoTopServicesData] = useState()
  const [headerInfoVirtualExpertsData, seTheaderInfoVirtualExpertsData] = useState()
  const [virtualServicesData, setVirtualServicesData] = useState()
  const [testimonials, setTestimonials] = useState()
  const [amazonData, setAmazonData] = useState()
  const [placeAnOrderListData, setPlaceAnOrderListData] = useState()
  const [placeAnOrderData, setPlaceAnOrderData] = useState()
  const [bannerData, setBannerData] = useState()
  const [metaHome, setMetaHome] = useState()

  useEffect(() => {
    (async () => {

      fetch("https://virtual-experts-server.cyclic.app/topServices").then(firstRes => firstRes.json()).then(res => {
        setTopServicesData(res)
      }).catch(err => console.log(err))

      fetch("https://virtual-experts-server.cyclic.app/headerInfoTopServices").then(firstRes => firstRes.json()).then(res => {
        setHeaderInfoTopServicesData(res)
      }).catch(err => console.log(err))

      fetch("https://virtual-experts-server.cyclic.app/virtualService").then(firstRes => firstRes.json()).then(res => {
        setVirtualServicesData(res)
      }).catch(err => console.log(err))

      fetch("https://virtual-experts-server.cyclic.app/headerInfoVirtualExports").then(firstRes => firstRes.json()).then(res => {
        seTheaderInfoVirtualExpertsData(res)
      }).catch(err => console.log(err))


      fetch("https://virtual-experts-server.cyclic.app/banner").then(firstRes => firstRes.json()).then(res => {
        console.log(res[0], 'banner')
        setBannerData(res[0])
      }).catch(err => console.log(err))


      fetch("https://virtual-experts-server.cyclic.app/testimonials").then(firstRes => firstRes.json()).then(res => {
        setTestimonials(res)
      }).catch(err => console.log(err))

      fetch("https://virtual-experts-server.cyclic.app/amazon").then(firstRes => firstRes.json()).then(res => {
        setAmazonData(res)
      }).catch(err => console.log(err))

      fetch("https://virtual-experts-server.cyclic.app/placeAnOrderList").then(firstRes => firstRes.json()).then(res => {
        setPlaceAnOrderListData(res)
      }).catch(err => console.log(err))

      fetch("https://virtual-experts-server.cyclic.app/placeAnOrder").then(firstRes => firstRes.json()).then(res => {
        setPlaceAnOrderData(res)
      }).catch(err => console.log(err))

      fetch("https://virtual-Bxperts-server.cyclic.app/metaHome").then(firstRes => firstRes.json()).then(res => {
        setMetaHome(res[0])
      }).catch(err => console.log(err))

    })()
  }, [])


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
            metaHome?.description
              ? ` ${metaHome?.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content=
          {
            metaHome?.keywords
              ? ` ${metaHome?.keywords}`
              : "Amazon Marketing Service, amazon ppc, amazon seller feedback, amazon marketing strategy, amazon product review, amazon fba consultant, amazon seo agency, worst amazon reviews, amazon seo consultant, amazon seo services, amazon bad reviews, amazon negative review removal, listing optimization services"
          }
        />
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

        {testimonials && (
          <TopAmazonClients topclients={testimonials} />
        )}
        <ScheduleMeeting />
      </main>
    </>
  );
}
