const hobbies: string[] = ["Mechanics", "Electronics", "Music"]

const Hobbies = () => {
  const [favoriteHobbies, ...otherHobbies] = hobbies
  const newHobbies = ["Programming", "Cooking", "Traveling", "Sports", "Gaming", "Reading", "Writing"]
  const myHobbies = [...otherHobbies, ...newHobbies]

  return (
      <div>
        <p>These are my hobbies:</p>
        <ul className="list-disc list-inside">
          <li className="font-bold">{ favoriteHobbies }</li>
          { myHobbies.map((myHobby: string, index: number) => (
              <li key={`hobby-${index}`}>{myHobby}</li>
          ))}
        </ul>
      </div>
  )
}

export default Hobbies
