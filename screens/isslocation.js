import {Component, useState} from 'react';
import {Text, View, StyleSheet, ImageBackground, SafeAreaView, StatusBar, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios, {Axios} from 'axios';

export default function IssLocationScreen() {
    const[location,setLocation] = useState({});
    useEffect(() =>{
      setTimeout(() => {
        axios
          .get('https://api.wheretheiss.at/v1/satellites/25544')
          .then(response => {
            setLocation(response.data)
          })
          .catch(error => {
            Alert.alert(error.message)
          })
      },1000)
    })
    if (Object.keys(location).length === 0) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
          <Text>carregando...</Text>
        </View>
      )
    } 
    else {
    return (
      <>
        <View style={styles.container} >
          <SafeAreaView style={styles.droidSafeArea} >
            <ImageBackground style={styles.backgroundImage} source={require('../assets/iss_bg')}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText} >Tela de Localização da EEI</Text>
              </View>
            </ImageBackground>
          </SafeAreaView>
        </View>
        <View style={styles.mapContainer} >
          <MapView 
          style={styles.map} 
          region={{latitude: location.latitude, longitude: location.longitude, latitudeDelta: 100, longitudeDelta: 100}}>
          </MapView>
          <Marker coordinate ={{
              latitude: location.latitude, longitude: location.longitude
            }} >
            <image source={require('../assets/iss_icon')} style={{height: 50, width: 50}} ></image>
          </Marker>
        <View style={styles.infoContainer} >
          <Text style={styles.infoText} >latitude: {location.latitude}</Text>
          <Text style={styles.infoText} >longitude: {location.longitude}</Text>
          <Text style={styles.infoText} >Altitude (km): {location.altitude}</Text>
          <Text style={styles.infoText} >velocidade (km/h): {location.velocity}</Text>
        </View>
          
        </View>
      </>
    );
    }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
  droidSafeArea: {
    marginTop: Plataform.os === 'android'? StatusBar.currentHeight: 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  mapContainer: {
    flex: 0.7,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30
  },
  infoText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  }
})