import FaqItem from './FaqItem';
import useTranslate from '../Translations/useTranslate';

const FaqContent = () => {
    const trans = useTranslate('faq');

    const renderQA = () => {
        return trans.qa.map(item => {
            return <FaqItem {...item} key={item.q} />
        });
    };

    return (
        <section className="faq-content">
            <h2 className="faq-title">{trans.title}</h2>
            <div className="faq-wrapper">
                {renderQA()}
            </div>
        </section>
    )
};

export default FaqContent;