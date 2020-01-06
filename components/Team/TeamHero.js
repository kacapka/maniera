import { useContext } from 'react';
import Logo from "../Logo";
import useMedia from '../MediaQuery/MediaQuery';
import Nav from "../Nav";
import TeamData from '../../data/team';
import LangContext from '../Context/langContext';

const TeamHero = () => {
    const { isMobileOrTablet } = useMedia();
    const { lang } = useContext(LangContext);
    const { name, desc, image } = TeamData[0];

    return (
        <section className="team-hero" >
            {!isMobileOrTablet && <Nav isBlack />}
            <div className="team-hero__wrap">
                <img src={image} alt="name" className="team-hero__image" />
                <div className="team-hero__info">
                    <p className="team-hero__name">{name}</p>
                    <p className="team-hero__desc">{desc[lang]}</p>
                </div>
            </div>
            <Logo isBlack />
        </section >
    );
};

export default TeamHero;