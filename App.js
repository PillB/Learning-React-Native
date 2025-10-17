import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native/";
import { useState } from "react";

export default function App() {
    const [text, setText] = useState('')
    const [tasksList, setTasksList] = useState([])

    const handleAddTask = () => {
        setTasksList( prevState => [...prevState, {id:Math.random(), value:text}])
        setText("")
    }
    return(
        <View style = {styles.container}>
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder ='Agrega una tarea'
                    onChangeText = {(text)=> setText(text)}
                    styles = {styles.TextInput}
                    value = {text}
                />
                <Button
                title = 'Agregar'
                color = '#86f386'
                onPress = {handleAddTask}
                />
            </View>
            <FlatList 
            data={tasksList} 
            initialNumToRender={10}
            maxToRenderPerBatch={5}
            windowSize={3} 
            onEndReached={() => console.log('Cargar más datos')} 
            onEndReachedThreshold={0.5} 
            renderItem={({ task }) => <Text style={styles.item}>{task.value}</Text>} 
            keyExtractor={(task) => task.id.toString()} 
            />
            <StatusBar style='auto'/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    inputContainer: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    listContainer: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 16,
  }


}

)