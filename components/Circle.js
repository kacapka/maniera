const Circle = ({ text }) => (
    <div className="circle">
        <svg className="circle-text" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
            <title>Maniera</title>
            <defs>
                <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                    <animateTransform
                        attributeName="transform"
                        begin="0s"
                        dur="30s"
                        type="rotate"
                        from="0 250 250"
                        to="-360 250 250"
                        repeatCount="indefinite"
                    />
                </path>
            </defs>
            <text dy="-20">
                <textPath href="#textcircle">{text}</textPath>
            </text>
        </svg>
        <div className="circle-image" />
    </div>
);

export default Circle;