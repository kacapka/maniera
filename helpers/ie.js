import { useEffect, useState } from 'react';

const useIE = () => {
    const [isIE, setIsIE] = useState(false);
    useEffect(() => {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        {
            setIsIE(true);
        }
    }, []);

    return isIE;
};

export default useIE;