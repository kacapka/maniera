import Link from "next/link";

const LinkBox = ({ link, text }) => {
	return (
		<div className="link-box">
			<Link href={link}>
				<a>{text}</a>
			</Link>
		</div>
	);
};

export default LinkBox;
