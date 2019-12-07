import { useState, useEffect } from 'react';
import classnames from 'classnames';
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
				<h1 className={classnames("main-title", { "main-title--tablet": isMobileOrTablet })}>
					<span>Witaj&nbsp;</span>
					<span className="main-title__bottom">w Manièrze.</span>
				</h1>
			</div>
		</section>
	);
};

export default Main;
