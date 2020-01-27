import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from '../MediaQuery/MediaQuery';
import Fade from 'react-reveal/Fade';
import useTranslate from '../Translations/useTranslate';

const Contact = () => {
    const { isMobileOrTablet } = useMedia();
    const trans = useTranslate('contact');
    const buttonPropsTop = {
        link: "https://www.moment.pl/maniera-nail-bar",
        text: trans.button,
        internal: false,
        isLight: true,
        className: 'button-wrapper--violet'
    }
    const buttonPropsBottom = {
        link: "/faq",
        text: "faq",
        internal: true,
        isLight: true,
        className: 'button-wrapper--violet'
    }

    const buttonTop = isMobileOrTablet ? <LinkBoxMobile {...buttonPropsTop} /> : <LinkBox {...buttonPropsTop} />;
    const buttonBottom = isMobileOrTablet ? <LinkBoxMobile {...buttonPropsBottom} /> : <LinkBox {...buttonPropsBottom} />;

    return (
        <section className="section">
            <div className="contact">
                <Fade bottom>
                    <div className="contact-box contact-info">
                        <p className="contact-info__text">{trans.title}</p>
                        <p className="contact-info__address">Mokotowska 39, 00-551 Warszawa</p>
                        <p className="contact-info__phone">{trans.book}: +48 787 00 39 39</p>
                        {buttonTop}
                    </div>
                </Fade>
                <Fade bottom delay={200}>
                    <div className="contact-box contact-faq">
                        <p className="contact-faq__text">{trans.faqTitle}</p>
                        {buttonBottom}
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contact;