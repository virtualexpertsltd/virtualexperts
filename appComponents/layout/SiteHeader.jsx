"use client";

import smallLogo from "@/appAssets/images/mobile-logo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
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
				link: "/services/amazon-listing-images",
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
				className={`header font-poppins w-full fixed left-0 top-0 bg-white z-40  ${isSticky ? "" : ""}`}
			>
				<div className="container">
					<div className="inner flex gap-7 justify-between items-center">
						<div className="py-4">
							<Logo />
						</div>
						<button
							title="Toggle Menu"
							className="inline-block lg:hidden p-4 cursor-pointer"
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<span className="h-[2px] w-[30px] block ml-auto bg-[#828b9a] mt-[5px] first:mt-0"></span>
							<span className="h-[2px] w-[25px] block ml-auto bg-[#828b9a] mt-[5px] first:mt-0"></span>
							<span className="h-[2px] w-[20px] block ml-auto bg-[#828b9a] mt-[5px] first:mt-0"></span>
						</button>
						<nav className="hidden lg:flex">
							<ul className="flex py-4 mb-4">
								{navbarData.map((item) => (
									<li
										key={item.id}
										className="relative group inline-flex items-center px-4"
									>
										{item.dropdowns ? (
											<React.Fragment>
												<span className="self-stretch inline-flex items-center text-dark group-hover:text-primary transition-all">
													{item.title}
												</span>
												<FiChevronDown className="ml-1 transition-all transform text-dark group-hover:text-primary group-hover:rotate-180" />
												<ul className="absolute left-auto right-0 top-full bg-white shadow-custom border-b-4 border-primary min-w-[200px] p-2 rounded z-40 opacity-0 invisible transition-all duration-500 transform translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
													{item.dropdowns.map((dropitem) => (
														<li key={dropitem.id} className="block">
															<Link
																href={dropitem.link}
																className="text-dark text-sm block py-1 transition-all hover:text-primary leading-tight"
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
												className="inline-flex items-center text-dark group-hover:text-primary transition-all"
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
			className={`fixed font-poppins h-screen w-[400px] max-w-full bg-[#828b9a] left-auto right-0 top-0 z-50 border-l border-border border-opacity-20 transition-all duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
		>
			<div className="inner relative h-full text-center">
				<div className="header text-right p-4">
					<button
						title="Close Menu"
						className="inline-flex text-white"
						onClick={closeHandler}
					>
						<AiOutlineClose size={24} />
					</button>
				</div>
				<Image
					src={smallLogo}
					alt="virtualexperts.net"
					height={100}
					width={112}
					className="object-contain object-center max-h-full max-w-full align-middle mx-auto"
					quality={100}
				/>
				<nav className="max-h-full overflow-y-auto p-4">
					<ul className="text-center">
						{navbarData.map((item) => (
							<React.Fragment key={item.id}>
								{item.dropdowns ? (
									<MobileDropdownItem
										data={item}
										menuCloseHandler={closeHandler}
									/>
								) : (
									<li className="my-2">
										<Link
											href={item.link}
											className="block text-sm py-2 transition-all !text-white hover:bg-primary"
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
		<li key={data.id} className="block my-2">
			<button
				className="flex w-full justify-center py-2 items-center text-sm transition-all text-white hover:bg-primary"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<span>{data.title}</span>
				<FiChevronDown
					className={`ml-1 transition-all transform ${isOpen ? "rotate-180" : "rotate-0"}`}
				/>
			</button>
			{isOpen ? (
				<ul className="pt-1">
					{data.dropdowns.map((dropitem) => (
						<li key={dropitem.id} className="block text-white">
							<Link
								href={dropitem.link}
								className="text-white text-sm block py-1 transition-all hover:text-primary leading-tight"
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
