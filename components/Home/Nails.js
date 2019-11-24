import LinkBox from "../LinkBox";
import nail from "../../static/nail.png";

const Nails = () => {
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
                    <div className="nails-wrapper__vl" />
                    <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                    <div className="nails-wrapper__vl" />
                    <img src={nail} alt="paznokieć" className="nails-wrapper__nail" />
                </div>
                <LinkBox link="https://www.moment.pl/maniera-nail-bar" text="zarezerwuj wizytę" internal={false} />
            </div>
        </section>
    );
};

export default Nails;
