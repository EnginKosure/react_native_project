import React from 'react';
import {Text, StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import {getTheme} from 'react-native-material-kit';
import NewsCard from './NewsCard';
import data from './data';

const NewsScreen = ({navigation}) => {
  const theme = getTheme();
  const renderNews = ({item}) => <NewsCard data={item} />;
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={renderNews}
          ListHeaderComponent={() => (
            <Text style={theme.cardTitleStyle}>News</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default NewsScreen;
