import { Text, ScrollView } from 'react-native';
import styles from './Detail.styles';
import { Image } from 'react-native';
import React from 'react';

const Detail = ({ navigation, route }) => {
  const { details } = route.params;
  console.log(details)

  return (
    <ScrollView>
       <Image style={styles.image} source={{uri: details.image}} /> 
        <Text style={styles.name}>{details.firstName} {details.lastName}</Text>
        <Text style={styles.name}>Age: {details.age}</Text>
        <Text style={styles.character_title}>Company Details</Text>
        <Text style={styles.name}>Department: {details.company.department}</Text>
        <Text style={styles.name}>Name: {details.company.name}</Text>
        <Text style={styles.name}>Title: {details.company.title}</Text>
        <Text style={styles.name}>Address: {details.address.address}</Text>
        <Text style={styles.name}>City: {details.address.city}</Text>
        <Text style={styles.name}>Postal Code: {details.address.postalCode}</Text>
        <Text style={styles.name}>State: {details.address.state}</Text>
    </ScrollView>
  );
};

export default Detail;
