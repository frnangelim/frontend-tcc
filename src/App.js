import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "../src/styles/General.style";
import Navbar from "./components/Navbar/Navbar";

// Páginas
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const EditUserProfile = React.lazy(() => import("./pages/EditUserProfile"));
const UserEvents = React.lazy(() => import("./pages/UserEvents"));
const NewEvent = React.lazy(() => import("./pages/NewEvent"));
const EventUpdate = React.lazy(() => import("./pages/EventUpdate"));
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
          <Route path="/entrar" exact>
            <Login />
          </Route>
          <Route path="/cadastrar" exact>
            <Signup />
          </Route>
          <Route path="/meu-perfil" exact>
            <EditUserProfile />
          </Route>
          <Route path="/meus-eventos" exact>
            <UserEvents />
          </Route>
          <Route path="/evento/novo" exact>
            <NewEvent />
          </Route>
          <Route path="/evento/:slug" exact>
            <EventDetails />
          </Route>
          <Route path="/evento/:slug/editar" exact>
            <EventUpdate />
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
