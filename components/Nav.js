import Link from "next/link";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<a
						href="https://www.moment.pl/maniera-nail-bar"
						target="_blank"
					>
						UMÓW WIZYTĘ
					</a>
				</li>
				<li>
					<Link href="/pricing">
						<a>CENNIK</a>
					</Link>
				</li>
				<li>
					<Link href="/faq">
						<a>FAQ</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
