import {FC} from "react"

type MyNameProps = {
  name: string
  age: number
  birthday: Date
}

const MyName: FC<MyNameProps> = ({name, age, birthday}) => (
    <p>Sou o {name}, tenho {age} anos, por que nasci em {birthday.toLocaleDateString("pt-BR")}</p>
)

export default MyName
