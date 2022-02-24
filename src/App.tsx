import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" element={<Login />} />
      </Switch>
    </Router>
  );
};
export default App;
