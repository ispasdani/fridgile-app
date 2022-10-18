import PageTemplate from "./templates/PageTemplate";
import ShoppingList from "./pages/ShoppingList/ShoppingList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ObjectDetector } from "./components/objectDetector/ObjectDetector";

function App() {
  return (
    <div className="App">
      <PageTemplate>
        <ShoppingList/>
      </PageTemplate>
    </div>
  );
}

export default App;
