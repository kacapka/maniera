import Logo from "../Logo";
import useMedia from '../MediaQuery/MediaQuery';


const PricingHero = () => {
    const { isMobileOrTablet } = useMedia();
    return (
        <section className="pricing-hero">
            {!isMobileOrTablet && <Nav />}
            <Logo isBlack />
        </section>
    )
};

export default PricingHero;