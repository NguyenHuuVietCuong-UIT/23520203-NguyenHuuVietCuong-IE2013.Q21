import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Movie Reviews</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">

              {/* Movies */}
              <Nav.Link as={Link} to="/movies">
                Movies
              </Nav.Link>

              {/* Login / Logout */}
              {user ? (
                <Nav.Link onClick={logout} style={{ cursor: "pointer" }}>
                  Logout User
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* ROUTING */}
        <Switch>

          <Route exact path={["/", "/movies"]} component={MoviesList} />

          <Route
            path="/movies/:id/review"
            render={(props) => <AddReview {...props} user={user} />}
          />

          <Route
            path="/movies/:id"
            render={(props) => <Movie {...props} user={user} />}
          />

          <Route
            path="/login"
            render={(props) => <Login {...props} login={login} />}
          />

        </Switch>
      </div>
    </Router>
  );
}

export default App;