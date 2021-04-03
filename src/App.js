import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "../src/styles/General.style";
import Navbar from "./components/Navbar/Navbar";

// Páginas
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const NewEvent = React.lazy(() => import("./pages/NewEvent"));
const EventDetails = React.lazy(() => import("./pages/EventDetails"));
const EventEnrollment = React.lazy(() => import("./pages/EventEnrollment"));
const CompanyDetails = React.lazy(() => import("./pages/CompanyDetails"));

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/evento/novo" exact>
            <NewEvent />
          </Route>
          <Route path="/evento/:slug" exact>
            <EventDetails />
          </Route>
          <Route path="/evento/:slug/:slotSlug" exact>
            <EventEnrollment />
          </Route>
          <Route path="/:slug" exact>
            <CompanyDetails />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
