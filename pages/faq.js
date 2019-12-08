import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";
import Footer from "../components/Footer";
import FaqHero from "../components/Faq/FaqHero";
import FaqContent from "../components/Faq/FaqContent";
import useMedia from '../components/MediaQuery/MediaQuery';
import NavMobile from "../components/NavMobile";

export default () => {
	const { isMobileOrTablet } = useMedia();
	return (
		<Fragment>
			<Head title="Manièra - Faq" />
			{isMobileOrTablet && <NavMobile />}
			<FaqHero />
			<FaqContent />
			<Footer />
		</Fragment>
	);
};
