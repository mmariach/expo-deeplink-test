import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class StackProfileScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO-ID');


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Stack Screen</Text>
        <Text>Hello: {JSON.stringify(name)}</Text>
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}