import React, {Fragment, Component} from 'react';
import Liste from './Liste.js';
import Ajout from './Ajout.js';

class Admin extends Component {
        state = {
            datas:[
                {id:1, titre:'My hero academia', annee:'2014', style:'Action', auteur:'Kohei Horikoshi', image:'mha.jpg'},
                {id:2, titre:'Shingeki no kyojin', annee:'2009', style:'Action', auteur:'Hajime Isayama', image:'SNK.jpg'},
                {id:3, titre:'Haikyu', annee:'2014', style:'Sport', auteur:'Furudate Haruichi', image:'haikyu.jpg'},
                {id:4, titre:'Vinland Saga', annee:'2019', style:'Historique', auteur:'Yukimura Makoto', image:'vinland.jpg'},
                {id:5, titre:'Dr.Stone', annee:'2019', style:'Post-Apolcalyptique', auteur:'Riichiro Inagaki', image:'Dr_stone.jpg'},
                {id:6, titre:'Demon Slayer', annee:'2019', style:'Arts Martiaux', auteur:'Koyoharu Gotouge', image:'Demon_Slayer.jpg'},
                {id:7, titre:'Jojo Bizzare Adventure', annee:'2012', style:'Fantasy', auteur:'Hirohiko Araki', image:'Jojo.jpg'}
            ]
        }
        componentDidMount =()=>{
            let tabAnime = JSON.parse(localStorage.getItem('datas'));
            if(!tabAnime || tabAnime.length === 0){
                let Animes1 = localStorage.setItem('datas',JSON.stringify(this.state.datas));
                this.setState({datas:Animes1}, function(){
   
                    console.log(this.state.datas);
                });
            }else{
                let Animes2 = JSON.parse(localStorage.getItem('datas')); 
                    this.setState({datas:Animes2});
            }
            
        }

        removeAnime = (index) =>{
            const {datas} = this.state
            this.setState({
                datas: datas.filter((d, i) =>{
                    return i!==index
                })
            }, function(){
                localStorage.setItem('datas',JSON.stringify(this.state.datas));
        })
        }
        addAnime = (newAnime) => {
            if(this.state.datas.length !== 0){
   
                newAnime.id = (this.state.datas[this.state.datas.length - 1].id + 1)
            }
           this.setState({datas: [...this.state.datas, newAnime]},function(){
               localStorage.setItem('datas',JSON.stringify(this.state.datas));
           })
        }

    render() { 
        return (
            <Fragment>
                <h1 className="bg-secondary text-white text-center">Ma page d'Administration</h1>
                <Ajout ajouter = {this.addAnime} />
                <Liste deleteAnime = {this.removeAnime} animes = {this.state.datas} />
            </Fragment>
         );
    }
}
 
export default Admin;