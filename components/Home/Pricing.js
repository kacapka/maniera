import LinkBox from "../LinkBox";

const Pricing = () => {
	return (
		<section className="section">
			<div className="main-pricing">
				<div className="pricing-wrapper">
					<svg viewBox="0 0 500 500" className="pricing-image">
						<path
							id="curve"
							fill="transparent"
							d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
						/>
					</svg>
					<div className="pricing-text">
						<h2 className="pricing-text__title">
							MANI + PEDI
							<br /> WYKONUJEMY
							<br /> W 60 MINUT.
						</h2>
						<p className="pricing-text__wow">wow!</p>
					</div>
				</div>
				<LinkBox link="/pricing" text="sprawdź nasze ceny" internal />
			</div>
		</section>
	);
};

export default Pricing;
