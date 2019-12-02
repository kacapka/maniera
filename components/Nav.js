import Link from "next/link";
import InnerLink from "./InnerLink";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<a
						href="https://www.moment.pl/maniera-nail-bar"
						target="_blank"
					>
						<InnerLink text='UMÓW WIZYTĘ' />
					</a>
				</li>
				<li>
					<Link href="/pricing">
						<a>
							<InnerLink text='CENNIK' />
						</a>
					</Link>
				</li>
				<li>
					<Link href="/faq">
						<a>
							<InnerLink text='FAQ' />
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
