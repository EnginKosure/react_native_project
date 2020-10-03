import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
const App = () => {
  return (
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
  );
};
export default App;
