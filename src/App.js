import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Movies from "./component/movies";

class App extends Component {
  render() {
    return (
      <main>
        <Movies />
      </main>
    );
  }
}

export default App;

// function App() {
//   return (
//     <main>
//       <Movies />
//     </main>
//   );
// }

// export default App;
