import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";

export default function Event(props) {


    const event = [
        { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg", "month": "DEC", "date": "30", "datetime": "Thu, DEC 30, 09.00 am", "place": "London" },
        { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg", "month": "DEC", "date": "31", "datetime": "Thu, DEC 30, 09.00 am", "place": "Paris" },
        { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg", "month": "JAN", "date": "01", "datetime": "Thu, JAN 01, 09.00 am", "place": "Canada" },
        { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg", "month": "JAN", "date": "11", "datetime": "Thu, JAN 11, 09.00 am", "place": "USA" },
        { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "month": "JAN", "date": "21", "datetime": "Thu, JAN 21, 09.00 am", "place": "Thailand" }
    ]

    // const [onlineTours, setOnlineTours] = useState([]);
    // const loadOnlineTours = async () => {
    //     try {
    //         let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
    //         let data = await promise.json();
    //         console.log("Load Data : ", data);
    //         //SET STATE
    //         setOnlineTours(data);
    //     } catch (error) {
    //         console.log("ERROR : ", error);
    //     }
    // }

    // useEffect(() => {
    //     loadOnlineTours();
    // }, []);



    return (
        <View style={props.style}>
            <Text style={{ fontSize: 25 }}>Upcoming Event</Text>
            <Text style={{ fontSize: 15, color: 'gray', marginVertical: 10 }}>What's the Worst That Could Happend</Text>
            <FlatList horizontal={true}
                // data={tours}
                data={event}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 300, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ flexDirection: 'row', height: 60, width: 300, paddingHorizontal: 10, borderWidth: 1, borderColor: 'gray', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                <View style={{ flexDirection: 'column'}}>
                                        <Text style={{ fontSize: 18, color: 'red' }}>{item.month}</Text>
                                        <Text style={{ fontSize: 12, color: 'gray', textAlign:'center' }}>{item.date}</Text>
                                    </View >

                                    <View style={{ flexDirection: 'column'}}>
                                        <Text style={{ fontSize: 18, color: 'black', marginLeft: 20 }}>{item.title}</Text>
                                        <Text style={{ fontSize: 12, color: 'gray', marginLeft: 20 }}>{item.datetime}</Text>
                                        <Text style={{ fontSize: 12, color: 'gray', marginLeft: 20 }}>{item.place}</Text>

                                    </View>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            >
            </FlatList>

        </View>
    );
} 
