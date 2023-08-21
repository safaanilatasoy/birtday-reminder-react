import React, {useState} from 'react';
import data from './Data/data';
import List from './components/List';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  
  return (
    <main>
      <section className="container">
        <h3>{people.length} People Here</h3>
        <List people={people}/>
        <button onClick={() =>setPeople([])}>Clear</button>
      </section>
    </main>
  );
}

export default App;
