import React from 'react';
import styles from './styles';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const AttractionCard = ({imageSrc, title, subtitle, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image source={{uri: imageSrc}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AttractionCard;
