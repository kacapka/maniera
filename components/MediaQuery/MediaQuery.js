import { useMediaQuery } from 'react-responsive'

const useMedia = () => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 1024px)'
    })
    //   const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    //   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    //   const isTabletOrMobileDevice = useMediaQuery({
    //     query: '(max-device-width: 1224px)'
    //   })
    //   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    //   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return { isMobile }
}

export default useMedia;