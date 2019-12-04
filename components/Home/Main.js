import logo from "../../static/logo.png";
import Logo from "../Logo";
import Nav from "../Nav";
import useMedia from '../MediaQuery/MediaQuery';

const Main = () => {
	const { isMobileOrTablet } = useMedia();
	return (
		<section className="section">
			<div className="main">
				{!isMobileOrTablet && <Nav />}
				<Logo />
				<h1 className="main-title"><span>Witaj&nbsp;</span><span className="main-title__bottom">w Manièrze.</span></h1>
			</div>
		</section>
	);
};

export default Main;
