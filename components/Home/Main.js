import { useState, useEffect } from 'react';
import classnames from 'classnames';
import Logo from "../Logo";
import Nav from "../Nav";
import useMedia from '../MediaQuery/MediaQuery';

const Main = () => {
	const { isMobileOrTablet } = useMedia();
	console.log(isMobileOrTablet);

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
