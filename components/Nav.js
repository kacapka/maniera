import Link from "next/link";
import classnames from 'classnames';
import InnerLink from "./InnerLink";

const Nav = ({ isBlack }) => {
	return (
		<nav>
			<ul>
				<li>
					<a
						href="https://www.moment.pl/maniera-nail-bar"
						target="_blank"
						className={classnames({ 'black': isBlack })}
					>
						<InnerLink text='UMÓW WIZYTĘ' />
					</a>
				</li>
				<li>
					<Link href="/pricing">
						<a className={classnames({ 'black': isBlack })}>
							<InnerLink text='CENNIK' />
						</a>
					</Link>
				</li>
				<li>
					<Link href="/faq">
						<a className={classnames({ 'black': isBlack })}>
							<InnerLink text='FAQ' />
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
