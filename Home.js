import React, {Component} from 'react';
import Navigator from './Navigator';
import { Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
// import MapView from 'react-native-maps';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import * as firebase from 'firebase/app';
import "firebase/database";
import "firebase/storage";

import MapView, {PROVIDER_GOOGLE, Marker, MapViewAnimated, MarkerAnimated} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

// import {
//   Player,
//   Recorder,
//   MediaStates
// } from '@react-native-community/audio-toolkit';

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class homeRoute extends React.Component {
  state = {
    email: '',
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    marker: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  }

  componentDidMount = () => {
    Geolocation.getCurrentPosition( position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      });
    });   
  }

  componentWillReceiveProps(nextProps) {
    const duration = 10

    if (this.props.region !== nextProps.coordinate) {
      if (Platform.OS === 'android') {
        if (this.marker) {
          this.marker._component.animateMarkerToCoordinate(
            nextProps.coordinate,
            duration
          );
        }
      } else {
        this.state.coordinate.timing({
          ...nextProps.coordinate,
          duration
        }).start();
      }
    }
  }

  recordPosition = () => {
    firebase.database().ref('/').update({
      email: 'agus',
    }); 
  }

  // sendMessage = () => {
  //    // Start recording
  //   let rec = new Recorder("filename.mp4").record();

  //   // Stop recording after approximately 3 seconds
  //   setTimeout(() => {
  //     rec.stop((err) => {
  //       new Player("filename.mp4")
  //       .play()
  //       .on('ended', () => {
  //         this.setState({disabled: false});
  //       });
  //     });
  //   }, 3000);
  // }


  render() {
    return(
      <View>
          <View style={{shadowOpacity: 1, shadowColor: 'black', height: 25, borderColor: 'black', borderBottomWidth:.5}}>

          </View>
          <View style={{padding: 25, borderBottomColor: 'grey', borderBottomWidth: .4}}>
            <Text style={{fontFamily: 'Baloo-Regular'}}>{this.state.email}</Text>
              {/* <Text style={{fontFamily: 'Baloo-Regular'}}>Selamat Datang!</Text> */}
              <Text>Dimana posisi anda sekarang?</Text>
          </View>

          <View style={{padding: 25}}>
              <TouchableOpacity style={{backgroundColor: '#13D667', borderRadius:10}} onPress={()=>{this.recordPosition()}}>
                  <Text style={{justifyContent: 'center', textAlign: 'center', padding: 10, color: 'white', fontFamily: 'Baloo-Regular'}}>Record Posisi</Text>
              </TouchableOpacity>
          </View>
          
          <View style={{paddingLeft: 25, paddingRight: 25, paddingTop: 5}}>
              <TouchableOpacity style={{backgroundColor: '#13D667', borderRadius:10}} onPress={()=>{this.sendMessage()}}>
                  <Text style={{justifyContent: 'center', textAlign: 'center', padding: 10, color: 'white', fontFamily: 'Baloo-Regular'}}>Kirim Pesan</Text>
              </TouchableOpacity>
          </View>

        <View style={{marginTop: "10%"}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1, alignSelf: "stretch", height: 225, position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}
            region={this.state.region}
            showsUserLocation={true}
            onRegionChangeComplete={ region => this.setState({region}) }
          >
            <MarkerAnimated
              draggable
              ref={marker => this.marker= marker}
              coordinate={this.state.region}
            />
          </MapView>
          </View>
      </View>
    );
  }
}

class historyRoute extends React.Component {
  render() {
    return(
      <View>
          <View style={{paddingLeft: 10, paddingTop: 5, paddingBottom: 5, paddingRight:10, display: "flex"}}>
              {/* <Image source={} style={{width: 50, height: 50}}/> */}
              <View>
                  <Text style={{fontFamily: 'Baloo-Regular'}}>Satrio Jati Wicaksono</Text>
              </View>
          </View>
          
      </View>
    )
  }
}

class settingRoute extends React.Component {
  render() {
    return(
        <View style={{ backgroundColor: '#673ab7' }}>
            <Text>Setting</Text>
        </View>
    );
  }
}

export default class Home extends React.Component {
  componentDidMount() {
    let firebaseConfig = {
      apiKey: "AIzaSyDJ9ASiDAxcvKEtMnFHahx20-LDwkkVHoo",
      authDomain: "smartbox-55413.firebaseapp.com",
      databaseURL: "https://smartbox-55413.firebaseio.com/",
      projectId: "smartbox-55413",
      storageBucket: "smartbox-55413.appspot.com",
      messagingSenderId: "540090955717",
      // appID: "",
    }
    
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home' },
      { key: 'history', title: 'History' },
      { key: 'setting', title: 'Setting' },
    ],
  } 

  render() {
    return (
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            home: homeRoute,
            history: historyRoute,
            setting: settingRoute,
          })}
          tabBarPosition='bottom'
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    padding: 4,
  },
  bgDanger: {
    backgroundColor: '#FF6978', 
  },
  bgSuccess: {
    backgroundColor: 'green',
  },
  bgPrimary: {
    backgroundColor: '#13D667'
  },
  bgSecondary: {
    backgroundColor: '#01BAEF'
  },
  bgDark: {
    backgroundColor: '#272D2D',
  },
  container: {
    padding: 10,
  },
  alignCenter: {
    justifyContent: 'center',
  },
  smRounded: {
      borderRadius: 10,
  },
  lgRounded: {
    borderRadius: 10
  },
  textWhite: {
    color: 'white',
  },
  rounded: {
    borderRadius: 15,
  },
  roundedLg: {
    borderRadius: 25,
  },
});
