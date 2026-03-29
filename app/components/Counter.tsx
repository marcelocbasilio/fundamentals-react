"use client"

import {useState} from "react";
import Btn from "@/app/components/Btn";

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [thing, setThing] = useState("")

  return (
      <div className="grid gap-y-4">
        <h2 className="text-2xl">Counter</h2>
        <p>Current number: {counter}</p>
        <div className="flex gap-x-2">
          <Btn
              onClick={() => {
                setCounter((count) => count - 3)
              }}
          >-3
          </Btn>

          <Btn
              onClick={() => {
                setCounter((count) => count - 1)
              }}
          >-1
          </Btn>
          <Btn
              onClick={() => {
                setCounter((count) => count + 1)
              }}
          >+1
          </Btn>

          <Btn
              onClick={() => {
                setCounter((count) => count + 3)
              }}
          >+3
          </Btn>
        </div>

        <div className="flex gap-x-2">
          <input
              className="px-4 py-1 border border-gray-500"
              value={thing}
              onChange={(e) => setThing(e.target.value)}
          />
          <Btn
              onClick={() => {
                setThing("")
              }}
          >Clear
          </Btn>
        </div>
      </div>
  )
}

export default Counter
