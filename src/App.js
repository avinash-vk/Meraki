import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import components
import SignIn from './views/auth/SignIn';
import SignUp from './views/auth/signup/SignUp.js';
import Profile from './views/profile';
import Story from './views/story';
import StoryCreateForm from './views/story/storyCreateForm';
import Home from './views/home';
import Landing from './views/landing';
import Navbar from './components/Navbar';
function App() {
  const [auth, setAuth] = useState(true); // make it false later.

  let routes;
  // authenticated routing
  if (auth) {
    routes = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/story/:id"
          render={(props) => <Story {...props} />}
        />
        <Route exact path="/story/new/:id" component={StoryCreateForm} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    );
  } else {
    // implement later.
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
}

export default App;
