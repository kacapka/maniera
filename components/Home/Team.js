import Fade from 'react-reveal/Fade';

const Team = () => {
    return (
        <section className="section">
            <div className="team">
                <Fade bottom>
                    <div className="team-photo" />
                </Fade>
                <Fade bottom cascade delay={200}>
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
                </Fade>
            </div>
        </section>
    );
};

export default Team;