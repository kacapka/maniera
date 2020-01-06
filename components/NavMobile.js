import { Fragment, useState, useContext } from 'react';
import Link from "next/link";
import classnames from 'classnames';
import navImg from '../static/ham_circle.png';
import useTranslate from './Translations/useTranslate';
import LangContext from './Context/langContext';

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang } = useContext(LangContext);
    const trans = useTranslate('nav');

    const toggleNav = () => setIsOpen(prev => !prev);

    return (
        <div>
            <div className="nav-burger" onClick={toggleNav}>
                <img src={navImg} className="nav-burger__img" />
                < div className={classnames("burger-inner", { open: isOpen })} />
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
                            {trans.book}
                        </a>
                    </li>
                    <li className="nav-mobile__line"></li>
                    <li>
                        <Link href="/team">
                            <a>
                                {trans.team}
                            </a>
                        </Link>
                    </li>
                    <li className="nav-mobile__line"></li>
                    <li>
                        <Link href="/pricing">
                            <a>
                                {trans.pricing}
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
                    <li className="nav-mobile__line"></li>
                    <li onClick={setLang}>
                        <span>
                            {lang === 'pl' ? 'en' : 'pl'}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavMobile;