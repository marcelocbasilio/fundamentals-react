import MyName from "@/app/components/MyName";
import Hobbies from "@/app/components/Hobbies";
import {Img} from "@/app/components/Img";
import Link from "next/link";

type PageProps = {
  params: Promise<{ name: string }>
}

const Page = async ({params}: PageProps) => {
  const {name} = await params;
  return (
      <div className="grid gap-y-4">
        <MyName name={name} age={46} birthday={new Date(1980, 8, 17)}/>
        <Hobbies/>
        <div>
          <p>I like:</p>
          <Img/>
        </div>
        <Link className="underline" href="/zero">Back</Link>
      </div>
  )
}

export default Page
