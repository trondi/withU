import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Video from './components/video/video';
import styles from './app.module.css';

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
        </ul>
        <Switch>
          <Route path="/video">
            <Video youtube={youtube} />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
