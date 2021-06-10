import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import LessonPage from "./pages/LessonPage";
import LoginPage from "./pages/LoginPage"
import MentoringPage from "./pages/MentoringPage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact="exact"
            path={["/", "/lesson"]}
            component={LessonPage}
          />
          <Route exact="exact" path="/mentoring" component={MentoringPage} />
          <Route exact="exact" path="/login" component={LoginPage} />
          <Route
            render={({ location }) => (
              <div>
                <h2>존재하지 않는 페이지 입니다.</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
