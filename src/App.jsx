import { useState } from "react";
import Home from "./pages/home";
import HomePage from "./pages/home";
import CodeLoadingScreen from "./components/loading";



function App() {
  return (
    <div className="flex flex-col">
      {/* <HomePage /> */}
      <CodeLoadingScreen/>
    </div>
  );
}

export default App;
