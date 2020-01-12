import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight, TextInput, Button, ScrollView } from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

export default class Register extends React.Component {
    state = {
        alat: '',

        anggota1: '',
        anggota1No: '',
        anggota1Pass: '',

        anggota2: '',
        anggota2No: '',
        anggota2Pass: '',

        anggota3: '',
        anggota3No: '',
        anggota3Pass: '',
        
        anggota4: '',
        anggota4No: '',
        anggota4Pass: '',

        sumMembers: 4,
    }
    addMember = () => {
        this.setState(sumMembers, this.state.sumMembers++);
        this.setState("anggota"+this.state.sumMembers, '');
        this.setState("anggota"+this.state.sumMembers+"No", '');
        this.setState("anggota"+this.state.sumMembers+"Pass", '');
        return (
            <View style={{padding: 25, borderBottomColor: 'grey', borderBottomWidth: 1}}>
                <Text style={{borderBottomColor: 'grey', borderWidth:1, fontWeight: "900"}}>Anggota Keluarga 1</Text>
                <Text>Nama</Text>
                <TextInput value={this.state[this.state.sumMembers * 3 - 2]} onKeyPress={(e, name) => handleInput} id placeholder="e.g Indrawan"/>
                <Text>No. HP</Text>
                <TextInput value={this.state[this.state.sumMembers * 3 - 1]} placeholder="e.g Indrawan"/>
                <Text>Password</Text>
                <TextInput value={this.state[this.state.sumMembers * 3]} placeholder="******"  textContentType="password"></TextInput>
            </View>
        )       
    }

    registerMembers = () => {
            
    }

    render() {
        return(
            <ScrollView>
                <View style={{padding: 25, borderBottomColor: 'grey', borderBottomWidth: 1}}>
                    <Text style={{fontWeight: "900", fontSize: 17, fontFamily: "Baloo-Regular"}}>Anggota Keluarga 1</Text>
                    <Text>Nama</Text>
                    <TextInput value={this.state.anggota1} style={{fontFamily: "SourceSansPro-Light"}} placeholder="e.g Indrawan"/>
                    <Text>No. HP</Text>
                    <TextInput value={this.state.anggota1No} placeholder="e.g Indrawan"/>
                    <Text>Password</Text>
                    <TextInput value={this.state.anggota1Pass} placeholder="******" textContentType="password"></TextInput>
                </View>
                <View style={{padding: 25, borderBottomWidth: 1}}>
                    <Text style={{fontWeight: "900", fontSize: 17, fontFamily: "Baloo-Regular"}}>Anggota Keluarga 2</Text>
                    <Text>Nama</Text>
                    <TextInput value={this.state.anggota2} placeholder="e.g Indrawan"/>
                    <Text>No. HP</Text>
                    <TextInput value={this.state.anggota2No} placeholder="e.g Indrawan"/>
                    <Text>Password</Text>
                    <TextInput value={this.state.anggota2Pass} placeholder="******" textContentType="password"></TextInput>
                </View>
                <View style={{padding: 25, borderBottomWidth: 1}}>
                    <Text style={{fontWeight: "900", fontSize: 17, fontFamily: "Baloo-Regular"}}>Anggota Keluarga 3</Text>
                    <Text>Nama</Text>
                    <TextInput value={this.state.anggota3} placeholder="e.g Indrawan"/>
                    <Text>No. HP</Text>
                    <TextInput value={this.state.anggota3No} placeholder="e.g Indrawan"/>
                    <Text>Password</Text>
                    <TextInput value={this.state.anggota3Pass} placeholder="******" textContentType="password"></TextInput>
                </View>
                <View style={{padding: 25, borderBottomWidth: 1}}>
                    <Text style={{fontWeight: "900", fontSize: 17, fontFamily: "Baloo-Regular"}}>Anggota Keluarga 4</Text>
                    <Text>Nama</Text>
                    <TextInput value={this.state.anggota4} placeholder="e.g Indrawan"/>
                    <Text>No. HP</Text>
                    <TextInput value={this.state.anggota4No} placeholder="e.g Indrawan"/>
                    <Text>Password</Text>
                    <TextInput value={this.state.anggota4Pass} placeholder="******" textContentType="password"></TextInput>
                </View>
                <View style={{padding: 25, borderBottomWidth: 1}}>
                    <Text>Alat di Rumah</Text>
                    <TextInput/>
                </View>

                <View style={{padding: 25}}>
                    <Button
                        title="Tambah Anggota!" onPress={()=>addMember}
                    />
                </View>

                <View style={{padding: 25}}>
                    <Button
                        title="Daftar!" onPress={() => registerMembers}
                    />
                </View>
            </ScrollView>
        );
    }
}