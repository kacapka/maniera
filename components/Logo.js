import Link from "next/link";
import logo from "../static/logo.png";

const Logo = () => (
    <Link href="/">
        <a>
            <img
                src={logo}
                alt="maniera nail + face bar"
                className="app-logo"
            />
        </a>
    </Link>
);

export default Logo;