import React, { Component, Fragment } from 'react';

class Ajout extends Component {

        initAnime = {id:1, titre:"", annee:"", auteur:"", style:"", image:""}
        state = this.initAnime;
        modifier = (e) =>{
            const {name, value} = e.target;
            this.setState({[name]:value});
        }
        envoyer = (event) => {
            event.preventDefault();
            console.log(this.state);
            this.props.ajouter(this.state);
        }
    render(){
            const {titre, annee, auteur, style, image} = this.state;
        return ( 
            <Fragment>
                <div className="text-right">
            
                    <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">
                    <i className="fa fa-plus"></i>Ajouter
                    </button>
                </div>
                                
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Ajout d'un animé</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                            <div className="modal-body">
                                <form>
                                    <div className="form-group ">
                                        <label htmlFor="titre">Titre</label>
                                        <input type="text" className="form-control" id="titre" name="titre" value={titre} placeholder="Entrez le titre" onChange={this.modifier}/>
                                    </div>
                                    
                                    <div className="form-group ">
                                        <label htmlFor="annee">Année</label>
                                        <input type="text" className="form-control" id="annee" name="annee" value={annee} placeholder="Entrez l'année" onChange={this.modifier}/>
                                    </div>
                                    
                                    <div className="form-group ">
                                        <label htmlFor="style">Style</label>
                                        <input type="text" className="form-control" id="style" name="style" value={style} placeholder="Entrez le style" onChange={this.modifier}/>
                                    </div>

                                    <div className="form-group ">
                                        <label htmlFor="auteur">Auteur</label>
                                        <input type="text" className="form-control" id="auteur" name="auteur" value={auteur} placeholder="Entrez l'auteur" onChange={this.modifier}/>
                                    </div>
                                
                                    <div className="form-group ">
                                        <label htmlFor="image">Image</label>
                                        <input type="text" className="form-control" id="image" name="image" value={image} placeholder="Selectionner l'image" onChange={this.modifier}/>
                                    </div>
                            
                                <button type="button" className="btn btn-primary btn-block" 
                                onClick={this.envoyer} data-dismiss="modal">Soumettre</button>
                                </form>
                            </div>
            <div className="modal-footer">
            </div>

                    </div>
                </div>
            </div>
            </Fragment>
         );
    }
}
 
export default Ajout;