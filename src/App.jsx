import PageTemplate from "./templates/PageTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ObjectDetector } from "./components/objectDetector/ObjectDetector";

function App() {
  return (
    <div className="App">
      <PageTemplate></PageTemplate>
    </div>
  );
}

export default App;
