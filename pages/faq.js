import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FaqHero from "../components/Faq/FaqHero";
import FaqContent from "../components/Faq/FaqContent";

export default () => {
	return (
		<Fragment>
			<Head title="Meniera - Faq" />
			<Nav />
			<FaqHero />
			<FaqContent />
			<Footer />
		</Fragment>
	);
};
