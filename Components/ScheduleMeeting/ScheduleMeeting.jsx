import Link from "next/link";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const ScheduleMeeting = () => {
  // const [scheduleTitle, setScheduleTitle] = useState({});

  // useEffect(() => {
  //   fetch("https://virtualexperts.net/api/scheduleMeeting")
  //     .then((res) => res.json())
  //     .then((data) => setScheduleTitle(data));
  // }, []);
  return <>
    <div className="container my-5 pb-3 px-md-5">
      <div className="background-color-skyblue py-5 px-2 borderRadius">
        <div className="col-12 col-md-10 mx-auto mb-3 text-center">
          {/* {scheduleTitle.title && ( */}
          <p className="fs-20 lh-40 font-family-roboto">
            Our Professional Team has helped <span style={{color:"#ff9f26"}}> Hundreds of Sellers </span> on Amazon to <span style={{color:"#ff0000"}}> Avoid Failure</span> and Maximize Potential Growth. Schedule a Free Meeting Now!
          </p>
          {/* )} */}
          <button className="button px-4 py-1 mt-4 slide_right">
            {/* {scheduleTitle.link && ( */}
            <Link href={`https://calendly.com/virtualexpertsltd/amazon-fba-consultancy`} target="_blank">

              <h4 className="d-inline fs-14 font-family-roboto">
                Schedule a Meeting
              </h4>

            </Link>
            {/* )} */}
          </button>
        </div>
      </div>  
    </div>
  </>;
};

export default ScheduleMeeting;
