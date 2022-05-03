import React from 'react';



export const Home = () =>{
    let loadingGif = require("../assets/GOcT.gif")
    
    return(
        <main>
          <h2>Bun venit la laboratorul Tehnologii Web</h2>
          <h3>Aveti acces la tot ce doriti.</h3>
          <h4>Enjoy it !</h4>
          <img src={loadingGif} alt="wait until the page loads" />
        </main>
    )
}

