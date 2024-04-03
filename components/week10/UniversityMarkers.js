import React from "react";
import MapView, { Marker } from "react-native-maps";
import {MaterialCommunityIcons } from "@expo/vector-icons";


export default function UniversityMarkers(props) {

  return props.items.map((item) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.user_id}
      key={item.id.toString()}
      description={item.user_id}
    >
        <MaterialCommunityIcons name="human-child" size={24} color="tomato" />
    </Marker>
  ));
}
