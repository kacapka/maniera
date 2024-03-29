import { useState, useEffect } from 'react';
import classnames from 'classnames';
import Logo from "../Logo";
import Nav from "../Nav";
import useMedia from '../MediaQuery/MediaQuery';
import useTranslate from '../Translations/useTranslate';

const Main = () => {
	const { isMobileOrTablet } = useMedia();
	const trans = useTranslate('main');

	return (
		<section className="section">
			<div className="main">
				{!isMobileOrTablet && <Nav />}
				<Logo />
				<h1 className={classnames("main-title", { "main-title--tablet": isMobileOrTablet })}>
					<span>{trans.welcome}&nbsp;</span>
					<span className="main-title__bottom">{trans.maniera}</span>
				</h1>
			</div>
		</section>
	);
};

export default Main;
