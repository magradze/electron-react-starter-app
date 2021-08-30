import AppHeader from "./components/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainScreen from "./screens/MainScreen"

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader title={"Electron React Starter App"} />
        <div className="app-container">
          <Switch>
            {/* Main screen */}
            <Route path="/">
              <MainScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
