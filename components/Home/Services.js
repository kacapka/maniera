const Services = () => {
	return (
		<section className="section">
			<div className="services">
				<h2 className="services-title">Zajmiemy się Tobą.</h2>
				<div className="services-wrapper">
					<div className="services-item">
						<div className="services-item__line" />
						<h3 className="services-item__title">
							Stylizacja paznokci
						</h3>
						<p className="services-item__desc">
							Wykonujemy stylistykę paznokci <br />
							naturalnych oraz przedłużanych.
							<br />
							U nas umówisz się na manicure japoński,
							<br />
							SPA, a także hybrydowy i żelowy.
							<br />
							Możesz być pewna, że używamy produktów
							<br />
							najwyższej jakości.
						</p>
					</div>
					<div className="services-item">
						<div className="services-item__line" />
						<h3 className="services-item__title">
							Stylizacja rzęs
						</h3>
						<p className="services-item__desc">
							Oferujemy przedłużanie rzęs metodami
							<br /> 1:1, 2:1 oraz objętościowymi big volume.
							<br /> Połóż się wygodnie i pozwól naszym
							<br /> stylistkom działać cuda.
						</p>
					</div>
					<div className="services-item">
						<div className="services-item__line" />
						<h3 className="services-item__title">
							Zabiegi kosmetyczne
						</h3>
						<p className="services-item__desc">
							Nasz gabinet kosmetyczny oferuje gamę
							<br /> zabiegów pielęgnacyjnych przy użyciu
							<br /> luksusowych preparatów marki Sothys,
							<br /> a także urządzeń najnowszej generacji
							<br />
							Hydrafacial oraz Geneo+.
						</p>
					</div>
				</div>
				<h4 className="services-info">
					Dbamy o Twoje bezpieczeństwo – używamy tylko atestowanych
					urządzeń i narzędzi.
				</h4>
			</div>
		</section>
	);
};

export default Services;
