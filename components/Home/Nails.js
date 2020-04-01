import { Fragment } from 'react';
import { LinkBox, LinkBoxMobile } from "../LinkBox";
import useMedia from '../MediaQuery/MediaQuery';
import Slider from '../Slider';
import Fade from 'react-reveal/Fade';
import useTranslate from '../Translations/useTranslate';

import nail1 from "../../static/nails/nail1.png";
import nail2 from "../../static/nails/nail2.png";
import nail3 from "../../static/nails/nail3.png";
import nail4 from "../../static/nails/nail4.png";
import nail5 from "../../static/nails/nail5.png";
import nail6 from "../../static/nails/nail6.png";

import nailLuty1 from "../../static/nails/nailLuty1.png";
import nailLuty2 from "../../static/nails/nailLuty2.png";
import nailLuty3 from "../../static/nails/nailLuty3.png";


import nailMarzec1 from "../../static/nails/marzec_1.png";
import nailMarzec2 from "../../static/nails/marzec_2.png";
import nailMarzec3 from "../../static/nails/marzec_3.png";
import nailMarzec4 from "../../static/nails/marzec_4.png";
import nailMarzec5 from "../../static/nails/marzec_5.png";


const images = [
    nail1, nail2, nail3, nail4, nail5, nail6
];

const nailsLuty = [
    nailLuty1, nailLuty2, nailLuty3
];

const nailsMarzec = [
    nailMarzec1, nailMarzec2, nailMarzec3, nailMarzec4, nailMarzec5
];

const Nails = () => {
    const { isMobileOrTablet } = useMedia();
    const trans = useTranslate('nails');

    const buttonProps = {
        link: "https://www.moment.pl/maniera-nail-bar",
        text: trans.button,
        internal: false,
        className: 'button-wrapper--mint'
    }

    const renderNailsForLuty = () => {
        return nailsLuty.map((nail, i) => {
            return (
                <Fragment key={i}>
                    <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                    {i != nailsLuty.length - 1 && <div className="nails-wrapper__vl" />}
                </Fragment>
            );
        });
    }

    const renderNailsForMarzec = () => {
        return nailsMarzec.map((nail, i) => {
            return (
                <Fragment key={i}>
                    <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                    {i != nailsMarzec.length - 1 && <div className="nails-wrapper__vl" />}
                </Fragment>
            );
        });
    }

    const renderDesktopSlider = () => {
        return (
            <Slider>
                <div className="nails-wrapper__inner">
                    {renderNailsForMarzec()}
                </div>
                <div className="nails-wrapper__inner">
                    {renderNailsForLuty()}
                </div>
                <div className="nails-wrapper__inner">
                    {images.map((nail, i) => (
                        <Fragment key={i}>
                            <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                            {i != images.length - 1 && <div className="nails-wrapper__vl" />}
                        </Fragment>
                    ))}
                </div>
            </Slider>
        );
    };

    const renderMobileSlider = () => {
        return (
            <Slider>
                <div className="nails-wrapper__inner">
                    <img src={nailsMarzec[0]} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={nailsMarzec[1]} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={nailsMarzec[2]} alt="paznokieć" className="nails-wrapper__nail" />
                </div>
                <div className="nails-wrapper__inner">
                    <img src={nailsMarzec[3]} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={nailsMarzec[4]} alt="paznokieć" className="nails-wrapper__nail" />
                </div>
                <div className="nails-wrapper__inner">
                    {renderNailsForLuty()}
                </div>
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
                <Fade bottom>
                    <p className="nails-title">- STYLED BY MANIERA -</p>
                </Fade>
                <Fade bottom>
                    <h2 className="nails-subtitle">{trans.subtitle}</h2>
                </Fade>
                <Fade bottom delay={200}>
                    <div className="nails-wrapper">
                        {isMobileOrTablet ? renderMobileSlider() : renderDesktopSlider()}
                    </div>
                </Fade>
                <Fade bottom delay={500}>
                    {isMobileOrTablet ? <LinkBoxMobile {...buttonProps} /> : <LinkBox {...buttonProps} />}
                </Fade>
            </div>
        </section>
    );
};

export default Nails;
