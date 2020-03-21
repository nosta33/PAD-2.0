import React, { Component } from 'react';
import Lignes from './lignes.js';

class PAD2 extends Component {
    render() {
        const annees = [2020, 2021, 2022, 2023, 2024, 2025];
        const mois = ["S1", "S2", "S3","S4"];
        return (
        <div id="PAD">
            <div id="top-header">
                <div id="annees">
                    {annees.map(annee => (
                        <div id = {annee} className="annee" key = {annee}>
                            {annee}
                        </div>
                    ))}
                </div>
                <div className="mois">
                    {annees.map(annee => (
                        mois.map(moi => (
                            <div id = {moi + annee} className="moi" key = {moi}>
                                {moi}
                            </div>
                        ))    
                    ))}
                </div>
            </div>
            <div>
                <Lignes />
            </div>
        </div>);
    }
}

export default PAD2;