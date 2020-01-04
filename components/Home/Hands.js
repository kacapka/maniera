import Circle from '../Circle';
import useTranslate from '../Translations/useTranslate';

const Hands = () => {
    const trans = useTranslate('hands');
    return (
        <section className="section">
            <div className="hands">
                <Circle text={trans.circle} />
            </div>
        </section>
    )
};

export default Hands;