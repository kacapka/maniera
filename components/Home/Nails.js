import { LinkBox, LinkBoxMobile } from "../LinkBox";
import nail from "../../static/nail.png";
import useMedia from '../MediaQuery/MediaQuery';

const Nails = () => {
    const { isMobileOrTablet } = useMedia();

    const buttonProps = {
        link: "https://www.moment.pl/maniera-nail-bar",
        text: "umów wizytę",
        internal: false
    }
    return (
        <section className="section">
            <div className="nails">
                <p className="nails-title">- STYLED BY MANIERA -</p>
                <h2 className="nails-subtitle">Śledzimy najnowsze trendy.</h2>
                <div className="nails-wrapper">
                    <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                    {!isMobileOrTablet && (
                        <>
                            <div className="nails-wrapper__vl" />
                            <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                            <div className="nails-wrapper__vl" />
                            <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                            <div className="nails-wrapper__vl" />
                            <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                        </>
                    )}
                </div>
                {isMobileOrTablet ? <LinkBoxMobile {...buttonProps} /> : <LinkBox {...buttonProps} />}
            </div>
        </section>
    );
};

export default Nails;
