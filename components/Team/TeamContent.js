import { useContext } from 'react';
import TeamData from '../../data/team';
import LangContext from '../Context/langContext';
import Fade from 'react-reveal/Fade';
import useMedia from '../MediaQuery/MediaQuery';

const TeamContent = () => {
    const { lang } = useContext(LangContext);
    const { isMobileOrTablet } = useMedia();

    const renderTeam = () => {
        console.log('render');
        return TeamData.slice(1, TeamData.length).map((member, i) => {
            return (
                <Fade bottom delay={i * 100} key={i}>
                    <div className="team-member">
                        <img className="team-member__image" src={member.image} alt={member.name} />
                        <p className="team-member__name">
                            {member.name}
                        </p>
                        <p className="team-member__desc">
                            {member.desc[lang]}
                        </p>
                    </div>
                </Fade>
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