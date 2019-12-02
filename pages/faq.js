import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FaqHero from "../components/Faq/FaqHero";
import FaqContent from "../components/Faq/FaqContent";
import useMedia from '../components/MediaQuery/MediaQuery';
import NavMobile from "../components/NavMobile";

export default () => {
	const { isMobile } = useMedia();
	return (
		<Fragment>
			<Head title="Meniera - Faq" />
			{isMobile ? <NavMobile /> : <Nav />}
			<FaqHero />
			<FaqContent />
			<Footer />
		</Fragment>
	);
};
