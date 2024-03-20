import React from 'react';
import { View, Image} from 'react-native';

export default function Bird() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri : "https://th.bing.com/th/id/OIP.Bm5e4Nb0O8XZXf6KwCjr-gHaE8?rs=1&pid=ImgDetMain"  }} 
                style={{width: '100%', height: 500}}
                /> 
                           
        </View>
    );
}
