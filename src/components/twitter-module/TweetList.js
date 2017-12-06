import React, {PropTypes} from 'react';

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
        <li>
            <img src={`${tweet.user.profile_image_url}`}/>
            <span className="date-posted">posted on {prettyDate} at {prettyTime} - <a href={tweet.user.url}>@{tweet.user.screen_name}</a></span>
            <span className="user-at"><a href=""></a></span> 
            <p><a href={tweet.entities.user_mentions[0].url}>@{tweet.entities.user_mentions[0].screen_name} </a>{tweet.text}</p>
        </li>
    );
};

TweetList.propTypes = {
    tweet: PropTypes.object.isRequired
};

export default TweetList;