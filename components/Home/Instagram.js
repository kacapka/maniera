import Footer from "../Footer";
import useMedia from '../MediaQuery/MediaQuery';
import Slider from "../Slider";

const PHOTOS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f'
];

const Instagram = () => {
	const { isSmallDesktop, isMobileOrTablet, isMobile, isSmallMobile } = useMedia();

	const renderPhotos = () => {
		let photos = PHOTOS.slice(0, 5);
		if (isSmallDesktop) photos = PHOTOS.slice(0, 4);

		if (isMobileOrTablet && !isSmallMobile) {
			return (
				<Slider isLight>
					<div className="instagram-photos__inner">
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
					</div>
					<div className="instagram-photos__inner">
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
					</div>
				</Slider>
			);
		} else if (isSmallMobile) {
			return (
				<Slider>
					<div className="instagram-photos__inner">
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
					</div>
					<div className="instagram-photos__inner">
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
					</div>
					<div className="instagram-photos__inner">
						<div className="instagram-photos__item" />
						<div className="instagram-photos__item" />
					</div>
				</Slider>
			);
		} else {
			return photos.map(photo => (
				<div className="instagram-photos__item" key={photo} />
			));
		}
	};

	return (
		<section className="section">
			<div className="instagram">
				<div className="instagram-wrapper">
					<p className="instagram-title">- zainspiruj się -</p>
					<p className="instagram-text">Follow us <a href="https://www.instagram.com/manieranailbar/?hl=pl" target="_blank">@manieranailbar</a></p>
					<div className="instagram-photos">
						{renderPhotos()}
					</div>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default Instagram;
