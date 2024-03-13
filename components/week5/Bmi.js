import React, {useState} from "react";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function Bmi() { 
    const [weight, setWeight] = useState('70');
    const [height, setHeigt] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [description, setDescription] = useState('');
    
    console.log("STATE : ", weight, height, bmi)

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight / (height/100 * height/100));
        setBmi(output.toFixed(2));
        console.log(bmi);
        console.log(output);

        let description = "bmi";
        if (bmi < 18.5)
                description = "Underweight - eat a bagel!!";
        else if (bmi >= 18.5 && bmi <= 24.99)
                description = "Normal - keep it up!!";
        else if (bmi >= 25 && bmi <= 29.99)
                description = "Overweight - exercise more!!";
        else if (bmi >= 30 && bmi <= 39.99)
                description = "Obese - get off the couch!!";
        else
                description = "Morbidly Obese - take action!!";
        setDescription(description);
    }

    return (
        <View >
            {/*แถวที่ 1*/}
            {/* padding, backgroundColor, borderRadius, height, space-around, marginTop */}
            <View style = {{backgroundColor : "#E8D0D0", padding:20, borderRadius:20, height:150, justifyContent : "space-around", marginTop:20}}>
                <Text style ={{ fontSize : 20}}>Weight (kg.)</Text>
                <TextInput
                    value = {weight}
                    style ={{ fontSize : 20}} 
                    keyboardType="numeric"
                    onChangeText={ (newWeight) => setWeight(newWeight) } 
                    placeholder ="Input your Weight..." />
            </View>

            {/*แถวที่ 2*/}
            <View style = {{backgroundColor : "#E8D0D0", padding:20, borderRadius:20, height:150, justifyContent : "space-around", marginTop:20}}>
                <Text style ={{fontSize : 20}}>Height (cm.)</Text>
                <TextInput 
                    value = {height}
                    style ={{fontSize : 20}} 
                    keyboardType="numeric" 
                    onChangeText={ (newHeight) => setHeigt(newHeight) }
                    placeholder="Input your Height..." />
            </View>

            {/* แถวที่ 3 marginVerticalคือระยะห่างทั้งบนและล่าง */}
            <View style = {{ flexDirection : "row", marginVertical : 20, }}>
                {/* ซ้าย */}
                {/* flex, backgroundColor, borderRadius, height, justifyContent, alignItem, marginRight */}
                <View style = {{ backgroundColor : "#C6AFC6", flex : 1, borderRadius : 20, height : 150, justifyContent : "center" , alignItems : "center" , marginRight : 5}}>
                    <Text style ={{fontSize : 20}}>
                        BMI : {bmi}
                    </Text>
                </View>

                {/* ขวา */}
                <View style = {{ backgroundColor : "#C6AFC6", flex : 1, borderRadius : 20, height : 150, justifyContent : "center" , alignItems : "center", marginLeft : 5}}>
                    <Text style ={{fontSize : 20}}>
                        {description}
                    </Text>
                </View>
            </View>

            {/* แถวที่4 */}
            <View>
                <TouchableOpacity onPress={onPressButton}>
                    <View style = {{padding:20, backgroundColor:"#9C93B5", borderRadius: 40}}>
                        <Text style={{ fontSize:25, textAlign: "center", color:'white'}}>
                            Calculate
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* <Button title="Calculate" onPress = { onPressButton }/> */}
            </View>
            
        </View>
    );
}
