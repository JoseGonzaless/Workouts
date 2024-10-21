import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json';
import { Stack } from 'expo-router';
import { useState } from 'react';

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams();
    const exercise = exercises.find((item) => item.name == params.name);
    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

    if (!exercise) {
        return (
            <Text>Exercise Not Found</Text>
        )
    }

    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <Stack.Screen options = {{ title: exercise.name }} />

            <View style = {styles.panel}>
                <Text style = {styles.exerciseName}> {exercise.name} </Text>
                <Text style = {styles.exerciseSubtitle}> {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()} </Text>
            </View>

            <View style = {styles.panel}>
                <Text style = {styles.instructions} numberOfLines = {isInstructionExpanded ? 0 : 3}> {exercise.instructions} </Text>
            </View>

            <Text 
                onPress = {() => setIsInstructionExpanded(!isInstructionExpanded)} 
                style = {styles.viewMore}> {isInstructionExpanded ? 'View less' : 'View more'} 
            </Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
    },
    panel: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    exerciseName: {
        fontSize: 20, 
        fontweight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray'
    },
    instructions: {
        fontSize: 16,
        lineheight: 22,
    },
    viewMore: {
        alignSelf: 'center',
        padding: 10,
        fontweight: '600',
        color: 'gray'
    }

});