import { useEffect, useState } from "react"
import { User, createUser } from "./api/users"

const App = () => {

  const [id, setId] = useState(()=>localStorage.getItem('id') ?? "")

  useEffect(()=>{
    if(!id) {
      console.log(id);
      createUser({direction:"direct"})
        .then((res:{data:User}) => {
          const userId = res?.data?.id
          if(userId) {
            setId(userId);
            localStorage.setItem('id', userId)
          }
        })
    }
  }, [id])

  console.log('id', id);
  
  return (
    <>
      Yogather
    </>
  )
}

export default App
