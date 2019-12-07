import { Fragment, createContext } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "./Hero";
import Instagram from "./Instagram";
import Main from "./Main";
import Services from "./Services";
import Pricing from "./Pricing";
import Wine from "./Wine";
import Nails from "./Nails";
import Hands from "./Hands";
import Team from "./Team";
import Phone from "./Phone";
import Contact from "./Contact";
import useMedia from "../MediaQuery/MediaQuery";
import LICENSE_KEY from '../../data/config';

export const FpContext = createContext({});

const Home = () => {
	const { isMobile } = useMedia();
	const components = (
		<>
			<Main />
			<Hero />
			<Services />
			<Pricing />
			<Wine />
			<Nails />
			<Hands />
			<Team />
			<Phone />
			<Contact />
			<Instagram />
		</>
	)

	return (
		<Fragment>
			{isMobile ? components : (
				<ReactFullpage
					licenseKey={LICENSE_KEY}
					navigation
					fadingEffect
					onLeave={(origin, destination, direction) => console.log(origin, destination, direction)}
					render={({ state, fullpageApi }) =>
						console.log("") || (
							<ReactFullpage.Wrapper>
								<FpContext.Provider value={null}>
									{components}
								</FpContext.Provider>
							</ReactFullpage.Wrapper>
						)
					}
				/>
			)


			}
		</Fragment>
	);
};

export default Home;