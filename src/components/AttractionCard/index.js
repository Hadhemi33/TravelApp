import React from 'react';
import styles from './styles';
import {Text, View, Image} from 'react-native';

const AttractionCard = ({imageSrc, title, subtitle}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: imageSrc}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default AttractionCard;
