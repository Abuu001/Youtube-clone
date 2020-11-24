import React from 'react'
import "./SideBar.css"
import  SideBarRow from "./SideBarRow/SideBarRow";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {Link} from "react-router-dom"

function SideBar() {
    return (
        <div className="sidebar">
            <Link  to="/" style={{textDecoration:'none' , color: 'black'}}><SideBarRow Icon={HomeIcon} title="Home" selected /> </Link>  
            <Link  to="/search/:searchItem" style={{textDecoration:'none', color: 'black'}}><SideBarRow  Icon={WhatshotIcon} title="Trending"/></Link>
            <SideBarRow  Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SideBarRow  Icon={VideoLibraryIcon} title="Library"/>
            <SideBarRow  Icon={HistoryIcon} title="History" />
            <SideBarRow  Icon={OndemandVideoIcon} title="Your Videos"/>
            <SideBarRow  Icon={WatchLaterIcon} title="Watch Later" />
            <SideBarRow  Icon={ThumbUpOutlinedIcon} title="Liked videos"/>
            <SideBarRow  Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />

        </div>
    )
}

export default SideBar
