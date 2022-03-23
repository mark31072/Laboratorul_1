
import React, { useState } from 'react';
import './App.css';
import Layout_content from "./components/Layout_content"
import {StudenOverview} from "./components/StudenOverview"


const homeStudent = [
  {
    firstName: "Marin",
    secondName:"Pesterean",
    gender:"male",
    age:21,
    univerity: "UTM",
    speciality:"CR",
  },
  {
    firstName: "Marin",
    secondName:"Pesterean",
    gender:"male",
    age:21,
    univerity: "UTM",
    speciality:"CR",
  }

]


function App() {

    const [cards, setCards] = useState([]);
    const [student, setStudent] = useState([]);
    
  return (
    <div className="App">
        <Layout_content
         setCards={setCards}
        cards = {cards}
        />

        <StudenOverview 
       
        students = {homeStudent}
        
        />




    </div>
  );
}

export default App;
