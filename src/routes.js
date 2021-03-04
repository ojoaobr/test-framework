import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { Albuns } from './pages/Albuns';
import { ToDos } from './pages/ToDos';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/albuns" component={Albuns} />
      <Route exact path="/todos" component={ToDos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;