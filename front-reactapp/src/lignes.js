import React, { Component } from 'react';
import Activites from './Activites.js';

class Lignes extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          livrables: []
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:8000/api/livrables")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                livrables: result.livrables
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, livrables } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
          return (
            <div id="lignes">
                {livrables.map(livrable => (
                    <div className="ligne" key={livrable.id}>
                        <div className="livrable" key={livrable.id}>
                            <p>{livrable.nom}</p>
                        </div>
                        <div>
                            <Activites
                                idLivrable = {livrable.id}
                            />
                        </div>
                    </div>
                ))}
            </div>
          );
        }
      }
    }

export default Lignes;