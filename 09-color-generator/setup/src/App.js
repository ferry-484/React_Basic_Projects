import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      setError(false);
 let colors = new Values(color).all(10);
   console.log(colors);
   setList(colors)
    }
    catch(error){
      setError(true);
      console.log(error);
    }
   
  //  alert("hello");
  
  };
  return (
    <>
      <section className="container">
        <h3>Color Generate</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
       {
         list.map((color, index) => {
          //  const hex = color.hex;
           return(
             <SingleColor key={index}
             hexColor={color.hex} 
             {...color} 
             index={index} />
           );
         })
       }

      </section>
    </>
  );
}

export default App;
