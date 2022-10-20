import PageTemplate from "./templates/PageTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ObjectDetector } from "./components/objectDetector/ObjectDetector";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <PageTemplate>
        <Routes>
          
            <Route path="/fridgile-app/add" element={<ObjectDetector />}/>
       
          
        </Routes>
        </PageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
