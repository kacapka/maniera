import { useContext } from 'react';
import LangContext from '../Context/langContext';

const Wine = () => {
    const { lang } = useContext(LangContext);
    const style = {
        backgroundImage: `url(${lang === 'pl' ? 'https://maniera.s3.eu-central-1.amazonaws.com/prosecco.jpg' : 'https://maniera.s3.eu-central-1.amazonaws.com/prosseco_en.jpg'})`
    };

    return (
        <section className="section">
            <div className="wine" style={style}>
            </div>
        </section>
    );
};

export default Wine;