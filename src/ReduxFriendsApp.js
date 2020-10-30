import 'react-native-gesture-handler';
import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import friendsReducer from './reducers/FriendsReducer';
import HomeScreen from './screens/HomeScreen';
import FriendsScreen from './screens/FriendsScreen';

const store = createStore(friendsReducer);

const Stack = createStackNavigator();
const FriendsContext = createContext();

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                        />
                        <Stack.Screen
                            name="Friends"
                            component={FriendsScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}