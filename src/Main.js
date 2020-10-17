// Overall - 1
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from "react-native";
import productData from "./product_data.json";

import { ProductCard } from "./components";
import SearchBar from "./components/SearchBar";

const App = () => {

    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([])
    const renderListItem = ({ item }) => <ProductCard product={item} />
    useEffect(() => {
        const filteredValue = productData.filter(item => {
            const text = searchValue.toUpperCase();
            const productTitle = item.title.toUpperCase();
            return productTitle.indexOf(text) > -1;
        })
        setDisplayList(filteredValue)
    }, [searchValue]);

    useEffect(() => {
        // Alert.alert("Clarushop", "Hoşgeldiniz, keyifli alışverişler..");
        setDisplayList(productData)
    }, [])


    return (
        <SafeAreaView>
            <View>
                <Text style={styles.banner}>Clarushop</Text>

                <SearchBar onSearch={(value) => setSearchValue(value)} />

                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={displayList}
                    renderItem={renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    banner: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 40,
        textAlign: "center"
    },

});