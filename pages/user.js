import React, { Component } from 'react';
import {
  TextInput,
  View,
  Button,
  AsyncStorage
} from 'react-native'

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="请输入你的名字"
          onChangeText={this.handleChangeText.bind(this)}
          value={this.state.text}
        />
        <Button
          color="#0091f9"
          onPress={this.handlePressSure}
          title="确定"
        />
      </View>
    );
  }
  handleChangeText(text) {
    this.setState({text})
  }
  handlePressSure() {
    try {
      await AsyncStorage.setItem('username', this.state.text);
    } catch (error) {
      // Error saving data
      console.error(error)
    }
  }
}