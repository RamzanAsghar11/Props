"use client"
import { useState } from "react"

const State = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        
        setCount(count + 1)
    }
    const handleDecrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    return (
        <div className="w-full flex flex-col justify-center  gap-3 items-center ">
            <h1 className="text-7xl">{count}</h1>
            <button className="py-2 px-10 bg-blue-700 text-white rounded-md" onClick={handleIncrement}>
                Increment
            </button>

            <button className="py-2 px-10 bg-red-700 text-white rounded-md " onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    )
}

export default State