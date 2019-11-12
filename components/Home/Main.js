import logo from "../../static/logo.png";

const Main = () => {
	return (
		<section className="section">
			<div className="main">
				<img
					src={logo}
					alt="maniera nail + face bar"
					className="main-logo"
				/>
		<a href="https://www.onet.pl/" target="_blank">kliknij tu</a>
				<div className="main-image" />
			</div>
		</section>
	);
};

export default Main;
