import { ActivityIndicator, View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../graphqlClient";

const exerciseQuery = gql`
    query exercises($name: String) {
        exercises(name: $name) {
            name
            equipment
            instructions
            muscle
        }
    }
`;

export default function ExerciseDetailsScreen() {
    const {name} = useLocalSearchParams();
    const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ['exercises', name],
        queryFn: () => client.request(exerciseQuery, {name}),
    });

    if (isLoading) {
        return <ActivityIndicator/>
    }

    if (error) {
        return (
            <Text>Exercise Not Found</Text>
        )
    }

    const exercise = data.exercises[0];

    return (
        <ScrollView contentContainerStyle = {styles.container}>
            <Stack.Screen options = {{ title: exercise.name }} />

            <View style = {styles.panel}>
                <Text style = {styles.exerciseName}> {exercise.name} </Text>
                <Text style = {styles.exerciseSubtitle}> 
                    <Text style = {styles.subValue}> {exercise.muscle} | {exercise.equipment} </Text>
                </Text>
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
    },
    subValue: {
        textTransform: 'capitalize',
      },

});