import PageTemplate from "./templates/PageTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ObjectDetector } from "./components/objectDetector/ObjectDetector";

function App() {
  return (
    <div className="App">
      <Router>
        <PageTemplate>
          <Switch>
            <Route path="/add">
              <ObjectDetector />
            </Route>
          </Switch>
        </PageTemplate>
      </Router>
    </div>
  );
}

export default App;
