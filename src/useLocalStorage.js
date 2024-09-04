import React, { useEffect, useState } from "react";

export function useLocalStorage(key, value){
    // const [local, setLocal] = useState({key, value})
    const [local, setLocal] = useState(() => {
        const localValue = localStorage.getItem(key)
        if(localValue == null){
            if(typeof value === 'function'){
                return value()
            }else{
                return value
            }
        }else{
            return JSON.parse(localValue)
        }
    })
    
    
    useEffect(() => {
        if(local === undefined){
            localStorage.removeItem(key)
        }else{
            localStorage.setItem(key, JSON.stringify(local))
        }
    },[local, key])



    return [local, setLocal]
}