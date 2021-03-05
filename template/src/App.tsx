import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from 'pages/main';
import NotFound from 'pages/404';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        {/* <Route path="/page2">
          <Page2 />
        </Route> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
