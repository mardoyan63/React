import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon, Header } from 'react-native-elements'

export default class OtherPage extends Component{
    constructor(props){
        super(props)
        console.log(props.navigation.state.params.name);
        
    }
    static navigationOptions = {
        drawerLabel: 'Other',
        drawerIcon: ({ tintColor }) => (
          <Icon name='info' color={tintColor}/>
        ),
      };
    render(){
        return(
            <View>
            <Header
                    leftComponent={(1<2) ? (<Icon onPress={() => this.props.navigation.navigate('DrawerOpen')} name='menu' color='#fff' />) : null}
                    centerComponent={{ text: 'Other', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    backgroundColor='#9C27B0'
                    outerContainerStyles={styles.header}
                />
                <Text>Hello!</Text>
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
      header:{
        height: 50,
    }
})