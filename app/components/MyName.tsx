import {FC} from "react"

type MyNameProps = {
  name: string
  age: number
  birthday: Date
}

const MyName: FC<MyNameProps> = ({name, age, birthday}) => (
    <p className="p-1">I am {name}, I am {age} years old, because I was born in {birthday.toLocaleDateString("en")}</p>
)

export default MyName
