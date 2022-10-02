import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className={`container flex mx-auto p-5 justify-between align-middle`}>
				<Link to="/">
					<div className={`text-3xl font-bold ${style.text__color} my-auto`}>
						Weather Project - Vercel update
					</div>
				</Link>
				<div className={`flex`}>
					<Link to="weather" className={`${style.button__weather} py-2 px-9 mr-10`}>
						Weather
					</Link>
					<a rel={"noreferrer"}
						href={"https://github.com/zsoltgombocz/react-weather-app"}
						target={"_blank"}
						className={`${style.button__github} py-2 px-9`}
					>
						GitHub
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;