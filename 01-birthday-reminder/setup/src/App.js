import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const allData = () => {
    setPeople(data);
  }

  if(people.length === 0) {
    return (
      <main>
        <div className="container">
          <h2>{people.length} Birthday Left</h2>
          <button onClick={() => allData()}>Go Back</button>
          {/* <List people={people} /> */}
        </div>
      </main>
    );
    }

  return (
    <main>
      <section className="container">
        <h2>{people.length} BirthDays Today</h2>
        <List people={people} /> 
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}  

export default App;
