import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Title from '../../components/Title';
import TitleClass from '../../components/Title/classComponent';

const Home = () => {
  const [title, setTitle] = useState('My First Component');
  useEffect(() => {
    setTimeout(() => {
      setTitle('Updated prop Text ');
    }, 3000);
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Title text={title} />

        <TitleClass text="class Component" />
      </View>
    </SafeAreaView>
  );
};
export default Home;
