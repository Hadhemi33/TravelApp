import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';

import styles from './styles';

const All = 'All';
const AttractionsDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item.images[0] : null;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 20}}
        style={styles.mainImage}
        source={{uri: mainImage}}
      />
      <Text onPress={onBack} style={{margin: 32}}>
        Back
      </Text>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};
export default AttractionsDetails;
