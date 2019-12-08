import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";
import PricingHero from "../components/Pricing/PricingHero";
import Footer from "../components/Footer";
import PricingContent from "../components/Pricing/PricingContent";
import useMedia from '../components/MediaQuery/MediaQuery';
import NavMobile from "../components/NavMobile";

export default () => {
	const { isMobileOrTablet } = useMedia();
	return (
		<Fragment>
			<Head title="Manièra - Cennik" />
			{isMobileOrTablet && <NavMobile />}
			<PricingHero />
			<PricingContent />
			<Footer />
		</Fragment>
	);
};
