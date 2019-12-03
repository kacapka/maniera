import { Fragment, useState } from 'react';
import Link from "next/link";
import classnames from 'classnames';

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(prev => !prev);

    return (
        <div>
            <div className="nav-burger" onClick={toggleNav}>
                <div className={classnames("burger-inner", { open: isOpen })} />
                <div className={classnames("burger-inner", { open: isOpen })} />
                <div className={classnames("burger-inner", { open: isOpen })} />
            </div>
            <div className={classnames("nav-mobile", { open: isOpen })}>
                <ul>
                    <li onClick={() => setIsOpen(false)}>
                        <a
                            href="https://www.moment.pl/maniera-nail-bar"
                            target="_blank"
                        >
                            UMÓW WIZYTĘ
                        </a>
                    </li>
                    <li className="nav-mobile__line"></li>
                    <li>
                        <Link href="/pricing">
                            <a>
                                CENNIK
                            </a>
                        </Link>
                    </li>
                    <li className="nav-mobile__line"></li>
                    <li>
                        <Link href="/faq">
                            <a>
                                FAQ
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavMobile;