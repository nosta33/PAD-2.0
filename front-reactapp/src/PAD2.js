import React, { Component } from 'react';
import Lignes from './lignes.js';
import ListLivrables from './list-livrables.js';

class PAD2 extends Component {
    render() {
        return (
        <div id="PAD">
            <div id="top-header">
                <div id="annees">
                    annees
                </div>

                <div id="mois">
                    mois
                </div>
            </div>
            <div id="lignes">
                <Lignes />
            </div>
        </div>);

    }
}

export default PAD2;