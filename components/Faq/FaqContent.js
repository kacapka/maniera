import QA from '../../data/qa';
import FaqItem from './FaqItem';

const FaqContent = () => {
    const renderQA = () => {
        return QA.map(item => {
            return <FaqItem {...item} key={item.q} />
        });
    };

    return (
        <section className="faq-content">
            <h2 className="faq-title">Faq</h2>
            <div className="faq-wrapper">
                {renderQA()}
            </div>
        </section>
    )
};

export default FaqContent;