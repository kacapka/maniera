import logo from "../../static/logo.png";
import Logo from "../Logo";

const Main = () => {
	return (
		<section className="section">
			<div className="main">
				<Logo />
				<h1 className="main-title">Witaj <span className="main-title__bottom">w Manièrze.</span></h1>
			</div>
		</section>
	);
};

export default Main;
