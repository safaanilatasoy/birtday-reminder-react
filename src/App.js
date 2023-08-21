import React, {useState} from 'react';
import data from './Data/data';
import List from './components/List';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
        <button onClick={() => console.log('you clicked me')}>Clear</button>
      </section>
    </main>
  );
}

export default App;
