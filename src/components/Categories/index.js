import React from 'react';
import styles from './styles';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      style={{marginRight: -32}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            tyle={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Categories;
