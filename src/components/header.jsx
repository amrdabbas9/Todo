import sunIcon from '../imgs/icon-sun.svg'
import moonIcon from '../imgs/icon-moon.svg'

export default function Header({setDarkMode, darkMode}){

    return(
        <div className='flex items-center justify-between mb-10'>
            <h1 className='header text-white text-3xl font-bold'>TODO</h1>
            <img onClick={() => setDarkMode(currentMode => !currentMode)} src={darkMode ? sunIcon : moonIcon} />
        </div>
    )
}