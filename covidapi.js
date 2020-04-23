import * as React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    totalCases: '',
    totalRecovered: '',
    totalDeaths: '',
    totalUSCases: '',
    totalUSRecovered: '',
    totalUSDeaths: ''
  };
  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('https://api.covid19api.com/summary', requestOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          totalCases: json['Global']['TotalConfirmed'],
        });
        this.setState({
          totalRecovered: json['Global']['TotalRecovered'],
        });        
        this.setState({
          totalDeaths: json['Global']['TotalDeaths'],
        });
        this.setState({
          totalUSCases: json['Countries'][235]['TotalConfirmed'],
        });
        this.setState({
          totalUSRecovered: json['Countries'][235]['TotalRecovered'],
        });        
        this.setState({
          totalUSDeaths: json['Countries'][235]['TotalDeaths'],
        });

      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>World Summary </Text>
        <Text style={styles.cases}>Total Cases: {this.state.totalCases} </Text>
        <Text style={styles.cases}>Total Deaths: {this.state.totalDeaths} </Text>
        <Text style={styles.cases}>Total Recovered Cases: {this.state.totalRecovered} </Text>
        <Text style={styles.title}>USA Summary </Text>
        <Text style={styles.cases}>Total USA Cases: {this.state.totalUSCases} </Text>
        <Text style={styles.cases}>Total USA Deaths: {this.state.totalUSDeaths} </Text>
        <Text style={styles.cases}>Total USA Recovered Cases: {this.state.totalUSRecovered} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    color:'red',
    marginTop: 125,
    width: 450,
    height: 400,
    flex: 1,
  },
  title: {
    color: '#223',
    padding:20,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  cases: {
    color: '#000',
    padding: 10,
    fontSize:20,
    textAlign: 'center'
  },
});