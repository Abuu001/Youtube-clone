import React from 'react'
import "./ModelView.css";
import VideoCard from "./VideoCard/VideoCard"
import Abu from "../assets/abu.jpg"
import JS from "../assets/javascript.png"
import Thumbnail1 from "../assets/thumbnail1.jpeg"
import Thumbnail2 from "../assets/thumbnail2.jpeg"
import Thumbnail3 from "../assets/thumbnail3.jpeg"
import Thumbnail4 from "../assets/thumbnail4.jpeg"
import Thumbnail5 from "../assets/thumbnail5.jpeg"
import Thumbnail6 from "../assets/thumbnail6.jpeg"
import Thumbnail7 from "../assets/thumbnail7.jpeg"
import Thumbnail8 from "../assets/thumbnail8.jpeg"
import Thumbnail9 from "../assets/thumbnail9.jpeg"
import Thumbnail10 from "../assets/thumbnail10.png"

function ModelView() {
    return (
        <div  className="modelview">
            <h2>Recommended</h2>
            <div  className="modelview__videos">
                <VideoCard 
                   title="Trump on Iran"
                   views="5M views"
                   timestamp="13 days"
                   channelImage={Thumbnail10}
                   channel="Aljazeera"
                   image={Thumbnail9}
                />
                  <VideoCard 
                   title="How to write your first program in C++"
                   views="79 views"
                   timestamp="1 month"
                   channelImage={Abu}
                   channel="Abraham Lugonzo"
                   image={Abu}
                />
                    <VideoCard 
                   title="Baby Songs"
                   views="8.2M views"
                   timestamp="9 months"
                   channelImage={Thumbnail7}
                   channel="Baby Shark"
                   image={Thumbnail7}
                />
                    <VideoCard 
                   title="Javascript Programming"
                   views="2.3M views"
                   timestamp="13 days"
                   channelImage={JS}
                   channel="Coding Train"
                   image={JS}
                />
                    <VideoCard 
                   title="How to design youtube thumbnails"
                   views="112views"
                   timestamp="8 Hours"
                   channelImage={Abu}
                   channel="Cherry pie"
                   image={Thumbnail1}
                />
                    <VideoCard 
                   title="What makes youtube thumbnail great ?"
                   views="8.9K views"
                   timestamp="4 years"
                   channelImage={Abu}
                   channel="Ken Whatson"
                   image={Thumbnail2}
                />
                    <VideoCard 
                   title="Peppa Pig visits Grandma"
                   views="11M views"
                   timestamp="2years"
                   channelImage={Thumbnail5}
                   channel="Peppa Pig"
                   image={Thumbnail5}
                />
                    <VideoCard 
                   title="Reggae Mix 2019"
                   views="45K views"
                   timestamp="5 years"
                   channelImage={Abu}
                   channel="Reggae Tune"
                   image={Thumbnail3}
                />
                  <VideoCard 
                   title="Worship Gospel by Hillsong United "
                   views="7M views"
                   timestamp="8 years"
                   channelImage={Abu}
                   channel="Hillsong United"
                   image={Thumbnail4}
                />
                    <VideoCard 
                   title="Top 4 thumbnails"
                   views="1K views"
                   timestamp="3 days"
                   channelImage={Abu}
                   channel="Belly T"
                   image={Thumbnail6}
                />
                  <VideoCard 
                   title="Bungoma youths nuturing talents"
                   views="9 views"
                   timestamp="5 Hours"
                   channelImage={Abu}
                   channel="Ktn Home"
                   image={Thumbnail8}
                />
            </div>
        </div>
    )
}

export default ModelView
