import { useContext } from 'react';
import { LinkBox, LinkBoxMobile } from "./LinkBox";
import useMedia from './MediaQuery/MediaQuery';
import Fade from 'react-reveal/Fade';
import useTranslate from './Translations/useTranslate';
import LangContext from './Context/langContext';
import navImg from '../static/ham_circle.png';

import svg_en from './svg/modal_en';
import svg_pl from './svg/modal_pl';

const Modal = ({ closeModal }) => {
    const { isMobileOrTablet } = useMedia();
    const trans = useTranslate('modal');
    const { lang } = useContext(LangContext);


    const buttonProps = {
        link: "https://maniera.shoplo.com/",
        text: trans.button,
        internal: false,
        className: 'button-wrapper--mint modal-button'
    }

    return (
        <div className="modal-overlay">
            <Fade bottom delay={500}>
                <div className="modal-box">
                    <div className="modal-content">
                        <h2 className="modal-title">- MANIÈRA SHOP -</h2>
                        <p className="modal-text">
                            {trans.textTop}<br />
                            {trans.textMiddle} <br />
                            {trans.textBottom}
                        </p>
                        {isMobileOrTablet ? <LinkBoxMobile {...buttonProps} /> : <LinkBox {...buttonProps} />}
                        <div className="modal-image">
                            {lang === "_pl" ? svg_pl : svg_en}
                        </div>
                        <div className="modal-close" onClick={closeModal}>
                            <img src={navImg} className="modal-close__img" />
                            <div className="modal-close__inner" />
                            <div className="modal-close__inner" />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Modal;