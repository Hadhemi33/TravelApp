import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
  Pressable,
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
        source={{uri: mainImage}}>
        <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8}>
            <Image
              style={styles.icon}
              source={require('../../assets/back.png')}
            />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image
              style={styles.icon}
              source={require('../../assets/share.png')}
            />
          </Pressable>
        </View>
        <View style={styles.footer}>
          {item?.images?.length
            ? item?.images.map(image => {
                <Image
                  key={image}
                  source={{uri: image}}
                  style={styles.miniImage}
                />;
              })
            : null}
        </View>
      </ImageBackground>

      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};
export default AttractionsDetails;
