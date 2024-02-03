import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Default state text',
    };
  }
  //called when the component first mount in the screen
  componentDidMount() {
    //1
    //initialized
  }
  componentDidUpdate() {
    //3
    //called when the component update / rendered
  }
  componentWillUnmount() {
    //4
    //called when the component is removed from the screen
  }
  onTextPress = () => {
    this.setState({text: 'New state text'});
  };
  render() {
    //2
    const {text} = this.state;
    return (
      <Text onPress={this.onTextPress} style={styles.title}>
        {text}{' '}
      </Text>
    );
    // return <Text style={styles.title}>Title class component </Text>;
  }
}
export default Title;
