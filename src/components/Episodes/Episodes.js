import {View, Text, TouchableOpacity} from 'react-native';
import { Image } from 'react-native';
import React from 'react';
import styles from './Episodes.styles';

const Episodes = ({item, navigation}) => {
  hadleGoToDetail = details => {
    navigation.navigate('Detail', {details});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        key={item.id}
        onPress={() => hadleGoToDetail(item)}>
        <Image style={styles.image} source={{uri: item.image}} /> 
        <Text style={styles.item_text}>{item.firstName} - {item.age}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Episodes;
