import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';

const NewSetInput = () => {
    const [reps, setReps] = useState('');
    const [weight, setWeigt] = useState('');

    const addSet = () => {
        console.warn('Add set: ', reps, weight);
        
    // save data in the database then reset

    setReps('');
    setWeigt('');
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={reps} 
                onChangeText={setReps}
                placeholder='Reps'
                keyboardType='numeric'
            />

            <TextInput
                style={styles.input}
                value={weight} 
                onChangeText={setWeigt}
                placeholder='weight'
                keyboardType='numeric'
            />
            <Button title='Add' onPress={addSet}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        gap: 10,
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'gainsboro',
        padding: 10,
        flex: 1,
        borderRadius: 5,
    }
});

export default NewSetInput;