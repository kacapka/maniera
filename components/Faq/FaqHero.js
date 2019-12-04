import Logo from "../Logo";
import useMedia from '../MediaQuery/MediaQuery';

const FaqHero = () => {
    const { isMobileOrTablet } = useMedia();
    return (
        <section className="faq-hero" >
            {!isMobileOrTablet && <Nav />}
            <Logo />
        </section >
    );
};

export default FaqHero;