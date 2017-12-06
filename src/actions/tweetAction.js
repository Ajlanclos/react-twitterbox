import * as types from './types.js';
import tweetApi from '../api/TweetMockData';

export function loadTweetSuccess(tweets) {
    return {type: types.LOAD_TWEETS_SUCCESS, tweets};
}

// Tweet API Calls (THUNKS)
export function loadTweets() {
    return function(dispatch) {
        return tweetApi.getAllTweets()
            .then(tweets => {
                dispatch(loadTweetSuccess(tweets));
            })
            .catch(error => {
                throw(error);
            });
    };
}