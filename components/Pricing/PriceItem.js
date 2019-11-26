import { useState } from 'react';
import classnames from 'classnames';
import Collapse from '../Collapse';

const PricingItem = ({ title, prices }) => {
    const [open, setOpen] = useState(false);

    const renderPrices = () => {
        return prices.map(p => (
            <div className='pricing-item__wrapper'>
                <p className='pricing-item__type'>{p.name}</p>
                <p className='pricing-item__price'>{p.price}</p>
            </div>
        ))
    };

    return (
        <div className='pricing-item'>
            <p className={classnames('pricing-item__title', { 'pricing-item__title--open': open })} onClick={() => setOpen(prev => !prev)}>{title}</p>
            <Collapse open={open}>
                {renderPrices()}
            </Collapse>
        </div>
    );
};

export default PricingItem;