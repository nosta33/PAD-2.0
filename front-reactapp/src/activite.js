import React, { Component } from 'react';
import Phase from './phase.js'
import Jalon from './jalon.js'

class Activite extends Component{
    render(){
        if(this.props.finActivite == null){
            return(
                <div className="jalon">
                </div>
            );
        } else {
            return(
                <div className="phase">
                </div>
            );
        }
    }
}

export default Activite;