import React from 'react';
import { View, Image} from 'react-native';

export default function Cat() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri : "https://www.breatheazy.co.uk/wp-content/uploads/2023/09/Untitled-design-35-1080x675.png"  }} 
                style={{width: '100%', height: 500}}
                /> 
                           
        </View>
    );
}
