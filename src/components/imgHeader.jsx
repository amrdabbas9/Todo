import darkImage from '../imgs/bg-desktop-dark.jpg'
import lightImage from '../imgs/bg-desktop-light.jpg'
import mobDarkImage from '../imgs/bg-mobile-dark.jpg'
import mobLightImage from '../imgs/bg-mobile-light.jpg'

export default function ImageHeader({darkMode}){

    return(
        <>
            <img className='hidden sm:block w-full h-64 absolute -top-16' src={darkMode ? darkImage : lightImage}/>
            <img className='block sm:hidden w-full h-64 absolute -top-16' src={darkMode ? mobDarkImage : mobLightImage}/>
        </>
    )
}