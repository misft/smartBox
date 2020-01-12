import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, Button } from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {createAppContainer, NavigationEvents} from 'react-navigation';

export default class Login extends React.Component {
    state = {
        noHpText: '',
        passwordText: '',
    }
    
    handleNoHp = (text) => {
        this.setState(noHpText, text);
    }

    handlePassword = (text) => {
        this.setState(passwordText, text);
    }

    handleLogin = () => {
        alert("Login");
        navigate('app');
    }

    getRegister = () => {
        alert("Register");
        navigate("register");
    }
    
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={{flexDirection: 'row', marginTop: 75}}>
                
                <View style={{flexDirection: 'col', marginTop: 50}}>
                    <Text>
                        No. HP
                    </Text>
                    <TextInput value={this.state.noHpText} style={{height: 40, width: '70%'}} onChangeText={(text) => handleNoHp}/>
                </View>

                <View style={{flexDirection: 'col', marginTop: 35}}>
                    <Text>
                        Password
                    </Text>
                    <TextInput value={this.state.passwordText} style={{height: 40, width: '70%'}} textContentType='password' onChangeText={(text) => handlePassword}/>
                </View>

                <View style={{flexDirection: 'col', marginTop: 40}}>
                    <Button
                        title='Login' onPress={() => handleLogin}
                    />
                </View>

                <View style={{flexDirection: 'col', marginTop: 35}}>
                    <Text>
                        Tidak punya akun? <TouchableHighlight style={{color: 'blue'}} onPress={() => getRegister}>Daftar disini!</TouchableHighlight>
                    </Text>
                </View>
            </View>
        );
    }
}