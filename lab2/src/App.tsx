
import React, { useState } from 'react';
import './App.css';
import Layout_content from "./components/Layout_content"



function App() {

    const [cards, setCards] = useState([]);

  return (
    <div className="App">
        <Layout_content
         setCards={setCards}
        cards = {cards}
        />
    </div>
  );
}

export default App;
