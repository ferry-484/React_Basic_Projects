import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markDown, setMarkDown] = useState('## markdown preview');

  return (
    <section className="markdown">
      <textarea
        className="input"
        value={markDown}
        onChange={(e) => setMarkDown(e.target.value)}
      ></textarea>
      <article className="result">
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </article>
    </section>
  );
}

export default App;


// > Here is quote by someone famous
// ### hello world
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?

// - first 
// - second 
// - third

// 1. first 
// 2. second

// ... 
// alert()
// ... 

// [google](https://www.google.com)
// ![image](https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg)

   