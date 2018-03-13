import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class StartPage extends Component {
    static navigationOptions = {
        header: null,
      };
    render() {
        return (
            <View style={styles.container}>
                <Text>Slide</Text>
                <Button
                    title="Open Drawer Menu"
                    onPress={()=>this.props.navigation.navigate('drawer', {name:'Xcho'})}
                />
            </View>
        )
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