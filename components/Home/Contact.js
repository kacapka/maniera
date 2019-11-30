import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from '../MediaQuery/MediaQuery';

const Contact = () => {
    const { isMobile } = useMedia();
    const buttonPropsTop = {
        link: "https://www.moment.pl/maniera-nail-bar",
        text: "REZERWACJA ONLINE",
        internal: false,
        isLight: true
    }
    const buttonPropsBottom = {
        link: "/faq",
        text: "faq",
        internal: true,
        isLight: true
    }

    return (
        <section className="section">
            <div className="contact">
                <div className="contact-box contact-info">
                    <p className="contact-info__text">Czekamy na Ciebie!</p>
                    <p className="contact-info__address">Mokotowska 39, 00-551 Warszawa</p>
                    <p className="contact-info__phone">Rezerwacja telefoniczna: 22 628 39 39</p>
                    {isMobile ? <LinkBoxMobile {...buttonPropsTop} /> : <LinkBox {...buttonPropsTop} />}
                </div>
                <div className="contact-box contact-faq">
                    <p className="contact-faq__text">Z przyjemnością odpowiemy na Twoje pytania. </p>
                    {isMobile ? <LinkBoxMobile {...buttonPropsBottom} /> : <LinkBox {...buttonPropsBottom} />}
                </div>
            </div>
        </section>
    );
};

export default Contact;