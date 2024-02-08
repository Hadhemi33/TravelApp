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
import Title from '../../components/Title';
import styles from './styles';
import InfoCard from '../../components/infoCard';
const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
const All = 'All';
const AttractionsDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item.images[0] : null;
  const onBack = () => {
    navigation.goBack();
  };
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };
  const diffImages = item?.images?.length - slicedImages?.length;
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
        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {slicedImages?.map((image, index) => (
            <View key={image}>
              <Image source={{uri: image}} style={styles.miniImage} />
              {diffImages > 0 && index === slicedImages?.length - 1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}> (`+${diffImages}`)</Text>
                </View>
              ) : null}
            </View>
          ))}
        </Pressable>
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View>
          <Title style={styles.title} text={item?.name} />
          <Text style={styles.city}>{item?.city}</Text>
        </View>
        <Title style={styles.title} text={item?.entry_price} />
      </View>
      <InfoCard
        text={item?.address}
        icon={require('../../assets/location_circle.png')}
      />
      <InfoCard
        text={`OPEN
         ${item?.opening_time} - ${item?.closing_time}`}
        icon={require('../../assets/schedule.png')}
      />
    </SafeAreaView>
  );
};
export default AttractionsDetails;
