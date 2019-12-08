import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";
import Home from "../components/Home/Home";
import useMedia from '../components/MediaQuery/MediaQuery';
import NavMobile from "../components/NavMobile";

export default () => {
	const { isMobileOrTablet } = useMedia();
	return (
		<Fragment>
			<Head title="Manièra" />
			{isMobileOrTablet && <NavMobile />}
			<Home />
		</Fragment>
	);
};
