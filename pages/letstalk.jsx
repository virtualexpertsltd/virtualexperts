import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import LetsTalk from "../Components/LetsTalk/LetsTalk";

// const LetsTalk = dynamic(() => import('../Components/LetsTalk/LetsTalk'));

const LetsTalks = () => {
  const [footerData, setFooterData] = useState();
  const [metaLetsTalk, setMetaLetsTalk] = useState();

  useEffect(() => {
    (() => {
      fetch("https://virtual-experts-server.cyclic.app/footer").then(firstRes => firstRes.json()).then(res => {
        setFooterData(res)
      }).catch(err => console.log(err))

      fetch("https://virtual-experts-server.cyclic.app/metaLetsTalk").then(firstRes => firstRes.json()).then(res => {
        setMetaLetsTalk(res[0])
      }).catch(err => console.log(err))

    })()
  }, [])


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
      </Head>

      {footerData && (
        <LetsTalk footerData={footerData} />
      )}
    </>
  );
};

export default LetsTalks;