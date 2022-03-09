import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import PlaceDetails from "./Pages/PlaceDetail/PlaceDetails";
import AllServices from "./Pages/AllServices/AllServices";
import MyBooking from "./Pages/MyBooking/MyBooking";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/places/:id">
            <PlaceDetails />
          </Route>
          <Route exact path="/services">
            <AllServices />
          </Route>
          <Route exact path="/mybooking">
            <MyBooking />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
