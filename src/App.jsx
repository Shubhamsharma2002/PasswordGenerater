import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
   const [length ,setlength]     =    useState(8);
   const [number ,setnumber]     =    useState(false);
   const [charcter,setcharacter] =    useState(false);
   const [password,setpassword]  =    useState(" ")
   const passwordref = useRef("")

  //  optimize the copy button 
  const [color , setcolor] = useState("blue")
   const passwordGenrater = useCallback( () =>{
      let pass = " ";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(number)str += "0123456789";
      if(charcter)str += "@#%&*-+"
      for(let i = 1; i<length; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
    setpassword(pass);
      
   } , [length,number,charcter,setpassword]);
    
   const copyPasswordToClipboard = useCallback (() =>{
        passwordref.current?.select()
         window.navigator.clipboard.writeText(password)
   },[password])
   useEffect(() => {
    passwordGenrater()
   } , [length,number,charcter, passwordGenrater])

   const handlwclick = ()=>{
    setcolor("#D76F6F")
    copyPasswordToClipboard()
   }

   
  return (
    <>
    <h1 className='text-white text-center my-3'> <b>A React Based project</b></h1>
   
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-20 bg-gray-800 text-orange-500 ">
     
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordref}
      />
      <button
      onClick={handlwclick}
      
      className='outline-none  text-white px-3 py-0.5 shrink-0' style={{backgroundColor:color}}
      >copy</button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
       className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
        />
        <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={setnumber}
        id="numberInput"
        onChange={() => {
            setnumber((prev) => !prev);
        }}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={setcharacter}
            id="characterInput"
            onChange={() => {
                setcharacter((prev) => !prev )
            }}
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
</>
  )
}

export default App
