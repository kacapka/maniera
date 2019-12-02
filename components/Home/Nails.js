import { Fragment } from 'react';
import { LinkBox, LinkBoxMobile } from "../LinkBox";
import nail from "../../static/nail.png";
import useMedia from '../MediaQuery/MediaQuery';
import Slider from '../Slider';

const images = [
    nail, nail, nail, nail, nail, nail
];

const Nails = () => {
    const { isMobileOrTablet } = useMedia();

    const buttonProps = {
        link: "https://www.moment.pl/maniera-nail-bar",
        text: "umów wizytę",
        internal: false
    }

    const renderDesktopSlider = () => {
        return images.map((nail, i) => (
            <Fragment>
                <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                {i != images.length - 1 && <div className="nails-wrapper__vl" />}
            </Fragment>
        ));
    };

    const renderMobileSlider = () => {
        return (
            <Slider>
                <div className="nails-wrapper__inner">
                    <img src={images[0]} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={images[1]} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={images[2]} alt="paznokieć" className="nails-wrapper__nail" />
                </div>
                <div className="nails-wrapper__inner">
                    <img src={images[3]} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={images[4]} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={images[5]} alt="paznokieć" className="nails-wrapper__nail" />
                </div>
            </Slider>
        )
    };

    return (
        <section className="section">
            <div className="nails">
                <p className="nails-title">- STYLED BY MANIERA -</p>
                <h2 className="nails-subtitle">Śledzimy najnowsze trendy.</h2>
                <div className="nails-wrapper">
                    {isMobileOrTablet ? renderMobileSlider() : renderDesktopSlider()}
                </div>
                {isMobileOrTablet ? <LinkBoxMobile {...buttonProps} /> : <LinkBox {...buttonProps} />}
            </div>
        </section>
    );
};

export default Nails;
