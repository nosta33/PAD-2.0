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
                    {mois.map(moi => (
                        <div id = {moi + 2020} className="moi" key = {moi}>
                            {moi}
                        </div>
                    ))}
                    {mois.map(moi => (
                        <div id = {moi + 2021} className="moi" key = {moi}>
                            {moi}
                        </div>
                    ))}
                    {mois.map(moi => (
                        <div id = {moi + 2022} className="moi" key = {moi}>
                            {moi}
                        </div>
                    ))}
                    {mois.map(moi => (
                        <div id = {moi + 2023} className="moi" key = {moi}>
                            {moi}
                        </div>
                    ))}
                    {mois.map(moi => (
                        <div id = {moi + 2024} className="moi" key = {moi}>
                            {moi}
                        </div>
                    ))}
                    {mois.map(moi => (
                        <div id = {moi + 2025} className="moi" key = {moi}>
                            {moi}
                        </div>
                    ))}
                </div>
            </div>
            <div id="lignes">
                <Lignes />
            </div>
        </div>);

    }
}

export default PAD2;