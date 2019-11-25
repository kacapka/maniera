const PricingItem = ({ item }) => {
    return (
        <div className='pricing-item'>
            <p className='pricing-item__title'>{item.title}</p>
        </div>
    );
};

export default PricingItem;