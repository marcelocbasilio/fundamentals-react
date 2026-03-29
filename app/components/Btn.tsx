"use client"

import {FC, MouseEventHandler, ReactNode} from "react";

type BtnProps = {
    onClick: MouseEventHandler<HTMLButtonElement>
    children: ReactNode
}
const Btn: FC<BtnProps> = ({onClick, children}) => (
    <button
        className="border border-blue-500 px-4 py-1 rounded cursor-pointer bg-blue-500 hover:bg-blue-900 text-white"
        onClick={onClick}
    >
      {children}
    </button>
)

export default Btn
