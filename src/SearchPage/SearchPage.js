import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import Abu1 from "../assets/abu1.JPG"
import "./SearchPage.css"
import ChannelRow from "./ChannelRow/ChannelRow"
import VideoRow from "./VideoRow/VideoRow"
import Abu from "../assets/abu.jpg"
import thumbnailA1 from "../assets/thumbnailA1.jpeg"
import thumbnailA2 from "../assets/thumbnailA2.jpeg"
import thumbnailA3 from "../assets/thumbnailA3.jpeg"
import thumbnailA4 from "../assets/thumbnailA4.jpeg"
import thumbnailA5 from "../assets/thumbnailA5.jpeg"

function SearchPage() {
    return (
        <div className="searchPage">
            <div   className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow 
                image={Abu1}
                channel="Abraham Lugonzo"
                verified
                subs="455K"
                noOfVideos={384}
                description=" From this channel you'll get a chance to learn 
                                            basics to Advanced javascript 🧠. You'll get to 
                                            understand how to use  javascript framework to 
                                            create 🔥🔥🔥big projects that will land you $100K
                                            job in a month. 👩‍💻  🔥🔥🔥"
                
            />
            <hr />
            <VideoRow 
              views="45"
              subs="23K"
              description="Top 10 games that Messi did the unexpected"
              timestamp="5 sec"
              channel="Latest Football News"
              title="⚽⚽ Football News  Top 10 games that Messi did the unexpected 🔥🔥🔥"
              image={thumbnailA1}
            />

            <VideoRow 
              views="99K"
              subs="5 M"
              description="Former Trump White House lawyer Jim Schultz calls the President's legal strategy a 'train wreck'.
                                      When you don't have the facts... you don't have the law, you pound your fist. There has been a lot of fist pounding by Rudy Giuliani and that team.
                                       The fist pounding has to stop.''"
              timestamp="2 hours"
              channel="CNN News"
              title="Former Trump White House lawyer Jim Schultz calls the President's legal strategy a 'train wreck' "
              image={thumbnailA5}
            />

           <VideoRow 
              views="14"
              subs="455K"
              description="Get to know the steps to become the best problem solver in 3o min"
              timestamp="5 sec"
              channel="Latest Football News"
              title="💻💻How to become a good problem solver in Software Engineering 👩‍💻👩‍💻"
              image={Abu}
            />

            <VideoRow 
              views="9M"
              subs="523K"
              description="Get down on your knees and sing Hossanah .Top 10 Hillsong united worship songs in one video"
              timestamp="2 months"
              channel="Worship Songs"
              title="🙏🙏 Top 10 Hillsong united worship songs in one video 🙏🙏"
              image={thumbnailA3}
            />

            <VideoRow 
              views="998K"
              subs="500 K"
              description="Leats all have fun with blippi.Leats visit the toy store and have
              fun all day"
              timestamp="2 years"
              channel="Blippi"
              title="🤹🤹Blippi visit to the toys store🤹🤹"
              image={thumbnailA4}
            />

            <VideoRow 
              views="200K"
              subs="782K"
              description="Mwana muziki diamond platinumz atoa ngoma mpya na zuchu liitwalo Litawachoma.
              Ngoma hilo limepata watazamaji laki mbili kwa siku moja."
              timestamp="6 hours"
              channel="Diamond Platinumz"
              title="🎧🎧Diamond platinumz watoa colabo na zuchu 'Litawachoma' 🔥🔥🔥"
              image={thumbnailA2}
            />
        </div>
    )
}

export default SearchPage
