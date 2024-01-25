"use client";

import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";

const navbarData = [
	{
		id: "1",
		title: "Home",
		link: "/",
	},
	{
		id: "2",
		title: "Amazon FBA Consultant",
		link: "/amazon-fba-consultant",
	},
	{
		id: "3",
		title: "Service",
		link: "/services",
		dropdowns: [
			{
				id: 1,
				title: "All Services",
				link: "/services",
			},
			{
				id: 2,
				title: "Product Listing Images Design",
				link: "/services/photography-and-listing",
			},
		],
	},
	{
		id: "4",
		title: "Blog",
		link: "/blog",
	},
	{
		id: "5",
		title: "About US",
		link: "/about",
	},
	{
		id: "6",
		title: "Let's Talk",
		link: "/letstalk",
	},
];

const SiteHeader = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	useLayoutEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () => {
				if (window.scrollY > 0) {
					setIsSticky(true);
				} else {
					setIsSticky(false);
				}
			});
		}
		return () => {};
	}, []);

	return (
		<React.Fragment>
			<header
				className={`header w-full fixed left-0 top-0 bg-white z-40  ${isSticky ? "bg-opacity-80 filter backdrop-blur-sm border-b border-border border-opacity-10" : "bg-opacity-100"}`}
			>
				<div className="container">
					<div className="inner flex gap-7 justify-between items-center">
						<div className="py-4">
							<Logo />
						</div>
						<button
							title="Toggle Menu"
							className="inline-block lg:hidden text-4xl"
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<FiMenu />
						</button>
						<nav className="hidden lg:flex self-stretch items-center">
							<ul className="flex lg:gap-x-8 xl:gap-x-12 self-stretch items-center">
								{navbarData.map((item) => (
									<li
										key={item.id}
										className="relative group self-stretch inline-flex items-center"
									>
										{item.dropdowns ? (
											<React.Fragment>
												<span className="py-2 self-stretch inline-flex items-center text-dark group-hover:text-primary transition-all">
													{item.title}
												</span>
												<FiChevronDown className="ml-1 transition-all transform text-dark group-hover:text-primary group-hover:rotate-180" />
												<ul className="absolute left-auto right-0 top-full bg-white shadow-custom border-b-4 border-primary min-w-[200px] p-2 rounded z-40 opacity-0 invisible transition-all duration-500 transform translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
													{item.dropdowns.map((dropitem) => (
														<li key={dropitem.id} className="block">
															<Link
																href={dropitem.link}
																className="text-dark block py-1 transition-all hover:text-primary leading-tight"
															>
																{dropitem.title}
															</Link>
														</li>
													))}
												</ul>
											</React.Fragment>
										) : (
											<Link
												href={item.link}
												className="py-2 self-stretch inline-flex items-center text-dark group-hover:text-primary transition-all"
											>
												{item.title}
											</Link>
										)}
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<MobileMenu isOpen={isMobileMenuOpen} closeHandler={() => setIsMobileMenuOpen(false)} />
		</React.Fragment>
	);
};

function MobileMenu({ isOpen, closeHandler }) {
	return (
		<div
			className={`fixed h-screen w-[300px] bg-[#828b9a] left-auto right-0 top-0 z-50 p-5 border-l border-border border-opacity-20 transition-all duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
		>
			<div className="inner relative h-full flex flex-col items-center gap-10 pt-12">
				<button
					title="Close Menu"
					className="absolute left-auto right-0 top-0 inline-flex justify-center items-center h-10 w-10 rounded-full border text-white border-white hover:text-orange-500 hover:border-orange-500"
					onClick={closeHandler}
				>
					<FiX className="text-lg" />
				</button>
				<Logo mobileLogo />
				<nav className="max-h-full overflow-y-auto">
					<ul className="text-center space-y-5">
						{navbarData.map((item) => (
							<React.Fragment key={item.id}>
								{item.dropdowns ? (
									<MobileDropdownItem
										data={item}
										menuCloseHandler={closeHandler}
									/>
								) : (
									<li className="">
										<Link
											href={item.link}
											className="block text-xl transition-all !text-white hover:!text-primary font-medium"
										>
											{item.title}
										</Link>
									</li>
								)}
							</React.Fragment>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
}

function MobileDropdownItem({ data, menuCloseHandler }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li key={data.id} className="block">
			<button
				className={`group flex w-full justify-center items-center text-xl transition-all hover:text-primary font-medium ${isOpen ? "text-primary" : "text-white"}`}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<span>{data.title}</span>
				<FiChevronDown
					className={`text-xl ml-1 transition-all transform group-hover:text-primary ${isOpen ? "rotate-180 text-primary" : "text-white rotate-0"}`}
				/>
			</button>
			{isOpen ? (
				<ul className="pt-1">
					{data.dropdowns.map((dropitem) => (
						<li key={dropitem.id} className="block text-white">
							<Link
								href={dropitem.link}
								className="text-white block py-1 transition-all hover:text-primary leading-tight"
								onClick={menuCloseHandler}
							>
								{dropitem.title}
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</li>
	);
}

export default SiteHeader;
