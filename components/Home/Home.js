import { Fragment } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "./Hero";
import Instagram from "./Instagram";
import Footer from "./Footer";
import Main from "./Main";
import Nav from "../Nav";
import Services from "./Services";
import Pricing from "./Pricing";

const Home = () => {
	return (
		<Fragment>
			<Nav />
			<ReactFullpage
				navigation
				// onLeave={this.onLeave.bind(this)}
				// sectionsColor={this.state.sectionsColor}
				render={comp =>
					console.log("render prop change") || (
						<ReactFullpage.Wrapper>
							<Main />
							<Hero />
							<Services />
							<Pricing />
							<Instagram />
							<Footer />
						</ReactFullpage.Wrapper>
					)
				}
			/>
		</Fragment>
	);
};

export default Home;
