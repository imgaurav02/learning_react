import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [specialCharAllowed,setSpecialCharAllowed] = useState(false);
  const [password,setPassword] = useState(null)
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    let pass = ""
    if(numberAllowed){
      str += "1234567890";
    }
    if(specialCharAllowed){
      str += "[];,./~!@#$%^&*()";
    }
    for (let i = 1; i <= length; i++) {
        let ind = Math.floor(Math.random() * (str.length - 1) + 1)
        
        pass += str[ind];
    }

    setPassword(pass)

  },[length,numberAllowed, specialCharAllowed, setPassword]);


  const copyPassword = () => {
    // console.log(password);
    // passRef?.select();
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,10);
    navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    passwordGenerator();
  },[length,numberAllowed,specialCharAllowed,passwordGenerator])
  return (
    <>
     <div className='bg-blue-200 flex flex-wrap justify-center items-center '>
        <h1 className='basis-full text-center font-bold my-2'>Password Generator</h1>
        <div className='flex flex-wrap basis-full justify-center items-center'>
          <input type = "text" value={password} ref={passRef} className='border-gray-300 border mr-2 w-64 h-8 '></input>
          <button className='bg-blue-500 px-2 py-1 font-bold' onClick={copyPassword}>Copy</button>
        </div>


        <div className='flex flex-wrap basis-full justify-center items-center'>
          <input type="range" max={100} min={8} value={length} onChange={(e) => setLength((prev) => prev = e.target.value)} className='basic-5/12 mr-2'></input>
          <p className='font-bold mr-2'>Length : {length}</p>
          <input type="checkbox" className='mr-2' value={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)}></input>
          <p className='font-bold mr-2'>Number</p>
          <input type="checkbox" className='mr-2' value={specialCharAllowed} onChange={() => setSpecialCharAllowed((prev) => {return !prev})}></input>
          <p className='font-bold mr-2'>Special character</p>
        </div>

     </div>
    </>
  )
}

export default App
