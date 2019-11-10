import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";
import Home from "../components/Home/Home";

export default () => {
	return (
		<Fragment>
			<Head title="Maniera" />
			<Home />
		</Fragment>
	);
};
