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
				{/* <div className="main-image" /> */}
				<h1 className="main-title">Witaj <span className="main-title__bottom">w Manièrze.</span></h1>
			</div>
		</section>
	);
};

export default Main;
