import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./VideoCard.css"

function VideoCard({title,channel,image,timestamp,views,channelImage}) {
    return (
        <div className="videoCard">
            <img src={image} alt="" className="videoCard__thumbnail" />
            <div className="videoCard__info">
                <Avatar  className="videoCard__avatar" alt={channel} src={channelImage}/>
                <div className="videoCard__text">
                  <h4>{title}</h4>
                 <p>{channel}</p>
                 <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
