import axios from 'axios';
import {Component} from 'react';
import {Text, View, StyleSheet, Alert } from 'react-native';
import axios, {Axios} from 'axios';

export default function meteoScreen() {
  const[meteors,setMeteors] = useState({});
    useEffect(() =>{
      axios
          .get('https://api.nasa.gov/neo/rest/v1/feed?api_key=nAkq24DJ2dHxzqXyzfdreTvczCVOnwJuFLFq4bDZ')
          .then(response => {
            setMeteors(response.data.near_eath_objects)
          })
          .catch(error => {
            Alert.alert(error.message)
          })
    },[]);
    if (Object.keys(meteors).length === 0){
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <Text>carregando...</Text>
      </View>
    }
    else {
      let meteor_arr = Object.keys(meteors).map(mateor_date => {
        return meteors(mateor_date)
      })
      let meteorArray = [].concat.apply([], meteor_arr);
      meteorArray.forEach(function (element) {
        let diameter = (element.estimated.diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max)
        let threatScore = (diameter / element.close.approach_data[0].miss_distance.kilometers) * 1000000000
        element.threat_score = threatScore
      })
      return (
        <>
          <View style={{flex:1,
                      justifyContent:'center',
                      alignItems:'center'}}>
            <Text>Tela de meteoros</Text>
          </View>
        </>
      );
    }
    
  }

  // axios
  //.get('https://api.wheretheiss.at/v1/satellites/25544')
  //.then(response => {
    //setLocation(response.data)
  //})
  //.catch(error => {
    //Alert.alert(error.message)
  //}) 