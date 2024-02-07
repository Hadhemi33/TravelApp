import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';

import styles from './styles';

const All = 'All';
const AttractionsDetails = ({route}) => {
  const {item} = route?.params || {};
  return (
    <SafeAreaView style={styles.container}>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};
export default AttractionsDetails;
