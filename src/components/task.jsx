
import CheckBox from "./checkbox"
import crossIcon from '../imgs/icon-cross.svg'

export default function Task({item, replace, array, remove}){

    return(
        <div className='task flex items-center bg-white pl-5 pr-5 border-b border-b-zinc-600'>
            <CheckBox done={item.done} replace={replace} item={item} array={array} />
            <input className={`tsk w-full outline-none text-lg p-5 ${item.done ? 'line-through text-gray-300 dark:text-gray-400' : 'dark:text-white'}`} readOnly value={item.task} />
            <img src={crossIcon} className='' onClick={() => { remove(array.indexOf(item)) }} />
        </div>
    )
}