import { Fragment, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "./Hero";
import Instagram from "./Instagram";
import Main from "./Main";
import Nav from "../Nav";
import Services from "./Services";
import Pricing from "./Pricing";
import Wine from "./Wine";
import Nails from "./Nails";
import Hands from "./Hands";
import Team from "./Team";
import Phone from "./Phone";
import Contact from "./Contact";
import useMedia from "../MediaQuery/MediaQuery";
import NavMobile from "../NavMobile";

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
			{isMobile ? <NavMobile /> : <Nav />}
			{isMobile ? components : (
				<ReactFullpage
					navigation
					render={({ state, fullpageApi }) =>
						console.log("render prop change") || (
							<ReactFullpage.Wrapper>
								{components}
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

// https://api.instagram.com/oauth/authorize
//   ?app_id=789181238176576
//   &redirect_uri=https%3A%2F%2Fmaniera.netlify.com%2F
//   &scope=user_profile,user_media
//   &response_type=code

//   https://maniera.netlify.com/?code=AQAgwQp2245U9xY1Ix4G81dktF3y9QhscIEdVGztsAj8puDpHoISJZRLFoY89AxG9LBr9LroyJLb21_0PcmWq-UytswOMKeeyL6jx0yK_b3riLyE8TVlKlJfgYRt5JAAyon-HXgw0Yo1UVE2V0fXAMiYlLYMqxIyGgD2TgrlNPDwmcSEJAYWUh-M2EbL7dKLYbAC4KsT2t-vLlW7UvNbGN0-dYlA1Q-VDgnzb-TQFsFbXg#_
//   curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F app_id=684477648739411 \
//   -F app_secret=eb8c7... \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://socialsizzle.herokuapp.com/auth/ \
//   -F code=AQDp3TtBQQ...

//   {
// 	  "app_id": "789181238176576",
// 	  "app_secret": 'fcc4596f11e0f384136de68ba57efdc1',
// 	  "grant_type": 'authorization_code',
// 	  "redirect_uri": 'https://maniera.netlify.com',
// 	  "code": "AQCUZ-84OSsMeg6eYXfTXjIAE3zirjS72-yV-7OwqcL7spj7-2khoy2qjR9V4iz-Q2mtaVeq6oO6TLcmtiE0h_83lwWtifShFKQu6SEUGJfcQpyywsL1w1pAT0OOc4FVKEg6AKhM2Y0hBgAqylNSfG_Xd9KBZSLmWsMcbsn6ObkUFN53jg1x4uCJWfgDJJKBJ1gouJdkAVoOPyy8jR0kNHYZbcNtSaMbqiVsr_YCLcrwCQ"
//   }

//   curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F app_id=789181238176576 \
//   -F app_secret=fcc4596f11e0f384136de68ba57efdc1 \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://maniera.netlify.com \
//   -F code=AQAgwQp2245U9xY1Ix4G81dktF3y9QhscIEdVGztsAj8puDpHoISJZRLFoY89AxG9LBr9LroyJLb21_0PcmWq-UytswOMKeeyL6jx0yK_b3riLyE8TVlKlJfgYRt5JAAyon-HXgw0Yo1UVE2V0fXAMiYlLYMqxIyGgD2TgrlNPDwmcSEJAYWUh-M2EbL7dKLYbAC4KsT2t-vLlW7UvNbGN0-dYlA1Q-VDgnzb-TQFsFbXg
