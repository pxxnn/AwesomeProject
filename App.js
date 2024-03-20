import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex09';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import Ex13 from './screens/week2/Extra';
import Extra from './screens/week2/Extra';
import Extra2 from './screens/week2/Extra2';
import Extra3 from './screens/week2/Extra2';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import { PaperProvider } from 'react-native-paper';
import TestPaper from './screens/week4/TestPaper';
import Resort from './screens/week3/Resort';
import PaperQuiz from './screens/week4/PaperQuiz';
import Health from './screens/week5/Health';
import ChartKitScreen from './screens/week5/ChartKitScreen';
import Home from './screens/week6/Home';
import FlatListExample from './screens/week6/FlatListExample';
import Event from './components/week6/Event';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';

export default function App() {
  return (

    <NavigationContainer>
      {/* <HomeStack /> */}
      {/* <BottomTab /> */}
      <RootStack />
    </NavigationContainer>

  );
}
