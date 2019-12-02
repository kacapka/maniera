import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";
import PricingHero from "../components/Pricing/PricingHero";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PricingContent from "../components/Pricing/PricingContent";
import useMedia from '../components/MediaQuery/MediaQuery';
import NavMobile from "../components/NavMobile";

export default () => {
	const { isMobile } = useMedia();
	return (
		<Fragment>
			<Head title="Meniera - Cennik" />
			{isMobile ? <NavMobile /> : <Nav />}
			<PricingHero />
			<PricingContent />
			<Footer />
		</Fragment>
	);
};
