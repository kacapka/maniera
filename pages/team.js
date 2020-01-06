import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import Head from "../components/head";
import Footer from "../components/Footer";
import useMedia from '../components/MediaQuery/MediaQuery';
import NavMobile from "../components/NavMobile";

import Container from '../components/Container';
import TeamHero from "../components/Team/TeamHero";
import TeamContent from "../components/Team/TeamContent";

export default () => {
    const { isMobileOrTablet } = useMedia();
    return (
        <Container>
            <Head title="Manièra - nasz zespół" />
            {isMobileOrTablet && <NavMobile />}
            <TeamHero />
            <TeamContent />
            <Footer />
        </Container>
    );
};