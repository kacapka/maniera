import PRICES from '../../data/prices';
import LinkBox from '../LinkBox';
import PricingItem from './PriceItem';

const PricingContent = () => {
    const renderPrices = () => {
        return PRICES.map(price => {
            return <PricingItem item={price} key={price.title} />
        });
    };

    return (
        <section className="pricing-content">
            <h2 className="pricing-title">Cennik</h2>
            <div className="pricing-wrapper">
                {renderPrices()}
            </div>
            <LinkBox text='zarezerwuj wizytę' href="https://www.moment.pl/maniera-nail-bar" internal='false' />
        </section>
    )
};

export default PricingContent;