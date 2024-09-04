
import CheckBox from "./checkbox"
import crossIcon from '../imgs/icon-cross.svg'
import { useEffect, useRef, useMemo } from "react"

export default function Task({item, dragPerson, draggedOverPerson,  replace, array, remove, index, setArray}){

    function handleSort(){
        const arrayClone = [...array]
        const temp = arrayClone[dragPerson.current]
        arrayClone[dragPerson.current] = arrayClone[draggedOverPerson.current]
        arrayClone[draggedOverPerson.current] = temp
        setArray(arrayClone)
    }

    return(
        <div key={item.id} draggable={true} 
            className='task flex items-center bg-white pl-5 pr-5 border-b border-b-zinc-600'

            onDragStart={() => dragPerson.current = index }
            onDragEnter={() => draggedOverPerson.current = index }
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault() }
            >
            <CheckBox done={item.done} replace={replace} item={item} array={array} />
            <input className={`tsk w-full outline-none text-lg p-5 ${item.done ? 'line-through text-gray-300 dark:text-gray-400' : 'dark:text-white'}`} readOnly value={item.task} />
            <img src={crossIcon} className='dark:text-white' onClick={() => { remove(array.indexOf(item)) }} />
        </div>
    )
}