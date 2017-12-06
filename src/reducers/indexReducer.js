import {combineReducers} from 'redux';
import tweets from './tweetReducer';

const indexReducer = combineReducers({
    tweets
});

export default indexReducer;