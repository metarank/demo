import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../Header';
import Home from '../../pages/Home';
import * as Styled from './components';

export default () => {
  return (
    <>
      <Styled.Global />
      <Styled.Container>
        <Header />
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Styled.Container>
    </>
  );
}
