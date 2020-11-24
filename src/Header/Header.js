import React ,{useState}from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import YoutubeLogo from "../assets/youtubelogo.png";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Avatar from '@material-ui/core/Avatar';
import Abu from "../assets/abu.jpg";
import {Link} from "react-router-dom"
import "./Header.css";

function Header() {
    const[inputSearch,setInputSearch]=useState('')

    return (
        <div className="header">
            <div  className="header__left"> 
                <MenuSharpIcon />
                <Link to="/">
                    <img  src={YoutubeLogo}  alt="Youtube Logo" className="header__logo"/>
                </Link>
            </div>
            <div  className="header__input"> 
              <input placeholder="Search" type="text"  value={inputSearch} onChange={e=>setInputSearch(e.target.value)}/>
            <Link to={`/search/${inputSearch}`}>
                <SearchSharpIcon className="header__inputIcon" />
            </Link>
            </div>
            <div  className="header__icons"> 
                <VideoCallSharpIcon  className="header__icon"/>
                <AppsIcon className="header__icon" />
                <NotificationsActiveIcon className="header__icon" />
                <Avatar  alt="Abraham Lugonzo"  src={Abu}/>
            </div>
        </div>
    )
}

export default Header
