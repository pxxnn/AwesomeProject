import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{ padding: 10 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
                </View>

                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color : "orange" }}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
            </View>
        </View>


            );
}