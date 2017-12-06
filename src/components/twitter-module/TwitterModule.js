import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Custom imports
import TweetModList from './TweetList';
import TweetModFooter from './TwitterModuleFooter';

class MainPage extends React.Component {
    constructor(props, context) {
        super(props, context);


    }

    render() {
        // Define tweets here
        const {tweets} = this.props;

        // What we will render to the view
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="wrapper">
                        <div className="head">
                            <i className="fa fa-twitter"></i><h3>Tweetbox</h3>
                        </div>
                        <ul className="tweets">
                            {tweets.map(tweet =>
                                <TweetModList key={tweet.id} tweet={tweet}/>                    
                            )}
                        </ul>
                        <TweetModFooter/>
                    </div>
                </div>
            </div>
        );
    }
}

MainPage.propTypes = {
    tweets: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        tweets: state.tweets
    };
}

export default connect(mapStateToProps)(MainPage);