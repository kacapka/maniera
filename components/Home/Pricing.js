// import { useRef, useLayoutEffect } from 'react';
import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from '../MediaQuery/MediaQuery';
import Circle from '../Circle';

const Pricing = () => {
	const { isMobileOrTablet } = useMedia();
	const buttonProps = {
		link: "/pricing",
		text: "sprawdź nasze ceny",
		internal: true
	}

	return (
		<section className="section">
			<div className="main-pricing">
				<div className="main-pricing-wrapper">
					<Circle text="Wiemy jak cenny jest Twój czas." />
					<div className="main-pricing-text">
						<h2 className="main-pricing-text__title">
							<span className="top">MANI + PEDI</span>
							<span className="middle">WYKONUJEMY</span>
							<span className="bottom">W 60 MINUT.</span>
						</h2>
						<p className="main-pricing-text__wow">wow!</p>
					</div>
				</div>
				{isMobileOrTablet ? <LinkBoxMobile {...buttonProps} /> : <LinkBox {...buttonProps} />}
			</div>
		</section>
	);
};

export default Pricing;
