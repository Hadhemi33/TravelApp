import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({text}) => {
  const [stateText, setText] = useState('Default state');
  useEffect(() => {
    setText(text);
  }, [text]);

  return <Text style={styles.Title}>{stateText}</Text>;
};
//or
// const Title = props => {
//   return <Text style={styles.Title}>{props.text}</Text>;
// };
export default Title;
