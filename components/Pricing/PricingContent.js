import PRICES from '../../data/prices';
import { LinkBox, LinkBoxMobile } from '../LinkBox';
import PricingItem from './PriceItem';
import useMedia from '../MediaQuery/MediaQuery';

const PricingContent = () => {
    const { isMobile } = useMedia();
    const renderPrices = () => {
        return PRICES.map(price => {
            return <PricingItem {...price} key={price.title} />
        });
    };

    const buttonProps = {
        text: 'umów wizytę',
        link: "https://www.moment.pl/maniera-nail-bar",
        internal: false,
        className: "pricing-button"
    }

    return (
        <section className="pricing-content">
            <h2 className="pricing-title">Cennik</h2>
            <div className="pricing-wrapper">
                {renderPrices()}
            </div>
            {isMobile ? <LinkBoxMobile {...buttonProps} /> : <LinkBox {...buttonProps} />}
        </section>
    )
};

export default PricingContent;