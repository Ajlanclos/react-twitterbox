import React, {PropTypes} from 'react';

// Custom imports

// Material UI imports
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';


const TweetList = ({tweet}) => {
   
    let date = new Date(tweet.created_at);
    let month = date.getMonth() + 1;
    let day = date.getDay();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();

    let prettyDate = month + "/" + day + "/" + year;
    let prettyTime = hour + ":" + minute;    

    return (
        <List>
            <ListItem 
                value={1}
                leftAvatar={<Avatar src="http://www.freeiconspng.com/uploads/twitter-icon-alt-twitter-icon-15.png"/>} 
                primaryText={<span className="date-posted">posted on {prettyDate} at {prettyTime} - <a href={tweet.user.url}>@{tweet.user.screen_name}</a></span>}
                secondaryText={<p><a href={tweet.entities.user_mentions[0].url}>@{tweet.entities.user_mentions[0].screen_name} </a>{tweet.text}</p>}/>            
        </List>
    );
};

TweetList.propTypes = {
    tweet: PropTypes.object.isRequired
};


export default TweetList;