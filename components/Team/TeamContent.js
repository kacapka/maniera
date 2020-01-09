import { useContext, Fragment } from 'react';
import TeamData from '../../data/team';
import LangContext from '../Context/langContext';
import FadeIn from '../FadeIn';
import useMedia from '../MediaQuery/MediaQuery';
import Nav from "../Nav";
import Logo from "../Logo";

const TeamContent = () => {
    const { isMobileOrTablet } = useMedia();
    const { lang } = useContext(LangContext);

    const renderTeam = () => {
        return TeamData.map((member, i) => {
            return (
                <FadeIn key={i}>
                    <div className="team-member">
                        <img className="team-member__image" src={member.image} alt={member.name} />
                        <p className="team-member__name">
                            {member.name}
                        </p>
                        <p className="team-member__desc">
                            {member.desc[lang]}
                        </p>
                    </div>
                </FadeIn>
            );
        });
    };

    return (
        <section className="team-page">
            {!isMobileOrTablet && <Nav isBlack />}
            <div className="team-content">
                {renderTeam()}
            </div>
            <Logo isBlack />
        </section>
    );

};

export default TeamContent;