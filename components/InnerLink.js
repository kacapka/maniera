const InnerLink = ({ text }) => (
    <span className="link-inner">
        <span className="link-inner__default">{text}</span>
        <span className="link-inner__hover">{text}</span>
    </span>
);

export default InnerLink;