import Fade from 'react-reveal/Fade';
import useMedia from '../MediaQuery/MediaQuery';
import useTranslate from '../Translations/useTranslate';

const Services = () => {
	const { isTabletOrMobile } = useMedia();
	const trans = useTranslate('services');

	return (
		<section className="section">
			<div className="services">
				<Fade bottom>
					<h2 className="services-title">{trans.title}</h2>
				</Fade>
				<div className="services-wrapper">
					<Fade bottom>
						<div className="services-item">
							<div className="services-item__line" />
							<h3 className="services-item__title">
								{trans.subtitleLeft}
							</h3>
							<p className="services-item__desc">
								{trans.descLeft}
							</p>
						</div>
					</Fade>
					<Fade bottom delay={isTabletOrMobile ? 0 : 200}>
						<div className="services-item">
							<div className="services-item__line" />
							<h3 className="services-item__title">
								{trans.subtitleMiddle}
							</h3>
							<p className="services-item__desc">
								{trans.descMiddle}
							</p>
						</div>
					</Fade>
					<Fade bottom delay={isTabletOrMobile ? 0 : 400}>
						<div className="services-item">
							<div className="services-item__line" />
							<h3 className="services-item__title">
								{trans.subtitleRight}
							</h3>
							<p className="services-item__desc">
								{trans.descRight}
							</p>
						</div>
					</Fade>
				</div>
				<Fade bottom delay={isTabletOrMobile ? 0 : 400}>
					<h4 className="services-info">
						{trans.bottom}
					</h4>
				</Fade>
			</div>
		</section>
	);
};

export default Services;
