import LinkBox from "../LinkBox";

const Contact = () => {
    return (
        <section className="section">
            <div className="contact">
                <div className="contact-box contact-info">
                    <p className="contact-info__text">Czekamy na Ciebie!</p>
                    <p className="contact-info__address">Mokotowska 39, 00-551 Warszawa</p>
                    <p className="contact-info__phone">Rezerwacja telefoniczna: 22 628 39 39</p>
                    <LinkBox
                        link="https://www.moment.pl/maniera-nail-bar"
                        text="REZERWACJA ONLINE"
                        intrnal={false}
                        isLight
                    />
                </div>
                <div className="contact-box contact-faq">
                    <p className="contact-faq__text">Z przyjemnością odpowiemy na Twoje pytania. </p>
                    <LinkBox
                        link="/faq"
                        text="faq"
                        internal
                        isLight
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;