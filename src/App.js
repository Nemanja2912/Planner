import React, { useState, useEffect } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import IntroductionScreen from "./component/IntroductionScreen";
import HomePage from "./component/HomePage";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import EventsPage from "./component/EventsPage";
import AddEvent from "./component/AddEvent";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: "#303030",
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    primary: {
      main: "#0072bb",
    },
  },
});

function App() {
  const classes = useStyles();

  const [title, setTitle] = useState("Home");
  const [showNav, setShowNav] = useState(true);

  const [introduction, setIntroduction] = useState(
    !localStorage.getItem("Introduction")
  );

  const handleIntroduction = () => {
    localStorage.setItem("Introduction", false);
    setIntroduction(false);
  };

  const handleLoad = ({ pathname }) => {
    let title =
      pathname === "/"
        ? "Home"
        : pathname === "/AddEvent"
        ? "Add Event"
        : pathname.slice(1);

    setTitle(title);

    if (pathname === "/AddEvent") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: window.innerHeight }} className={classes.root}>
        {introduction && (
          <IntroductionScreen handleIntroduction={handleIntroduction} />
        )}

        {!introduction && (
          <Router>
            <Header title={title} />
            <Switch>
              {/* <Route path="/AddNew" component={AddNew} /> */}
              <Route path="/Events" component={EventsPage} />
              <Route path="/AddEvent" component={AddEvent} />
              <Route exact path="/" component={HomePage} />
            </Switch>
            {showNav && <Navigation title={title} />}
            <GetLocation handleLoad={handleLoad} />
          </Router>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

const GetLocation = ({ handleLoad }) => {
  let location = useLocation();

  useEffect(() => {
    handleLoad(location);
  });

  return "";
};
