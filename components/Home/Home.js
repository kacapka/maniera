import { Fragment } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "./Hero";
import Instagram from "./Instagram";
import Footer from "./Footer";
import Main from "./Main";
import Nav from "../Nav";
import Services from "./Services";
import Pricing from "./Pricing";
import Wine from "./Wine";
import Nails from "./Nails";
import Hands from "./Hands";
import Team from "./Team";

const Home = () => {
	return (
		<Fragment>
			<Nav />
			<ReactFullpage
				navigation
				controlArrows={false}
				// onLeave={this.onLeave.bind(this)}
				// sectionsColor={this.state.sectionsColor}
				render={({ state, fullpageApi }) =>
					console.log("render prop change") || (
						<ReactFullpage.Wrapper>
							<Main />
							<Hero />
							<Services />
							<Pricing />
							<Wine />
							<Nails />
							<Hands />
							<Team />
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
