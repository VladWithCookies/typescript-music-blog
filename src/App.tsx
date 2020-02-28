import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Playlist from './components/Playlist';
import Archive from './components/Archive';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Archive} />
      <Route exact path="/playlist/:year" component={Playlist} />
    </Switch>
  </BrowserRouter>
);

export default App;
