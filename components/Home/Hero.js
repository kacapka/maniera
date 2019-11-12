const Hero = () => {
	return (
		<section className="section">
			<div className="hero">
				<p className="hero-text hero-text__top">
					Witaj w Manièrze, <br />
					u nas poczujesz się jakbyś wstąpiła
					<br />
					do mieszkania swojej przyjaciółki,
					<br />a mogła{" "}
					<span className="hero-text--italic">
						zrelaksować się jak w spa
					</span>
					<br />
					połączonym z ulubionym wine barem.
				</p>
				<p className="hero-text hero-text__bottom">
					Tworzymy miejsce spotkań jak żadne inne.
					<br />
					Odwiedź nas z przyjaciółką, siostrą, mamą lub mężem.
				</p>
			</div>
		</section>
	);
};

export default Hero;
