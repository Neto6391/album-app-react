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
