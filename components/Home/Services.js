import Fade from 'react-reveal/Fade';
import useMedia from '../MediaQuery/MediaQuery';

const Services = () => {
	const { isTabletOrMobile } = useMedia();
	return (
		<section className="section">
			<div className="services">
				<Fade bottom>
					<h2 className="services-title">Zajmiemy się Tobą.</h2>
				</Fade>

				<div className="services-wrapper">
					<Fade bottom>
						<div className="services-item">
							<div className="services-item__line" />
							<h3 className="services-item__title">
								Stylizacja paznokci
							</h3>
							<p className="services-item__desc">
								Wykonujemy stylistykę paznokci
								naturalnych oraz przedłużanych.
								U nas umówisz się na manicure japoński,
								SPA, a także hybrydowy i żelowy.
								Możesz być pewna, że używamy produktów
								najwyższej jakości.
							</p>
						</div>
					</Fade>
					<Fade bottom delay={isTabletOrMobile ? 0 : 200}>
						<div className="services-item">
							<div className="services-item__line" />
							<h3 className="services-item__title">
								Stylizacja rzęs
							</h3>
							<p className="services-item__desc">
								Oferujemy przedłużanie rzęs metodami
								1:1, 2:1 oraz objętościowymi big volume.
								Połóż się wygodnie i pozwól naszym
								stylistkom działać cuda.
							</p>
						</div>
					</Fade>
					<Fade bottom delay={isTabletOrMobile ? 0 : 400}>
						<div className="services-item">
							<div className="services-item__line" />
							<h3 className="services-item__title">
								Zabiegi kosmetyczne
							</h3>
							<p className="services-item__desc">
								Nasz gabinet kosmetyczny oferuje gamę
								zabiegów pielęgnacyjnych przy użyciu
								luksusowych preparatów marki Sothys,
								a także urządzeń najnowszej generacji
								Hydrafacial oraz Geneo+.
							</p>
						</div>
					</Fade>
				</div>

				<Fade bottom delay={isTabletOrMobile ? 0 : 400}>
					<h4 className="services-info">
						Dbamy o Twoje bezpieczeństwo – używamy tylko atestowanych
						urządzeń i narzędzi.
					</h4>
				</Fade>
			</div>
		</section>
	);
};

export default Services;
