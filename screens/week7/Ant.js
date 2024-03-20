import React from 'react';
import { View, Image} from 'react-native';

export default function Ant() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri : "https://i.ytimg.com/vi/RVAol6l6K0w/maxresdefault.jpg"  }} 
                style={{width: '100%', height: 500}}
                /> 
                           
        </View>
    );
}

