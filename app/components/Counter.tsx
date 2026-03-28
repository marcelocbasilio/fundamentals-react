"use client"

import {useState} from "react";

const Counter = () => {
  const [counter, _setCounter] = useState(0)

  return (
      <div>
        <h2 className="text-2xl">Counter</h2>
        <p>Current number: {counter}</p>
      </div>
  )
}

export default Counter
