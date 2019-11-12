import LinkBox from "../LinkBox";

const Pricing = () => {
	return (
		<section className="section">
			<div className="pricing">
				<div className="pricing-wrapper">
					{/* <div className="pricing-image">
						<h4>
							<span class="char1">W</span>
							<span class="char2">i</span>
							<span class="char3">e</span>
							<span class="char4">m</span>
							<span class="char5">y</span>
							<span class="char6"> </span>
							<span class="char7">j</span>
							<span class="char8">a</span>
							<span class="char9">k</span>
							<span class="char10"></span>
						</h4>
						<div className="pricing-image__bg" />
					</div> */}
					<svg viewBox="0 0 500 500" className="pricing-image">
						<path
							id="curve"
							fill="transparent"
							d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
						/>
						<text width="1000">
							<textPath href="#curve">
								Wiemy jak cenny jest Twój czas.
							</textPath>
						</text>
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
				<LinkBox link="/pricing" text="sprawdź nasze ceny" />
			</div>
		</section>
	);
};

export default Pricing;
