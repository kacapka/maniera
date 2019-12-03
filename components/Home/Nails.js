import { Fragment } from 'react';
import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from '../MediaQuery/MediaQuery';
import Slider from '../Slider';

import nail1 from "../../static/nails/nail1.png";
import nail2 from "../../static/nails/nail2.png";
import nail3 from "../../static/nails/nail3.png";
import nail4 from "../../static/nails/nail4.png";
import nail5 from "../../static/nails/nail5.png";
import nail6 from "../../static/nails/nail6.png";

const images = [
    nail1, nail2, nail3, nail4, nail5, nail6
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
            <Fragment key={i}>
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
