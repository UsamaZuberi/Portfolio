import { Route, Switch } from "react-router-dom";

import './App.scss';

import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
