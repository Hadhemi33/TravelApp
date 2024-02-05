import React from 'react';
import styles from './styles';
import {FlatList, Text, View} from 'react-native';

const Categories = ({categories, selectedCategory}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item;
        return (
          <View
            tyle={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </View>
        );
      }}
    />
  );
};

export default Categories;
