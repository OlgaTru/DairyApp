import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {App} from './pages/App';
import { Home } from "./pages/Home";


render(
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home }/>
        </Route>
    </Router>,
    document.getElementById('root'));

registerServiceWorker();
