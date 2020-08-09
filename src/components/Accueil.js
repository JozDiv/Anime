import React, { Fragment } from 'react';

const Accueil = () => {
    const animes = JSON.parse(localStorage.getItem('datas'));
    let test = false ;
    let testV = false;
     if(animes){
         test = true;
     }
     if(test && animes.length > 0){

        testV = true;
     }
    console.log(animes);
    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center" >Liste Top Animes 2020</h1>
                    <p className="lead text-center">Catalogue des top animes à regarder !!</p>
                </div>
            </div>
            <div className="row">
                    <div className="row">
                    {testV ? animes.map((anime,index)=>{
                        return(
                        <div className="card col-md-6" key={index}>
                            <div className="card mb-3">
                                <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/'+anime.image} alt={anime.image}/>
                                    <div className="card-body">
                                        <h5 className="card-title">anime N°00{anime.id}</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">titre: {anime.titre}</li>
                                            <li className="list-group-item">Auteur: {anime.auteur}</li>
                                            <li className="list-group-item">Annee: {anime.annee}</li>
                                            <li className="list-group-item">Style: {anime.style}</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        ) 
                    })
                    :"Pas d'animes à dispositions"
                }

                    </div>
                    
                </div>
            
        </Fragment>
     );
}
 
export default Accueil;