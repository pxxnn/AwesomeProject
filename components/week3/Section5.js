import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    <View style={{ margin : 5 , padding : 5, borderColor : 'gray', borderRadius : 20 }}>
      
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="wifi" name="wifi" size={30} color="pink" />
        <MyIcon title="coffee" name="coffee" size={30} color="pink" />
        <MyIcon title="bath" name="bath" size={30} color="pink" />
        <MyIcon title="car" name="car" size={30} color="pink" />
      </View>
      
    </View>
  );
}