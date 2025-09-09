import React, { useContext, useState } from 'react'
import { ThemeContext } from './Pratice';

let Suggestedwords = ["apple", "banana", "cherry", "mango", "orange", "grape", "peach"];
const Suggestion = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputVal, setInputVal] = useState("")
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [suggestVal, setSuggestVal] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [toggleColor, setToggle]=useState('dark');

  // const handleToggle=()=>{
  //   setToggle((prev)=> prev=== 'dark' ? 'light' :'dark')
  // }

  const { toggle, handleToggle } = useContext(ThemeContext);
  const filterData=Suggestedwords.filter((word)=>word.toLowerCase().includes(inputVal.toLowerCase()));
  return (
    <div>

 
      {/* <h1>{toggle.toUpperCase()} MODE</h1> */}
      <button onClick={handleToggle} style={{
        background: toggle === "dark" ? "#333" : "#fff",
        color: toggle === "dark" ? "#fff" : "#000",
       
      }}>Switch Theme</button>
 
      <input type="text" placeholder='type something' value={inputVal} onChange={(e) => setInputVal(e.target.value)} onFocus={() => setSuggestVal(true)} />

      <div>

        {suggestVal && (
          <ul style={{ listStyle: 'none',cursor:'pointer' }}>
            {filterData.map((item,index) => (
              <>
                <li  key={index} onClick={() => {
                  setInputVal(item)
                  setSuggestVal(false)
                }} >{item}</li>
              </>
            ))}
          </ul>
        )}

      </div>
    </div>
  )
}

export default Suggestion
