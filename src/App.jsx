// Hooks
import { useState, useRef } from 'react'
import useArray from './useArray'

// CSS Files :

import './App.css'

// Components :
import Task from './components/task'
import Filter from './components/filter'
import Header from './components/header'
import ImageHeader from './components/imgHeader'
import { TaskForwardInput } from './components/taskInput'
import { useLocalStorage } from './useLocalStorage'
import { Reorder } from 'framer-motion'



function App() {

  // Local Storage :
  const [darkMode, setDarkMode] = useLocalStorage('Dark Mode', true)

  // States :
  const [isFilter, setIsFilter] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [ array, push, append, setArray, replace, filter, remove, clear, completed, active ] = useArray([
    {id: 6, task:"Complete Online Javascript Course", done:false},
    {id: 5, task:"Jog Around the Park For 3x", done:false},
    {id: 4, task:"10 Minutes Meditation", done:false},
    {id: 3, task:"Read For 1 Hour", done:false},
    {id: 2, task:"Pick Up Groceries", done:false},
    {id: 1, task:"Complete Todo App on Frontend Mentor", done:false},
  ])

  // Refs :
  const inputRef = useRef()

  

  let tasksList = isFilter ? completed(isCompleted) : array
  
  return (

    <div className={`${darkMode ? 'dark' : null} todo pb-10` }>

      <ImageHeader darkMode={darkMode} />
      
      <div className='container w-4/5 lg:w-2/5 md:w-3/5 m-auto mt-16'>
        
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />

        <TaskForwardInput append={append} array={array} ref={inputRef} />

        <Reorder.Group axis="y" values={tasksList} onReorder={isFilter ? () => array : setArray}>
          <div className='tasks text-gray-400 dark:text-black dark:shadow-black rounded-md rounded-bl-none rounded-br-none overflow-hidden'>
            {tasksList.map((item) => (
              <Reorder.Item as='div' key={item.id} value={item}> 
                <Task item={item} replace={replace} array={array} remove={remove}/>
              </Reorder.Item>
            ))}
          </div>
          <Filter isFilter={isFilter} array={array} setIsFilter={setIsFilter} completed={completed} clear={clear} filter={filter} setIsCompleted={setIsCompleted}/>
        </Reorder.Group>
          
      </div>

    </div>
  )
}

export default App
