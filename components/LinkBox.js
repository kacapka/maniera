import Link from "next/link";

const LinkBox = ({ link, text, internal }) => {
	return (
		<div className="link-box">
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
