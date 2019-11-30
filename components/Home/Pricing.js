import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from '../MediaQuery/MediaQuery';

const Pricing = () => {
	const { isMobile } = useMedia();
	const buttonProps = {
		link: "/pricing",
		text: "sprawdź nasze ceny",
		internal: true
	}
	return (
		<section className="section">
			<div className="main-pricing">
				<div className="main-pricing-wrapper">
					<svg className="main-pricing-wrapper__image" viewBox="0 0 500 500" className="main-pricing-image">
						<path
							id="curve"
							fill="transparent"
							d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
						/>
					</svg>
					<div className="main-pricing-text">
						<h2 className="main-pricing-text__title">
							MANI + PEDI
							<br /> WYKONUJEMY
							<br /> W 60 MINUT.
						</h2>
						<p className="main-pricing-text__wow">wow!</p>
					</div>
				</div>
				{isMobile ? <LinkBoxMobile {...buttonProps} /> : <LinkBox {...buttonProps} />}
			</div>
		</section>
	);
};

export default Pricing;
