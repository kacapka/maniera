import Footer from "../Footer";

const Instagram = () => {
	return (
		<section className="section">
			<div className="instagram">
				<div className="instagram-wrapper">
					<p className="instagram-title">- zainspiruj się -</p>
					<p className="instagram-text">Follow us <a href="https://www.instagram.com/manieranailbar/?hl=pl" target="_blank">@manieranailbar</a></p>
					<div className="instagram-photos">
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
					</div>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default Instagram;
