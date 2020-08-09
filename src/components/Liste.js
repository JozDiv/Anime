import React from 'react';

const Liste = (props) => {

        return (

            <table className="table table-striped table-dark">
                <thead className='thead-dark'>
                    <tr>
                        <th>Id</th><th>Titre</th><th>Année</th><th>Style</th><th>Auteur</th><th>Images</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody-light'>
                    {props.animes ?
                    props.animes.map((anime, index) => {
                            return(
                                <tr key={index}>
                                    <td>{anime.id}</td>
                                    <td>{anime.titre}</td>
                                    <td>{anime.annee}</td>
                                    <td>{anime.style}</td>
                                    <td>{anime.auteur}</td>
                                    <td>
                                        <img src={process.env.PUBLIC_URL + '/images/'+anime.image} width="80" alt={anime.image}/>
                                    </td>
                                    <td>
                                            <button className="btn btn-danger"
                                            onClick={() =>{if(window.confirm('Etes vous sûr de supprimer'))
                                                    {props.deleteAnime(index)
                                                };
                                            }}>
                                                <i className="fa fa-trash">Supprimer</i>

                                            </button>
                                    </td>
                                </tr>
                            );
                        })
                        : "Pas de données disponibles"  }

                </tbody>
            </table>

        );
}

export default Liste;