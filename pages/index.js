import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";
import Home from "../components/Home/Home";
import useMedia from '../components/MediaQuery/MediaQuery';
import NavMobile from "../components/NavMobile";
import Nav from "../components/Nav";

export default () => {
	const { isMobile } = useMedia();
	return (
		<Fragment>
			<Head title="Maniera" />
			{isMobile ? <NavMobile /> : <Nav />}
			<Home />
		</Fragment>
	);
};
