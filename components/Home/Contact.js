import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from '../MediaQuery/MediaQuery';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const { isMobileOrTablet } = useMedia();
    const buttonPropsTop = {
        link: "https://www.moment.pl/maniera-nail-bar",
        text: "REZERWACJA ONLINE",
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
                        <p className="contact-info__text">Czekamy na Ciebie!</p>
                        <p className="contact-info__address">Mokotowska 39, 00-551 Warszawa</p>
                        <p className="contact-info__phone">Rezerwacja telefoniczna: 22 628 39 39</p>
                        {buttonTop}
                    </div>
                </Fade>
                <Fade bottom delay={200}>
                    <div className="contact-box contact-faq">
                        <p className="contact-faq__text">Z przyjemnością odpowiemy na Twoje pytania. </p>
                        {buttonBottom}
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contact;