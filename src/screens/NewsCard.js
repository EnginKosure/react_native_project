import React from 'react';
import {Text, View, Image} from 'react-native';
import {getTheme} from 'react-native-material-kit';

const NewsCard = ({data}) => {
  const theme = getTheme();
  return (
    <View style={theme.cardStyle}>
      <Image source={{uri: data.imageUrl}} style={theme.cardImageStyle} />
      <Text style={theme.cardActionStyle}>{data.title}</Text>
      <Text style={theme.cardContentStyle}>{data.description}</Text>
    </View>
  );
};

export default NewsCard;
