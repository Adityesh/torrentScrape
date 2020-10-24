import React from 'react';
import arrow from '../down-arrow.svg';
interface item {
    date : string,
    seeds : number,
    peers : number,
    name : string,
    url : string,
    size : string
}


const Header = (props : item) : JSX.Element => {

    return (
        
        <div className="torrent">
           <div className="torrentLeft" style={{fontFamily: 'Kufam'}}>{props.name}</div>
           <div className="torrentRight">
               <ul>
                    <li><span>Seeds</span><span>{props.seeds}</span></li>
                    <li><span>Peers</span><span>{props.peers}</span></li>
                    <li><span>Date</span><span>{props.date}</span></li>
                    <li style={{width : '50px'}} className="button_slide slide_right download">
                        <a className="download" href={props.url}>{props.size}</a>
                    </li>
               </ul>
           </div>
        </div>
    )
}

export default Header;