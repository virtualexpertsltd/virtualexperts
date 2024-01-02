import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const AmazonFBAConsultant = dynamic(() => import('../Components/AmazonFBA/AmazonFBAConsultant'));
const ScheduleMeeting = dynamic(() => import('../Components/ScheduleMeeting/ScheduleMeeting'));


const AmazonFBA = () => {
  const [fbaData, setFbaData] = useState();
  const [fbad1Data, setfbad1Data] = useState();
  const [whyshouldhireData, setwhyshouldhireData] = useState();
  const [fbaServiceData, setfbaServiceData] = useState();
  const [metaFBA, setmetaFBA] = useState();

  useEffect(() => {
    (() => {

      fetch("https://virtual-experts-server.cyclic.app/amazonfba").then(firstRes => firstRes.json()).then(res => {
        setFbaData(res[0])
      }).catch(err => console.log(err))


      fetch("https://virtual-experts-server.cyclic.app/fbadesc1").then(firstRes => firstRes.json()).then(res => {
        setfbad1Data(res[0])
      }).catch(err => console.log(err))


      fetch("https://virtual-experts-server.cyclic.app/whyshouldhire").then(firstRes => firstRes.json()).then(res => {
        setwhyshouldhireData(res)
      }).catch(err => console.log(err))


      fetch("https://virtual-experts-server.cyclic.app/fbaservice").then(firstRes => firstRes.json()).then(res => {
        setfbaServiceData(res)
      }).catch(err => console.log(err))


      fetch("https://virtual-experts-server.cyclic.app/metaFBA").then(firstRes => firstRes.json()).then(res => {
        setmetaFBA(res[0])
      }).catch(err => console.log(err))

    })()
  }, [])

  return (
    <>
      <Head>
        <title>
          {metaFBA?.title
            ? `Virtual Experts |  ${metaFBA?.title}`
            : "virtual Experts | Amazon FBA Consultant"}
        </title>
        <meta
          name="description"
          content={
            metaFBA?.description
              ? ` ${metaFBA?.description}`
              : "virtual Experts"
          }
        />
        <meta
          name="keyword"
          content=
          {
            metaFBA?.keywords
              ? ` ${metaFBA?.keywords}`
              : "amazon fba consultant, amazon seo services, amazon seo consultant, amazon seo agency"
          }

        />
      </Head>

      <AmazonFBAConsultant
        fbaData={fbaData}
        fbad1Data={fbad1Data}
        whyshouldhireData={whyshouldhireData}
        fbaServiceData={fbaServiceData}
      />
      {/* ===================================== */}
      <ScheduleMeeting />
    </>
  );
};

export default AmazonFBA;