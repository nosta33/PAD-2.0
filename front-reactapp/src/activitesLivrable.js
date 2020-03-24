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

  stringToDate (_date,_format,_delimiter) {
    if(_date == null){
      return null;
    }
    else {
      var formatLowerCase=_format.toLowerCase();
      var formatItems=formatLowerCase.split(_delimiter);
      var dateItems=_date.split(_delimiter);
      var monthIndex=formatItems.indexOf("mm");
      var dayIndex=formatItems.indexOf("dd");
      var yearIndex=formatItems.indexOf("yyyy");
      var month=parseInt(dateItems[monthIndex]);
      month-=1;
      var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
      return formatedDate;
    }
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
                <div className="ressort"></div>
                <Activite 
                  finActivite = {this.stringToDate(activite.fin,"dd/MM/yyyy","/")}
                  debutActivite = {this.stringToDate(activite.debut,"dd/MM/yyyy","/")}
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