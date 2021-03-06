import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (album) => {
    
    //Structuring props, when there is a wide variety of data coming in through
    const { title, artist, thumbnail_image, image, url } = album.albumData;
    const { 
        headerContentStyle, 
        thumbnailStyle,
        thubnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thubnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />   
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thubnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 350,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
