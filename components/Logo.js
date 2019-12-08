import Link from "next/link";
import logoWhite from "../static/logo_white.png";
import logoBlack from "../static/logo.png";

const Logo = ({ isBlack }) => (
    <Link href="/">
        <a>
            <img
                src={isBlack ? logoBlack : logoWhite}
                alt="maniera nail + face bar"
                className="app-logo"
            />
        </a>
    </Link>
);

export default Logo;