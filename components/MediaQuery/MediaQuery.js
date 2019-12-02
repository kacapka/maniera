import { useMediaQuery } from 'react-responsive'

const useMedia = () => {
    const isSmallDesktop = useMediaQuery({
        query: '(max-width: 1366px)'
    });
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width: 1024px)'
    });
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    });
    const isSmallMobile = useMediaQuery({
        query: '(max-width: 500px)'
    });
    // console.log('isMobile', isMobile);
    // console.log('isMobileOrTablet ', isMobileOrTablet);
    //   const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    //   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    //   const isTabletOrMobileDevice = useMediaQuery({
    //     query: '(max-device-width: 1224px)'
    //   })
    //   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    //   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return { isMobileOrTablet, isMobile, isSmallDesktop, isSmallMobile }
}

export default useMedia;