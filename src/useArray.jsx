import { useState, useCallback, useRef } from "react"
import { useLocalStorage } from './useLocalStorage'

export default function useArray(arr){
    // const [array, setArray] = useState(arr)
    const [array, setArray] = useLocalStorage('array', arr)
    const filteredArray = useRef([])

    const push = useCallback((ele) => {
        setArray(currentArray => {
            return [...currentArray, ele]
        })
    },[])

    const append = useCallback((ele) => {
        setArray(currentArray => {
            return [ele, ...currentArray]
        })
    },[])

    const replace = useCallback((index, newElement) =>{
        setArray(currentArray => {
            return [...currentArray.slice(0,index), newElement , ...currentArray.slice(index + 1)]
    })
    },[])

    const filter = useCallback((func) => {
        setArray(currentArray => {
            return currentArray.filter(func)
    })
    },[])

    const completed = useCallback((status) => {
        filteredArray.current.value = [...array.filter((item) => status ? item.done : !item.done)]
        return filteredArray.current.value
    }, [array])

    const remove = useCallback((index) =>{
        setArray(currentArray => {
            return [...currentArray.slice(0,index), ...currentArray.slice(index + 1)]
    })
    },[])

    const clear = useCallback(() => {
        setArray([])
    },[])
    

    return [ array, push, append, setArray, replace, filter, remove, clear, completed ]

}