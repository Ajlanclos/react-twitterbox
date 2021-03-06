import React from 'react';
import PropTypes from 'prop-types';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Custom imports
import TweetModList from './TweetList';
import TweetModFooter from './TwitterModuleFooter';

// Material UI imports
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

// Custom Styles
const style = {
    
    margin: 10
    
};


class TwitterModule extends React.Component {
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
                    <Paper zDepth={3} style={style}>
                        <AppBar
                            iconClassNameLeft="fa fa-twitter"
                            title="TweetBox"
                            style={{
                                background: 'linear-gradient(45deg, #4FC3F7 30%, #4DD0E1 90%)'
                            }}/>
                        {tweets.map(tweet =>
                            <TweetModList key={tweet.id} tweet={tweet}/>                    
                        )}
                        <TweetModFooter/>
                    </Paper>
                </div>
            </div>
        );
    }
}

TwitterModule.propTypes = {
    tweets: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        tweets: state.tweets
    };
}

export default connect(mapStateToProps)(TwitterModule);