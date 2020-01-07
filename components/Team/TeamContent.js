import { useContext, Fragment } from 'react';
import TeamData from '../../data/team';
import LangContext from '../Context/langContext';
// import Fade from 'react-reveal/Fade';
// import useMedia from '../MediaQuery/MediaQuery';
import FadeIn from '../FadeIn';

const TeamContent = () => {
    const { lang } = useContext(LangContext);
    // const { isMobileOrTablet } = useMedia();

    const renderTeam = () => {
        return TeamData.slice(1, TeamData.length).map((member, i) => {
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
        <div className="team-content">
            {renderTeam()}
        </div>
    );

};

export default TeamContent;