import React from "react";
import { View, TextInput } from "react-native";
import MyIcon from "./MyIcon";
import { Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
    return (
        <View style={{ flex: 1, marginTop : -25  , margin : 10, padding : 10, borderRadius : 10 , backgroundColor : "#F5F5F5", shadowColor : "black", shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8, shadowRadius: 2, elevation : 5}}>
            {/* View ก้อนที่ 1 */}
            <View style = {{padding : 10}}>
                <Text style={{fontSize: 20, textAlign : "center"}}>Hilton San Francisco</Text>
            </View>

            {/* View ก้อนที่ 2 */}
            <View style={{ alignItems : "center", marginTop : 1}}>
                <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                {/* View ก้อนที่ 3 */}
                <View style={{marginTop : 5, margin : 6}}>
                    <Text style={{ fontSize: 12 ,color: '#444444', textAlign : "center" }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                </View>
            </View>         
        </View>
    );
}
