import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };
    
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }
    
    //Generate the list of albums details
    renderAlbums() {
        /* # É um array help, sendo que ele funciona como uma arrow function em que percorrerá 
           o array e retornará os elementos;
           # A propriedade 'key' é o que react utilizará para descobrir qual item da lista é 
           atualizado em tempo real, em que o único requerimento ele seja único entre outros
           elementos no array e que ele tenha o mesmo valor da prop que redenrizamos a lista;
        */        
        return this.state.albums.map(album => 
            // <Text key={album.title}>{album.title}</Text> 
            <AlbumDetail key={album.title} albumData={album} />  
        );
    }


    render() {
        //console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
