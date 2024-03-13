import React, { useState } from "react";
import { View, TouchableOpacity,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {   
    
    const [count,setCount] = useState(0);

    console.log("STATE: ", count);

    const onPressButton = () => {
        setCount(count + 1)

    }
    return (
        <View style = {{flexDirection: "row", marginVertical: 10}}>
          
            <View style = {{flex: 1, padding:20, justifyContent: "space-between", alignItems: "center"}}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={30} color="#693B69" />
                </TouchableOpacity>
            </View>
            
            <View style = {{flex: 1, padding:20, justifyContent: "space-between",alignItems: "center"}}>
                    <Text style = {{fontSize:20}}>{count}</Text>
            </View>
        </View>
    );
}