import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function AttendanceList({ ClassHeld, Class, navigation }) {
    var date = new Date(ClassHeld.created_at);
    const attendees = JSON.parse(ClassHeld.attendees)
    // const attendees = JSON.parse(ClassHeld.attendees)
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Attendance', {
                ClassHeld: ClassHeld,
                Class: Class,
            })}
        >
            <View style={styles.item}>
                <View style={styles.Left}>
                    <Text style={styles.title}>TA: {attendees.length}</Text>

                </View>
                <View style={styles.Right}>
                    <Text style={styles.title}>Date: {date.toDateString()}</Text>
                    <Text style={styles.title}>ID: {ClassHeld.attendance_id}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EA256F',
        margin: 2,
        width: 300,
        height: 70,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    title: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color: '#FFFFFF',
    },
    Left: {
        // border: '1px solid white',
        width: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Right: {
        // border: '1px solid white',
        width: 150,
        justifyContent: 'space-around',
        alignItems: 'center'
    }

})