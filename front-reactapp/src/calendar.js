import React, { Component } from 'react';

class TopHeader extends Component{
    render() {
        return(
            <div>
                <div id="marge">
                </div>
                <div id="anneesMois">
                    <div id="annees">
                        annees
                    </div>
                    <div id="mois">
                        mois
                    </div>
                </div>
            </div>
        );
    }
}

export default TopHeader;