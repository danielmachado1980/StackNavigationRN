import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    render() {
        const { navigate } = this.props.navigation;
        return ( 
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text> HomeScreen Page! </Text>
                </View>
                <View>
                    <Button
                    onPress={() => navigate('Profile')}
                    title="Go to Profile" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});