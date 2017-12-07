import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import storeConfig from './store/storeConfig';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Custom imports
import {loadTweets} from './actions/tweetAction';
// import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const store = storeConfig();
store.dispatch(loadTweets());

render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);