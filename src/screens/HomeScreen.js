import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } '@react-navigation/native';

const HomeScreen = () => {
    const myFriends = useSelector(st => st.current)
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>You have {myFriends.length} friends.</Text>

            <Button
                title="Add some friends"
                onPress={() =>
                    navigation.navigate('Friends')
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
}

export default connect(mapStateToProps)(HomeScreen);