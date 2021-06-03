import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Video from './components/video/video';
import styles from './app.module.css';
import Trainer from './components/trainer/trainer';

function App({ youtube }) {
  return (
    <Router>
      <div>
        <ul className={styles.nav}>
          <li className={styles.tab}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.tab}>
            <Link to="/video">Video</Link>
          </li>
          <li className={styles.tab}>
            <Link to="/trainer">Trainer</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/video">
            <Video youtube={youtube} />
          </Route>
          <Route path="/trainer">
            <Trainer />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
