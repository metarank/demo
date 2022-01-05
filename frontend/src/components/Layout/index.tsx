import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'normalize.css';
import Header from '../Header';
import Home from '../../pages/Home';
import * as Styled from './components';

export default () => {
  return (
    <>
      <Styled.Global />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
