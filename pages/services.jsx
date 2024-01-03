import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";


const ServicesComponents = dynamic(() => import('../Components/Services/Services'));
const ScheduleMeeting = dynamic(() => import('../Components/ScheduleMeeting/ScheduleMeeting'));

const Services = () => {
  const [servicesCardData, setServicesCardData] = useState();
  const [whatWeDo, setWhatWeDo] = useState();
  const [serviceCardHeader, setServiceCardHeader] = useState();
  const [metaService, setMetaService] = useState();


  useEffect(() => {
    (async () => {
      fetch("https://virtual-experts-server.cyclic.app/servicesCard").then(firstRes => firstRes.json()).then(res => {
        setServicesCardData(res);
      }).catch(err => console.log(err))


      fetch("https://virtual-experts-server.cyclic.app/whatWeDo").then(firstRes => firstRes.json()).then(res => {
        setWhatWeDo(res);
      }).catch(err => console.log(err))

      fetch("https://virtual-experts-server.cyclic.app/serviceCardHeader").then(firstRes => firstRes.json()).then(res => {
        setServiceCardHeader(res);
      }).catch(err => console.log(err))


      fetch("https://virtual-experts-server.cyclic.app/metaService").then(firstRes => firstRes.json()).then(res => {
        setMetaService(res[0]);
      }).catch(err => console.log(err))
    })()
  }, [])


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
          content=
          {
            metaService?.keywords
              ? ` ${metaService?.keywords}`
              : "Amazon Marketing Services, amazon seller feedback, amazon product review, amazon seo, amazon fba consultant, amazonseo services, amazonsearch engine optimization, amazonseo consultant, amazon seo agency, worst amazon reviews, amazon bad reviews, amazon fba consulting services, listing optimization services, amazon negative review removal, how to remove bad reviews on amazon"
          }

        />
      </Head>
      <ServicesComponents whatWeDo={whatWeDo} servicesCardData={servicesCardData} serviceCardHeader={serviceCardHeader} />
      {/* ===================================== */}
      <ScheduleMeeting />
    </>
  );
};

export default Services;
