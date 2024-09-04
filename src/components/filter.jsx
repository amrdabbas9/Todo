


export default function Filter({isFilter, array, setIsFilter, completed, filter, setIsCompleted}){

    return(
        <>
            {
                array.length > 0 ?
                    <>
                        <div className='filter flex items-center justify-between text-sm bg-white rounded-br-lg rounded-bl-lg pt-3 pb-3 pl-5 pr-5'>
                        {/* <div className='filter flex items-center justify-between text-sm bg-white rounded-lg rounded-r-none rounded-l-none pt-3 pb-3 pl-5 pr-5 border-b border-b-zinc-600'> */}
                            <p>{completed(false).length} Tasks Left</p>
                            <div className="hidden sm:block">
                                <button className={`${!isFilter ? 'bactive' : null} mr-2 transition hover:text-black dark:hover:text-white`} onClick={() => setIsFilter(() => false)}>All</button>
                                <button className={`mr-2 transition hover:text-black dark:hover:text-white`} onClick={() => {
                                    setIsFilter(() => true)
                                    setIsCompleted(() => false)
                                }}>Active</button>
                                <button className={`mr-2 transition hover:text-black dark:hover:text-white`} onClick={() => {
                                    setIsFilter(() => true)
                                    setIsCompleted(() => true)
                                }}>Completed</button>
                            </div>
                            <button className="transition hover:text-black dark:hover:text-white" onClick={() => filter((item) => !item.done)}>Clear Completed</button>
                        </div>

                        <div className="sm:hidden mt-10 filter flMob flex items-center justify-evenly text-sm bg-white rounded-lg pt-3 pb-3 pl-5 pr-5">
                        {/* <div className="sm:hidden mt-10 filter flex items-center justify-evenly text-sm bg-white rounded-lg pt-3 pb-3 pl-5 pr-5 border-b border-t border-zinc-600"> */}
                            <button className={`${!isFilter ? 'bactive' : null} hover:text-black dark:hover:text-white`} onClick={() => setIsFilter(() => false)}>All</button>
                            <button className={` hover:text-black dark:hover:text-white`} onClick={() => {
                                setIsFilter(() => true)
                                setIsCompleted(() => false)
                            }}>Active</button>
                            <button className={` hover:text-black dark:hover:text-white`} onClick={() => {
                                setIsFilter(() => true)
                                setIsCompleted(() => true)
                            }}>Completed</button>
                        </div>
                        <p className='drop text-center mt-10'>Drag and Drop to reoder Tasks</p>

                    </>
                : 
                null
            }
        </>
    )
}