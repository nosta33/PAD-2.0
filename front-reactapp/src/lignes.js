import React, { Component } from 'react';

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
            <div>
                {livrables.map(livrable => (
                    <div className="ligne">
                        <div className="livrable" key={livrable.ID}>
                            {livrable.Nom}
                        </div>
                        <div className="activitesLivrable">

                        </div>
                    </div>
                ))}
            </div>
          );
        }
      }
    }

export default Lignes;