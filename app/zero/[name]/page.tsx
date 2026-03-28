import MyName from "@/app/components/MyName";
import Hobbies from "@/app/components/Hobbies";
import {Img} from "@/app/components/Img";

export default function Page() {
  return (
      <div className="page">
        <MyName name="Marcelo" age={46} birthday={new Date(1980, 8, 17)}/>
        <Hobbies/>
        <Img/>
      </div>
  )
}