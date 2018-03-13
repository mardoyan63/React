import React, { Component } from 'react'
import { StyleSheet, Text, View, BackHandler, ScrollView, AsyncStorage } from 'react-native';
import { Icon, Button, Header, Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { getNewProfiles } from '../reducer/actions/profilesAction'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameInput: '',
            idInput: '',
            newName: '',
            filterText: ''
        }
    }
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Icon name='home' color={tintColor} />
        ),
    };
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }
    onFindName() {
        this.props.onFilterItems(this.state.filterText)
    }
    getValue = async () => {

        try {
            const value = await AsyncStorage.getItem('key');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
        console.log('get');


    }
    setValue = async () => {
        try {
            await AsyncStorage.setItem('key', 'I like to save it.');
        } catch (error) {
            // Error saving data
        }

        console.log('set');


    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon onPress={() => this.props.navigation.navigate('DrawerOpen')} underlayColor='transparent' name='menu' color='#fff' />}
                    centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    backgroundColor='#9C27B0'
                    outerContainerStyles={styles.header}
                />
                <ScrollView>
                <Text>{this.state.idInput}-{this.state.newName}</Text>
                <View style={styles.rowContainer1}>
                <Input placeholder='Add new profile' value={this.state.nameInput} onChangeText={(text) => this.setState({ nameInput: text })}></Input>
                <Button onPress={() => this.props.onAddNewProfile({ name: this.state.nameInput })} text='Add Profile'></Button>
                </View>

                <View style={styles.gridContainer}>
                <View style={styles.rowContainer1}>
                <View style={styles.colContainer1}>
                <Input placeholder='Create profile ID' value={this.state.idInput} onChangeText={(text) => this.setState({ idInput: text })}></Input>
                <Input placeholder='New profile name' vlue={this.state.newName} onChangeText={(text) => this.setState({ newName: text })}></Input>
                </View>
                <View style={styles.colContainer2}>
                <Button
                    text='Create name'
                    onPress={() => { return this.props.onCreateProfileName(this.state.idInput, this.state.newName) }}
                />
                </View>
                </View>
                <View style={styles.rowContainer2}>
                <View style={styles.colContainer1}>
                <Input placeholder='Create profile ID' value={this.state.idInput} onChangeText={(text) => this.setState({ idInput: text })}></Input>
                <Input placeholder='New profile name' vlue={this.state.newName} onChangeText={(text) => this.setState({ newName: text })}></Input>
                </View>
                <View style={styles.colContainer2}>
                <Button
                    text='Create name'
                    onPress={() => { return this.props.onCreateProfileName(this.state.idInput, this.state.newName) }}
                />
                </View>
                </View>
                </View>

                <View style={styles.gridContainer}>
                <View style={styles.rowContainer1}>
                <View style={styles.colContainer1}>
                <Input placeholder='Create profile ID' value={this.state.idInput} onChangeText={(text) => this.setState({ idInput: text })}></Input>
                <Input placeholder='New profile name' vlue={this.state.newName} onChangeText={(text) => this.setState({ newName: text })}></Input>
                </View>
                <View style={styles.colContainer2}>
                <Button
                    text='Create name'
                    onPress={() => { return this.props.onCreateProfileName(this.state.idInput, this.state.newName) }}
                />
                </View>
                </View>
                <View style={styles.rowContainer2}>
                <View style={styles.colContainer1}>
                <Input placeholder='Create profile ID' value={this.state.idInput} onChangeText={(text) => this.setState({ idInput: text })}></Input>
                <Input placeholder='New profile name' vlue={this.state.newName} onChangeText={(text) => this.setState({ newName: text })}></Input>
                </View>
                <View style={styles.colContainer2}>
                <Button
                    text='Create name'
                    onPress={() => { return this.props.onCreateProfileName(this.state.idInput, this.state.newName) }}
                />
                </View>
                </View>
                </View>
                



                <Input placeholder='Search' value={this.state.filterText} onChangeText={(text) => this.setState({ filterText: text }, () => { this.onFindName() })}></Input>
                <View>{this.props.store.map(
                    (profile, i) => <Text style={styles.textStyle} key={i}>{profile.id}.{profile.name}</Text>
                )}</View>
                <Button
                    text='Get new'
                    onPress={() => this.props.onGetAnyProfiles()}
                />
                </ScrollView>
            </View>
        )
    }
}

export default connect(
    state => ({
        store: state.Profiles.filter(profile => profile.name.toLowerCase().includes(state.Filter.toLowerCase()))
    }),
    dispatch => ({
        onAddNewProfile: (newProfile) => {
            dispatch({ type: 'ADD_PROFILE', new: newProfile })
        },
        onCreateProfileName: (createID, newName) => {
            dispatch({ type: 'CREATE_NAME', id: createID, new: newName })
        },
        onFilterItems: (text) => {
            dispatch({ type: 'FILTER', filterText: text })
        },
        onGetAnyProfiles: () => {
            dispatch(getNewProfiles())
        }
    })
)(HomePage)

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        height: '100%'
    },
    gridContainer:{

    },
    rowContainer1:{
        //flex: 1,
        flexDirection: 'row',
    },
    rowContainer2:{
        //flex: 1,
        flexDirection: 'row',
    },
    colContainer1:{
        borderColor: 'black',
        borderWidth: 1,
        flex:2,
        flexDirection: 'column',
    },
    colContainer2:{
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        flex:1,
        flexDirection: 'column',
    },
    header: {
        height: 50,
    },
    textStyle: {
        fontSize: 30
    }
});