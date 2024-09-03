import { useState } from 'react'


function App() {
   const [length ,setlength]     =    useState(8);
   const [number ,setnumber]     =    useState(false);
   const [charcter,setcharacter] =    useState(false);
   const [password,setpassword]  =    useState(" ")
  return (
   <>
   <h1 className='text-4xl text-center mt-20 text-color="red-300"'>Hlw password</h1>
   
   </>
  )
}

export default App
