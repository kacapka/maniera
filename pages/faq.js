import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { Fragment } from "react";

import Head from "../components/head";

export default () => {
	return (
		<Fragment>
			<Head title="Faq" />
			<div>faq</div>
		</Fragment>
	);
};
