

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { setupPlayer,addTrack } from '../musicPlayerService';
import Musiclayer from './screens/Musiclayer';

function App(): React.JSX.Element {
  const [isPlayerReady,setIsPlayerReady]= useState(false)
  async function setup(){
    let isSetupp = await setupPlayer();
    if(isSetupp){
      await addTrack();
    }
    setIsPlayerReady(isSetupp)
  }

  useEffect(()=>{
    setup()
  },[])

  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"}/>
      <Musiclayer/>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default App;
