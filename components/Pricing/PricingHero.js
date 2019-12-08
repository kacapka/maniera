import Logo from "../Logo";
import useMedia from '../MediaQuery/MediaQuery';
import Nav from "../Nav";

const PricingHero = () => {
    const { isMobileOrTablet } = useMedia();
    return (
        <section className="pricing-hero">
            {!isMobileOrTablet && <Nav isBlack />}
            <Logo isBlack />
        </section>
    )
};

export default PricingHero;