"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Accordions = ({ data: accordions }) => {
	const [current, setCurrent] = useState(1);

	return (
		<div className="faqs">
			{accordions && Array.isArray(accordions) && accordions.length ? (
				<React.Fragment>
					{accordions.map((accordion) => (
						<Accordion
							key={accordion.priority}
							current={current}
							setCurrent={setCurrent}
							data={accordion}
						/>
					))}
				</React.Fragment>
			) : null}
		</div>
	);
};

export default Accordions;

const Accordion = ({ data, current, setCurrent }) => {
	return (
		<div className="accordion bg-white shadow-custom mt-5 first:mt-0" key={data.priority}>
			<button
				className={`accordion-header flex items-center justify-between gap-x-3 text-left font-medium w-full px-3 sm:px-5 py-3 ${
					current === data.priority ? "" : "bg-white"
				}`}
				onClick={() => setCurrent(current === data.priority ? -100 : data.priority)}
			>
				<span className="font-medium text-2xl text-dark">Q: {data.question}</span>
				{current === data.priority ? (
					<FiChevronUp className="text-primary text-2xl" />
				) : (
					<FiChevronDown className="text-primary text-2xl" />
				)}
			</button>
			<div
				className={`accordion-content text-xl px-3 sm:px-5 py-5 border-t border-border border-opacity-10 ${data.priority === current ? "block" : "hidden"}`}
			>
				Ans: {data.answer}
			</div>
		</div>
	);
};
