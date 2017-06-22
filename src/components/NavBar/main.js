import React from 'react';
import AppBar from 'material-ui/AppBar';

class NavBar extends React.Component{
    render(){
        return(
            <div className="NavBar">
                <AppBar title="GirlsCode"/>
            </div>
        );
    }

}

export default NavBar;