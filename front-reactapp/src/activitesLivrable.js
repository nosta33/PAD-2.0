import React, { Component } from 'react';
import Activite from './activite.js';

class ActivitesLivrable extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        activites: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8000/api/activites/" + this.props.idLivrable)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              activites: result.activites
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, activites } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
          <div className="activitesLivrable">
            {activites.map(activite => (
              <div className="activite" key={activite.id}>
                <Activite 
                  finActivite = {activite.fin}
                />
                <p>{activite.nom}</p>
              </div>
            ))}
          </div>
        );
      }
    }
  }

  export default ActivitesLivrable;