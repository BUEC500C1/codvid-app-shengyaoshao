import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      countryname:'',
      totalCases: '',
      totalRecovered: '',
      totalDeaths: '',
      totalCNCases: '',
      totalCNRecovered: '',
      totalCNDeaths: '',
      totalCACases: '',
      totalCARecovered: '',
      totalCADeaths: '',
      totalMXCases: '',
      totalMXRecovered: '',
      totalMXDeaths: '',
      totalCBCases: '',
      totalCBRecovered: '',
      totalCBDeaths: '',
      totalGMCases: '',
      totalGMRecovered: '',
      totalGMDeaths: '',
      jsondata:[]
    };
}
  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch('https://api.covid19api.com/summary', requestOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          totalCases: json['Countries'][236]['TotalConfirmed'],
        });
        this.setState({
          totalRecovered: json['Countries'][236]['TotalRecovered'],
        });        
        this.setState({
          totalDeaths: json['Countries'][236]['TotalDeaths'],
        });
        this.setState({
          countryname: json['Countries'][236]['Country'],
        });
        this.setState({
          totalCNCases: json['Countries'][45]['TotalConfirmed'],
        });
        this.setState({
          totalCNRecovered: json['Countries'][45]['TotalRecovered'],
        });        
        this.setState({
          totalCNDeaths: json['Countries'][45]['TotalDeaths'],
        });
        this.setState({
          totalCACases: json['Countries'][39]['TotalConfirmed'],
        });
        this.setState({
          totalCARecovered: json['Countries'][39]['TotalRecovered'],
        });        
        this.setState({
          totalCADeaths: json['Countries'][39]['TotalDeaths'],
        });
        this.setState({
          totalMXCases: json['Countries'][142]['TotalConfirmed'],
        });
        this.setState({
          totalMXRecovered: json['Countries'][142]['TotalRecovered'],
        });        
        this.setState({
          totalMXDeaths: json['Countries'][142]['TotalDeaths'],
        });
        this.setState({
          totalCBCases: json['Countries'][55]['TotalConfirmed'],
        });
        this.setState({
          totalCBRecovered: json['Countries'][55]['TotalRecovered'],
        });        
        this.setState({
          totalCBDeaths: json['Countries'][55]['TotalDeaths'],
        });
        this.setState({
          totalGMCases: json['Countries'][89]['TotalConfirmed'],
        });
        this.setState({
          totalGMRecovered: json['Countries'][89]['TotalRecovered'],
        });        
        this.setState({
          totalGMDeaths: json['Countries'][89]['TotalDeaths'],
        });
        this.setState({ 
          jsondata: json.Global,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (

      <View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            
            latitude: 37,
            longitude: -100,
            latitudeDelta: 35,
            longitudeDelta: 35,
            
          }}
        >
          <Marker
          coordinate = {{latitude: 40, longitude: -100}}
          >
            <Callout>
              <Text style = {styles.text}>{this.state.countryname}</Text>
              <Text style = {styles.text}>Totoal Confirmed:{this.state.totalCases}</Text>
              <Text style = {styles.text}>Totoal Recovered:{this.state.totalRecovered}</Text>
              <Text style = {styles.text}>Totoal Deaths:{this.state.totalDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 35.8, longitude: 104}}
          >
            <Callout>
              <Text style = {styles.text}>China</Text>
              <Text style = {styles.text}>Totoal Confirmed:{this.state.totalCNCases}</Text>
              <Text style = {styles.text}>Totoal Recovered:{this.state.totalCNRecovered}</Text>
              <Text style = {styles.text}>Totoal Deaths:{this.state.totalCNDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 56, longitude: -106}}
          >
            <Callout>
              <Text style = {styles.text}>Cannada</Text>
              <Text style = {styles.text}>Totoal Confirmed:{this.state.totalCACases}</Text>
              <Text style = {styles.text}>Totoal Recovered:{this.state.totalCARecovered}</Text>
              <Text style = {styles.text}>Totoal Deaths:{this.state.totalCADeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 19.5, longitude: -100}}
          >
            <Callout>
              <Text style = {styles.text}>Mexico</Text>
              <Text style = {styles.text}>Totoal Confirmed:{this.state.totalMXCases}</Text>
              <Text style = {styles.text}>Totoal Recovered:{this.state.totalMXRecovered}</Text>
              <Text style = {styles.text}>Totoal Deaths:{this.state.totalMXDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 21.5, longitude: -77.7}}
          >
            <Callout>
              <Text style = {styles.text}>Cuba</Text>
              <Text style = {styles.text}>Totoal Confirmed:{this.state.totalCBCases}</Text>
              <Text style = {styles.text}>Totoal Recovered:{this.state.totalCBRecovered}</Text>
              <Text style = {styles.text}>Totoal Deaths:{this.state.totalCBDeaths}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 15.7, longitude: -90}}
          >
            <Callout>
              <Text style = {styles.text}>Guatemala</Text>
              <Text style = {styles.text}>Totoal Confirmed:{this.state.totalGMCases}</Text>
              <Text style = {styles.text}>Totoal Recovered:{this.state.totalGMRecovered}</Text>
              <Text style = {styles.text}>Totoal Deaths:{this.state.totalGMDeaths}</Text>
            </Callout>
          </Marker>

        </MapView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  popup:{
    backgroundColor: '#233',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  map: {
     height: '100%',
     width: '100%'
  },
  title: {
    color: '#223',
    padding:20,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    color: '#000',
    padding: 2,
    fontSize:15,
    textAlign: 'center'
  },
});
