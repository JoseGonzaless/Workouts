import {StyleSheet, Text, View } from 'react-native';

export default function ExerciseListItem( {item} ) {
    return(
      <View style = {styles.exerciseContainer}>
        <Text style = {styles.exerciseName}> {item.name} </Text>
        <Text style = {styles.exerciseSubtitle}> {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()} </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    exerciseContainer: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      gap: 5,
      marginHorizontal: 2,

      //shadow
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    exerciseName: {
      fontSize: 20, 
      fontweight: '500',
    },
    exerciseSubtitle: {
      color: 'dimgray'
    }
});