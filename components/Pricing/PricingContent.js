import PRICES from '../../data/prices';
import { LinkBox, LinkBoxMobile } from '../LinkBox';
import PricingItem from './PriceItem';
import useMedia from '../MediaQuery/MediaQuery';
import useTranslate from '../Translations/useTranslate';

const PricingContent = () => {
    const { isMobileOrTablet } = useMedia();
    const trans = useTranslate('pricingPage');

    const renderPrices = () => {
        return PRICES.map(price => {
            return <PricingItem {...price} key={price.title} />
        });
    };

    const buttonProps = {
        text: trans.button,
        link: "https://www.moment.pl/maniera-nail-bar",
        internal: false,
        className: "pricing-button button-wrapper--beige"
    }

    return (
        <section className="pricing-content">
            <h2 className="pricing-title">{trans.title}</h2>
            <div className="pricing-wrapper">
                {renderPrices()}
            </div>
            {isMobileOrTablet ? <LinkBoxMobile {...buttonProps} /> : <LinkBox {...buttonProps} />}
        </section>
    )
};

export default PricingContent;