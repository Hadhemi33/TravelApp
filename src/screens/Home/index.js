import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';
import {useNavigation} from '@react-navigation/native';
const All = 'All';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(All);
  const [data, setdata] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    setdata = jsonData;
  }, []);
  useEffect(() => {
    if (selectedCategory === ALL) {
      setdata(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );

      setdata(filteredData);
    }
  }, [selectedCategory]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        style={{flexGrow: 1}}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found.</Text>
        }
        ListHeaderComponent={
          <>
            <View style={{margin: 32}}>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go" />
              <Title text="Explore Attractions" style={styles.subtitle} />
            </View>
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[All, ...categories]}
            />
          </>
        }  
        data={data}
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            onPress={() => navigation.navigate('AttractionsDetails', {item})}
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default Home;
