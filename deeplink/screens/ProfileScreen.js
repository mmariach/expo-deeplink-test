import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO-ID');


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>Hello: {JSON.stringify(name)}</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}