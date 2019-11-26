import classnames from 'classnames';

const Collapse = ({ open, children }) => (
    <div className={classnames('collapse', { 'collapse--open': open, 'collapse--close': !open })}>
        {open && children}
    </div>
);

export default Collapse;