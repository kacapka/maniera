import TEAM from '../../data/team';

const Team = () => {
    return (
        <section className="section">
            <div className="team">
                <div className="team-photo" />
                <div className="team-info">
                    <p className="team-info__name">MAGDALENA</p>
                    <p className="team-info__role">Główna konspiratorka</p>
                    <p className="team-info__desc">
                        Zawsze trochę zaganiana i roztargniona,
                        ale z ręką na pulsie. Ma milion pomysłów
                        na minutę, uwielbia wyzwania, a przy tym
                        wszystkim towarzyszy jej słodki piesek Tony.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Team;