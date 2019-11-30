import Link from "next/link";
import InnerLink from "./InnerLink";

const Footer = () => {
	return (
		<footer className="footer">
			<ul className="footer-list">
				<li>
					<a
						href="https://www.moment.pl/maniera-nail-bar"
						target="_blank"
					>
						<InnerLink text='UMÓW WIZYTĘ' />
					</a>
				</li>
				{/* <li>
					<Link href="/pricing">
						<a>NASZ ZESPÓŁ</a>
					</Link>
				</li> */}
				<li>
					<Link href="/pricing" prefetch>
						<a>
							<	InnerLink text='CENNIK' />
						</a>
					</Link>
				</li>
				<li>
					<Link href="/faq" prefetch>
						<a>
							<InnerLink text='FAQ' />
						</a>
					</Link>
				</li>
			</ul>
			<ul className="footer-list footer-list--address">
				<li>Maniera Nail & Spa Bar</li>
				<li>Mokotowska 39, Warszawa</li>
				<li>tel. 22 628 39 39</li>
			</ul>
			<ul className="footer-list">
				<li className="footer-list__follow">FOLLOW US</li>
				<li>
					<a
						href="https://www.instagram.com/manieranailbar/?hl=pl"
						target="_blank"
					>
						<InnerLink text='Instagram' />
					</a>
				</li>
				<li>
					<a
						href="https://www.moment.pl/maniera-nail-bar"
						target="_blank"
					>
						<InnerLink text='Facebook' />
					</a>
				</li>
				<li>
					<a
						href="https://www.moment.pl/maniera-nail-bar"
						target="_blank"
					>
						<InnerLink text='Pinterest' />
					</a>
				</li>
			</ul>
			<div className="footer-authors">
				<p className="footer-authors__text">realizacja: {" "}</p>
				<div>
					<a href="https://www.instagram.com/domi.suszek/" target="_blank" className="footer-authors__text">Domi.Suszek </a>
					<a href="" target="_blank" className="footer-authors__text">J.Gostkiewicz </a>
					<a href="https://www.instagram.com/_kacapka/" target="_blank" className="footer-authors__text">W.Urbański</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
