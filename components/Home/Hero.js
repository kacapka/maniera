import Fade from 'react-reveal/Fade';

const Hero = () => {
	return (
		<section className="section">
			<div className="hero">
				<Fade bottom>
					<p className="hero-text hero-text__top">
						Poczuj się jak w mieszkaniu przyjaciółki,
						odpręż się w dziewczyńskiej atmosferze
						i zrelaksuj jak w SPA przy kieliszku prosecco.
					</p>
				</Fade>
				<Fade bottom>
					<p className="hero-text hero-text__bottom">
						<span className="hero-text--italic">Odwiedź Manièrę</span> <br />
						z przyjaciółką, mamą, siostrą lub mężem.
					</p>
				</Fade>
			</div>

		</section>
	);
};

export default Hero;
