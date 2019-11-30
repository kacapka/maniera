import { Fragment } from 'react';
import Link from "next/link";
import classnames from 'classnames';

const ButtonInner = ({ text }) => (
	<Fragment>
		<svg height="60" width="680" xmlns="http://www.w3.org/2000/svg">
			<rect className="shape1" height="60" width="680" />
			<rect className="shape2" height="60" width="680" />
		</svg>
		<div className="button-wrapper__text">{text}</div>
	</Fragment>
);

export const LinkBox = ({ link, text, internal, isLight, className }) => {
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

export const LinkBoxMobile = ({ link, text, internal, isLight, className }) => {
	const linkClassName = classnames("mobile-button-wrapper", className, { "mobile-button-wrapper--light": isLight });

	return internal ? (
		<Link href={link}>
			<a className={linkClassName}>
				{text}
			</a>
		</Link>
	) : (
			<a href={link} target="_blank" className={linkClassName}>
				{text}
			</a>
		)
};