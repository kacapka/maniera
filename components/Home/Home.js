import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "./Hero";
import Instagram from "./Instagram";
import Footer from "./Footer";
import Main from "./Main";

const Home = () => {
	return (
		<ReactFullpage
			navigation
			// onLeave={this.onLeave.bind(this)}
			// sectionsColor={this.state.sectionsColor}
			render={comp =>
				console.log("render prop change") || (
					<ReactFullpage.Wrapper>
						<Main />
						<Hero />
						<Instagram />
						<Footer />
					</ReactFullpage.Wrapper>
				)
			}
		/>
	);
};

export default Home;
