import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TextInput, View } from "react-native/";

export default function App() {
    const [text, setText] = UseState('')

    return(
        <View style = {styles.container}>
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder ='Agrega una tarea'
                    onChangeText = {null}
                    styles = {styles.TextInput}
                />
                <Button
                title = 'Agregar'
                color = '#86f386'
                onPress = {null}
                />
            </View>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    }


}

)