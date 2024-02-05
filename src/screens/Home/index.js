import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go" />
        <Title text="Explore Attractions" style={styles.subtitle} />
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Historical',
            'Random',
            'Trending',
            'Exclusive',
            'others',
          ]}
        />
        <View style={styles.row}>
          <AttractionCard
            title="Entertainment Parc"
            subtitle="Rome"
            imageSrc="https://ds.static.rtbf.be/article/image/770x433/8/0/4/02d0f52911faf018d3787e7422c04889-1533543518.jpg"
          />
          <AttractionCard
            title="Entertainment Parc"
            subtitle="Rome"
            imageSrc="https://ds.static.rtbf.be/article/image/770x433/8/0/4/02d0f52911faf018d3787e7422c04889-1533543518.jpg"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
