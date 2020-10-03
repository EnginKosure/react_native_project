import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, SafeAreaView} from 'react-native';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: 'red',
            margin: 10,
            padding: 5,
          }}>
          <Text>Hello world!</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
