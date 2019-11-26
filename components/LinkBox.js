import Link from "next/link";
import classnames from 'classnames';

const LinkBox = ({ link, text, internal, isLight, className }) => {
	return (
		<div className={classnames("link-box", className, { "link-box--light": isLight })}>
			{internal ? (
				<Link href={link}>
					<a>{text}</a>
				</Link>
			) : (
					<a href={link} target="_blank">{text}</a>
				)}

		</div>
	);
};

export default LinkBox;
