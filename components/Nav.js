import { useContext } from 'react';
import Link from "next/link";
import classnames from 'classnames';
import InnerLink from "./InnerLink";
import useTranslate from './Translations/useTranslate';

import LangContext from './Context/langContext';

const Nav = ({ isBlack }) => {
	const { lang, setLang } = useContext(LangContext);
	const trans = useTranslate('nav');

	return (
		<nav>
			<ul>
				<li>
					<a
						href="https://www.moment.pl/maniera-nail-bar"
						target="_blank"
						className={classnames({ 'black': isBlack })}
					>
						<InnerLink text={trans.book} />
					</a>
				</li>
				<li>
					<Link href="/team">
						<a className={classnames({ 'black': isBlack })}>
							<InnerLink text={trans.team} />
						</a>
					</Link>
				</li>
				<li>
					<Link href="/pricing">
						<a className={classnames({ 'black': isBlack })}>
							<InnerLink text={trans.pricing} />
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
				<li onClick={setLang}>
					<span className={classnames({ 'black': isBlack })}>
						<InnerLink text={lang === 'pl' ? 'en' : 'pl'} />
					</span>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
