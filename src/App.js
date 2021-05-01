import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Loading, LoadingContainer } from "../src/styles/General.style";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { history } from "../src/history";

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
const UserPage = React.lazy(() => import("./pages/UserPage"));

function App() {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("USER_JWT");
    if (token) setUserLogged(true);
  }, []);

  const logout = () => {
    localStorage.clear("USER_JWT");
    setUserLogged(false);
  };

  const loginEvent = () => {
    setUserLogged(true);
  };

  return (
    <React.Suspense
      fallback={
        <LoadingContainer>
          <Loading color={"#409BD6"} />
        </LoadingContainer>
      }
    >
      <ToastProvider>
        <Router history={history}>
          <Navbar userLogged={userLogged} logout={() => logout()} />
          <Switch>
            <PublicRoute path="/" exact component={Home} restricted={false} />
            <PublicRoute
              path="/entrar"
              exact
              component={() => <Login loginEvent={() => loginEvent()} />}
              restricted={true}
            />
            <PublicRoute
              path="/cadastrar"
              exact
              component={Signup}
              restricted={true}
            />
            <PrivateRoute
              path="/meu-perfil"
              exact
              component={EditUserProfile}
            />
            <PrivateRoute path="/meus-eventos" exact component={UserEvents} />
            <PrivateRoute path="/evento/novo" exact component={NewEvent} />
            <PrivateRoute
              path="/evento/preview"
              exact
              component={() => <EventDetails preview={true} />}
            />
            <PrivateRoute
              path="/usuario/preview"
              exact
              component={() => <UserPage preview={true} />}
            />
            <PublicRoute
              path="/evento/:slug"
              exact
              component={EventDetails}
              restricted={false}
            />
            <PrivateRoute
              path="/evento/:slug/detalhes"
              exact
              component={EventUpdate}
            />
            <PublicRoute
              path="/evento/:slug/:slotSlug"
              exact
              component={EventEnrollment}
              restricted={false}
            />
            <PublicRoute
              path="/:slug"
              exact
              component={UserPage}
              restricted={false}
            />
          </Switch>
        </Router>
      </ToastProvider>
    </React.Suspense>
  );
}

export default App;
