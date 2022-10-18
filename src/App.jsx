import PageTemplate from "./templates/PageTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ObjectDetector } from "./components/objectDetector/ObjectDetector";
import Myfridge from "./pages/MyFridge/MyFridge";

function App() {
  return (
    <div className="App">
      <PageTemplate>
<Myfridge>
        
        </Myfridge>
      </PageTemplate>
    </div>
  );
}

export default App;
