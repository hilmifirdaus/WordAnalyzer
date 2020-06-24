/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      word: ' ',
      consonant: 0,
      vowel: 0,
      numChar: 0
    }
  }

  analyzeWord = () => {
    let vow = 0;
    let cons = 0;
    let charNo = 0;

    for (let i = 0; i < this.state.word.length; i++){
      let ch = this.state.word.charAt(i);

      if(ch != ' '){
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
          vow++;
          this.setState({vowel: vow});
        }
        else{
          cons++;
          this.setState({consonant: cons});
        }
        charNo++;
        this.setState({numChar: charNo});
      }
        
    }
    return;
  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>A Word Analyzer</Text>
        </View>
        <View>
          <TextInput style={styles.inputBox} onChangeText={
            (word) => this.setState({word})} placeholder='type here'/>
        </View>
        <View style={styles.button}>
          <Button color= "#1d3557" onPress={this.analyzeWord} 
          title='Analyze'/>
        </View>
        <View>
          <Text style={styles.results}>Word: {this.state.word}</Text>
          <Text style={styles.results}>No of Consonants: {this.state.consonant}</Text>
          <Text style={styles.results}>No of Vowels: {this.state.vowel}</Text>
          <Text style={styles.results}>No of Character: {this.state.numChar}</Text>
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1faee',
    //justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
    marginTop: 20,
    },
  title: {
    textAlign: 'center', 
    fontWeight: 'bold',
    color: '#e63946',
    marginBottom: 50,},
  inputBox: {
    margin: 10,
    paddingHorizontal: 60, 
    justifyContent: 'center', 
    backgroundColor: 'white',
    textAlign: 'center',},
  button: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    margin: 20,
    fontWeight: 'bold',},
  results: {
    textAlign: 'center', 
    //marginTop: 20, 
    color: '#e63946',
    fontWeight: 'bold',},

});




