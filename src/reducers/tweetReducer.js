import * as types from '../actions/types';

export default function tweetReducer(state=[], action) {
    switch(action.type) {
        case types.LOAD_TWEETS_SUCCESS:
            return action.tweets;

        default:
            return state;
    }
}