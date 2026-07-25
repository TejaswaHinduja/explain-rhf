"use client"
import { useState } from "react";

export default function Home() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  function handleSubmit(e:any){
    e.preventDefault()
    console.log(name,email)
    return
  }
  return (
    <div className="bg-white-500">
      <form onSubmit={handleSubmit}>
        <input className="bg-black"name="name" type="text" onChange={(e)=>setName(e.target.value)}/>
        <input className="bg-green-100" name="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <button className="bg-amber-500"type="submit">Submit</button>
      </form>
    </div>
  );
}

//native way, whats wrong with this ? no live ui changes like char count 
function Native(){
  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
      const formdata=new FormData(e.currentTarget)
      const name=formdata.get("name")
      const email=formdata.get("email")
      console.log(name,email)
  }
  return <div>
    <form onSubmit={handleSubmit}>
        <input className="bg-black"name="name" type="text" />
        <input className="bg-green-100" name="email" type="email" />
        <button className="bg-amber-500"type="submit">Submit</button>
      </form>

  </div>
}

/*questions to answer:

*/
