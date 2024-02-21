import React from 'react';
import { Button, Image, Text, View } from 'react-native';
export default function Section8() {
    return (
        <View style={{ flexDirection : "row", justifyContent: "space-between" ,marginTop : 5}}>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "column", paddingLeft : 10 }}>
                <Text style={{ fontSize : 10}}> Price</Text>
                <Text style={{ fontSize : 20, color : "orange" }}>$399.99</Text>
                <Text style={{ fontSize : 10 }}>AGV/Night</Text>
                </View>
                
                <View style={{justifyContent : "center"}}>
                    <Button title="Book Now" color="red" />
                </View>
            
        </View>    
    );
}
