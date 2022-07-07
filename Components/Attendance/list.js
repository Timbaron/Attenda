import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function AttendanceList({ ClassHeld, Class,  navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Attendance', {
                ClassHeld: ClassHeld,
                Class: Class
            })}
        >
            <View style={styles.item}>
                <View style={styles.Left}>
                    <Text style={styles.title}>TA: {ClassHeld.TotalAttendees}</Text>

                </View>
                <View style={styles.Right}>
                    <Text style={styles.title}>Date: {ClassHeld.LastUpdated}</Text>
                    <Text style={styles.title}>Remarks: {ClassHeld.Remarks}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'black',
        margin: 2,
        width: 300,
        height: 70,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    title: {
        fontSize: 15,
        fontFamily: 'Cursive',
        color: '#FFFFFF',
    },
    Left: {
        // border: '1px solid black',
        width: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Right: {
        // border: '1px solid black',
        width: 150,
        justifyContent: 'space-around',
        alignItems: 'center'
    }

})