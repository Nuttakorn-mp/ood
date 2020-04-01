// import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <>
    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: "flex-start", alignItems: 'stretch', }}>
        <View style={{ height: 120, backgroundColor: '#d7d5d2' }} />
        <View style={{width: 50, height: 50, backgroundColor: 'white', position: 'absolute', alignSelf: 'flex-start', top:50, left:20}} >
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
              style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>
        <Text style={{
          colors: 'black',
          fontWeight: 'bold',
          fontSize: 40,
          backgroundColor: '#d7d5d2',
          position: 'absolute', top: 50, left: 80}}>Health Me</Text>
        <View style={{ height: 450, backgroundColor: '#0f4c81' }} />
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          backgroundColor: '#0f4c81',
          alignSelf: 'center',
          position: 'absolute', top: 160, left: 30}}>Diary Recommendations </Text>
        <Image
          source={require('./assets/111.png')}
          style={{ width: 200, height: 200, alignSelf: 'center', position: 'absolute', top: 210 }} />


        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          alignSelf: 'center',
          backgroundColor: '#0f4c81',
          position: 'absolute', top: 430}}>... Kcal</Text>

        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          backgroundColor: '#0f4c81',
          position: 'absolute', alignSelf: 'center', top: 500}}>Breakfast</Text>

        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          backgroundColor: '#0f4c81',
          position: 'absolute', alignSelf: 'center', top: 530}}>... - ... Kcal</Text>

        <View style={{ width: 50, height: 50, backgroundColor: 'white', position: 'absolute', alignSelf: 'flex-end', top: 500, right: 20 }} >
          
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image
              source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
              // style={{ width: 50, height: 50, backgroundColor:'white', position:'absolute',alignSelf:'flex-end',top:500,right:20}} />
              style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 50, backgroundColor: '#d7d5d2' }} />
        <View style={{ height: 200, backgroundColor: '#0f4c81' }} />
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          backgroundColor: '#0f4c81',
          position: 'absolute', alignSelf: 'center', top: 650, left: 30}}>Weight</Text>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          backgroundColor: '#0f4c81',
          position: 'absolute', alignSelf: 'center', top: 720}}>... Kg</Text>

        <View style={{ height: 50, backgroundColor: '#d7d5d2' }} />
        <View style={{ height: 200, backgroundColor: '#0f4c81' }} />

      </View>

      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
          />
      </View> */}
    </ScrollView>
    </>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();


export default class App extends Component {

  render() {
    return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    );
  }
}
// const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
});

// export default class App extends Component{
//   render(){
//     return(
//     <>
//     <ScrollView>
//       <View style={{ flex: 1, flexDirection: 'column', justifyContent: "flex-start", alignItems: 'stretch', }}>
//       <View style={{ height: 120, backgroundColor: '#d7d5d2' }} />
//       <Text style={{colors:'black',
//       fontWeight: 'bold',
//       fontSize: 40,
//       backgroundColor: '#d7d5d2',
//       position:'absolute',top: 50,left:10}}>
//       <Image
//         source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
//         style={{ width: 50, height: 50 }} />
//       <View style={{ width: 10, height: 50}} />
//       Health Me
//       </Text>
//       <View style={{ height: 450, backgroundColor: '#0f4c81' }} />
//         <Text style={{color: 'white',
//         fontWeight: 'bold',
//         fontSize:20,
//         backgroundColor: '#0f4c81',
//         alignSelf:'center',
//         position:'absolute',top:160, left:30}}>Diary Recommendations </Text>
//         <Image 
//         source={require('./assets/111.png')} 
//         style={{width: 200, height: 200,alignSelf:'center',position:'absolute',top:210}} />
      
      
//       <Text style={{ color: 'white',
//       fontWeight: 'bold',
//       fontSize:20,
//       alignSelf:'center',
//       backgroundColor: '#0f4c81',
//       position:'absolute',top:430}}>... Kcal</Text>

//       <Text style={{color: 'white',
//       fontWeight: 'bold',
//       fontSize:20,
//       backgroundColor: '#0f4c81',
//       position:'absolute',alignSelf:'center',top:500}}>Breakfast</Text>

//       <Text style={{color: 'white',
//       fontWeight: 'bold',
//       fontSize:20,
//       backgroundColor: '#0f4c81',
//       position:'absolute',alignSelf:'center',top:530}}>... - ... Kcal</Text>

//       <View style={{width: 50, height: 50, backgroundColor:'white', position:'absolute',alignSelf:'flex-end',top:500,right:20}} >
//       <TouchableOpacity onPress={Touchables._onPressButton}>
//       <Image
//         source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
//         // style={{ width: 50, height: 50, backgroundColor:'white', position:'absolute',alignSelf:'flex-end',top:500,right:20}} />
//         style={{ width: 50, height: 50}} />
//       </TouchableOpacity>
//       </View>


//       <View style={{ height: 50, backgroundColor: '#d7d5d2'}} />
//       <View style={{ height: 200, backgroundColor: '#0f4c81'}} />
//       <Text style={{color: 'white',
//       fontWeight: 'bold',
//       fontSize:20,
//       backgroundColor: '#0f4c81',
//       position:'absolute',alignSelf:'center',top:650, left:30}}>Weight</Text>
//       <Text style={{color: 'white',
//       fontWeight: 'bold',
//       fontSize:20,
//       backgroundColor: '#0f4c81',
//       position:'absolute',alignSelf:'center',top:720}}>... Kg</Text>

//       <View style={{ height: 50, backgroundColor: '#d7d5d2'}} />
//       <View style={{ height: 200, backgroundColor: '#0f4c81'}} />
        
//       </View>

//     </ScrollView>
//     </>
//     );
//   }
// } 
// const colors = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-start',//sort container on X axis
//     alignItems: 'stretch',//sort container on Y axis
//     //alignSelf: 'flex-start',//sort item on that line 
//   },
//   black: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 40,
//     backgroundColor: '#d7d5d2',
//   },
//   white:{
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize:20,
//     backgroundColor: '#0f4c81',
//   },
// });
