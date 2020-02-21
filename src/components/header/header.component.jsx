import React from 'react';
import './header.styles.scss';

import {ReactComponent as Exit} from './cancel.svg';
import {ReactComponent as Hide} from './blind.svg';
import {ReactComponent as Menu} from './menu.svg';



function handleExitEvent(){
    const {ipcRenderer} = window.require("electron")
    ipcRenderer.send('exitEvent', 'dodov');
}

function  handleHideEvent(){
    const {ipcRenderer} = window.require("electron")
    ipcRenderer.send('hideEvent', 'dodovHide');
}



export default class Header extends React.Component {






    render(){
    const size = 35;
  
    return (
        <div className="Header">
            
            

            <div className="option">
                <Hide width={size} height={size} onClick={handleHideEvent}/>
            </div>
            <div className="option menu">
            <Menu width={size} height={size} onClick={this.props.onBar}/>
            </div>
            <div className="option">
                <Exit width={size-2} height={size-2} onClick={handleExitEvent}/>
            </div>
        </div>
    )
}
}
