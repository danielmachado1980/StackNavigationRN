import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile'
    };
    render(){
        return (
        <View style={styles.container}>
            <Text>This is Profile Page.</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});