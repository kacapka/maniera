import { useState, useEffect } from 'react';
import logo from "../../static/logo.png";
import Logo from "../Logo";
import Nav from "../Nav";
import useMedia from '../MediaQuery/MediaQuery';

const Main = () => {
	const [isTitle, setIsTitle] = useState(false);
	const { isMobileOrTablet } = useMedia();

	useEffect(() => {
		let timer;
		if (!isMobileOrTablet) {
			timer = setTimeout(() => setIsTitle(true), 500);
		}
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className="section">
			<div className="main">
				{!isMobileOrTablet && <Nav />}
				<Logo />
				{isMobileOrTablet && (
					<h1 className="main-title">
						<span>Witaj&nbsp;</span>
						<span className="main-title__bottom">w Manièrze.</span>
					</h1>
				)}
				{isTitle && (
					<h1 className="main-title">
						<span>Witaj&nbsp;</span>
						<span className="main-title__bottom">w Manièrze.</span>
					</h1>
				)}
			</div>
		</section>
	);
};

export default Main;
