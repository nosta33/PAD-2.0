import React, { Component } from 'react';

class ListLivrables extends Component {
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
      const { error, isLoaded, livrables } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
          <ul>
            {livrables.map(livrable => (
              <li key={livrable.ID}>
                {livrable.Nom}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default ListLivrables;