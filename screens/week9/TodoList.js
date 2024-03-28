import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TodoItem from '../../components/week9/TodoItem';
import TodoStorage from '../../storages/TodoStorage';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const onLoad = async () => {
        try {
            // READ ITEMS FROM STORAGE
            let data = await TodoStorage.readItems();
            setTodos(data); // Ensure `data` is iterable

            console.log("data:", data);
        } catch (error) {
            console.error("Error loading todo items:", error);
        }
    };

    useEffect(()=>{ onLoad(); },[]);

    const onCreate = async () => {
        try {
            let new_data = {
                id : '_' + Math.random().toString(36).substr(2, 9),
                title : "",
                completed : false,
            };
            let t = [...todos, new_data];
            setTodos(t);
            
            // WRITE ITEM TO STORAGE
            await TodoStorage.writeItems(t);
        } catch (error) {
            console.error("Error creating todo item:", error);
        }
    };     

    // Other functions like onUpdate, onCheck, onDelete follow a similar pattern

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ marginTop: 15 }}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TodoItem item={item} onUpdate={onUpdate} onCheck={onCheck} onDelete={onDelete} />
                )}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "lightblue",
                    padding: 10,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 25,
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                }}
                onPress={onCreate}
            >
                <FontAwesome name='plus' size={26} />
            </TouchableOpacity>
        </View>
    );
}