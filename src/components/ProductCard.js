import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';

// {
//     "id": 1,
//     "title": "General Mobile GM 20",
//     "imgURL": "https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg",
//     "price": "₺1.810,21",
//     "inStock": true
// }

const ProductCard = ({ product }) => {
    const a = () => product.inStock ? "In Stock" : "Not in stock"
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imgURL }}
                style={styles.image}
            />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text>{product.title}</Text>
                <Text style={{ fontWeight: 'bold' }}>{product.price}</Text>
                <Text>{product.inStock ? "InStock" : "NOT in stock"}</Text>
            </View>
        </View>
    )
}

export { ProductCard }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0'
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    }
})