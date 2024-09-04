import { useEffect } from 'react'
import checkIcon from '../imgs/icon-check.svg'
import doneAudio from '../sounds/done.mp3'

export default function CheckBox({done, array, replace, item}){

    let audio = new Audio(doneAudio)

    return(
        <div className={`checkbox flex justify-center items-center`} onClick={(e) => { 
            !done ? audio.play() : null
            replace(array.indexOf(item), {id: item.id, task: item.task, done: !item.done}) 
            }}>
            <span className="check" style={{padding: `${done ? '0px' : '9px'}`}}></span>
            <img className='w-3 h-3' src={checkIcon} style={{animation: `${done ? 'popup .3s ease' : ''}`}}/>
        </div>
    )
}
