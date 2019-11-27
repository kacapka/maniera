import { Fragment } from 'react';
import Link from "next/link";
import classnames from 'classnames';

const ButtonInner = ({ text }) => (
	<Fragment>
		<svg height="60" width="680" xmlns="http://www.w3.org/2000/svg">
			<rect class="shape1" height="60" width="680" />
			<rect class="shape2" height="60" width="680" />
		</svg>
		<div class="button-wrapper__text">{text}</div>
	</Fragment>
);

const LinkBox = ({ link, text, internal, isLight, className }) => {
	const linkClassName = classnames("button-wrapper", className, { "button-wrapper--light": isLight });

	return internal ? (
		<Link href={link}>
			<a className={linkClassName}>
				<ButtonInner text={text} />
			</a>
		</Link>
	) : (
			<a href={link} target="_blank" className={linkClassName}>
				<ButtonInner text={text} />
			</a>
		)
};

export default LinkBox;
