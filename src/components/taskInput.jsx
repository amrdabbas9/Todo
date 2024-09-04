import { forwardRef } from "react"


let TaskInput = ({append, array}, ref) => {

    function handlesubmit(e){
        e.preventDefault()
        let newTask = ref.current.value
        append({id: array.length > 0 ? array[0].id + 1 : 1, task: newTask, done: false})
        ref.current.value = ""
    }

    return(
        <form onSubmit={handlesubmit}>
            <input type='text' placeholder='Create a new todo...' ref={ref} className='taskinput dark:text-white w-full outline-none border-none text-lg p-3 pl-16 pr-16 rounded-md mb-8' />
        </form>
    )
}

export const TaskForwardInput = forwardRef(TaskInput)