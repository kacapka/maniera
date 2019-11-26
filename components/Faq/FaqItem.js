import { useState } from 'react';
import classnames from 'classnames';
import Collapse from '../Collapse';

const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='faq-item'>
            <p className={classnames('faq-item__title', { 'faq-item__title--open': open })} onClick={() => setOpen(prev => !prev)}>{q}</p>
            <Collapse open={open}>
                <p className='faq-item__answer'>{a}</p>
            </Collapse>
        </div>
    );
};

export default FaqItem;