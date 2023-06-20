import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button,Alert, Pressable } from "react-native";
import Joke2 from "./assets/Joke2.png";
import Joke3 from "./assets/Joke3.png";
import data from './data';


export default function App() {
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageBackGround}>
          <Image
            style={styles.image}
            source={require("./assets/Joke2.png")}
          ></Image>
        </View>
        <View style={styles.containerTop}>
          <Text style={styles.textTop}>A joke a day keeps the doctor away</Text>
          <Text style={styles.textBelow}>If you joke wrong way, your teeth have to pay. (Serious)</Text>
        </View>
        <View style={styles.brScript}>
      {data.map(item => (
        <Text style={styles.Script} key={item.id}>{item.name}</Text>
      ))}
    </View>
        <View style={styles.containerBottom}>
          <Pressable style={styles.brButton}>
            
         <Pressable 
         onPress={() => Alert.alert("That`s all the jokes for today! Come back another day!")}
         style={styles.brButtonLeft}> 
          <Text style={styles.buttonLeft}>This is funny!</Text>
         </Pressable>
         
       
    
         <Pressable 
         onPress={() => Alert.alert("That`s all the jokes for today! Come back another day!")}
         style={styles.brButtonRight}> 
          <Text style={styles.buttonRight}>This is not funny!</Text>
         </Pressable>
         </Pressable>

          
        </View>
    </View>
    <View style={styles.imageBackGround}>
    <Image
            style={styles.image2}
            source={require("./assets/Joke3.png")}
          ></Image>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex:1,
    marginTop: 30,
    width: "100%",
    height: 70,
    resizeMode: "stretch",
    
  },
  image2:{
    flex:1,
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "stretch",

  },
  imageBackGround: {
    flex: 1,
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width : "100%",
    height: 200,
    backgroundColor: "#29B363",
    resizeMode : "stretch",
  },
  textTop:{
    color: "#D9F0E2",
    fontSize : 20,
    marginLeft : 20,
    fontWeight : "bold"
  },
  textBelow:{
    color: "#D9F0E2",
    paddingTop: 20,
    fontSize : 13,
    fontWeight : "bold",

  },
  brButton: {
    flex: 1,
    marginTop: 20,
    marginLeft : "auto",
    marginRight : "auto",
    flexDirection: "row",
    alignContent: "center",
  },
  brButtonLeft:{
    backgroundColor : "#2C7EDB",
    padding: 10,
    marginHorizontal : 20,
  },
 
  buttonLeft : {
    color: "#F7F9FD",
    fontSize : 18,
  
    

  },
  brButtonRight:{
    backgroundColor : "#29B363",
    padding: 10,
    marginHorizontal : 20,

  },
  buttonRight:{
    backgroundColor : "#29B363",
    color: "#F7F9FD",
    fontSize : 16,
    

  },
  brScript :{
    flex: 1,
    paddingTop: 40,
    paddingBottom: 100,

  },
  Script :{
    padding: 10,
    fontSize: 18,
    

  }
});
