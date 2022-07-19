import axios from "axios";

import React, { useState } from "react";

import "./App.css";

function App() {
  const [user, SetUser] = useState([{}]);

  axios("/api").then(function (response) {
    console.log(response.data.users);
  });

  return (
    <div className="App">
      {/*   {newComers.map((user, i) => (
        <h1 key={i}>{user.call}</h1>
      ))} */}
    </div>
  );
}

export default App;
