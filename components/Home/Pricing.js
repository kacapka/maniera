// import { useRef, useLayoutEffect } from 'react';
import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from '../MediaQuery/MediaQuery';
import Circle from '../Circle';
import useTranslate from '../Translations/useTranslate';

const Pricing = () => {
	const { isMobileOrTablet } = useMedia();
	const trans = useTranslate('pricing');
	const buttonProps = {
		link: "/pricing",
		text: trans.button,
		internal: true,
		className: 'button-wrapper--mint'
	}

	return (
		<section className="section">
			<div className="main-pricing">
				<div className="main-pricing-wrapper">
					<Circle text={trans.circle} />
					<div className="main-pricing-text">
						<h2 className="main-pricing-text__title">
							<span className="top">MANI + PEDI</span>
							<span className="middle">{trans.make}</span>
							<span className="bottom">{trans.minutes}</span>
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
