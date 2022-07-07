import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ClassList({ item, navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ClassScreen', item)}
        >
            <View style={styles.item}>
                <View style={styles.Left}>
                    <Text style={styles.title}>{item.className}</Text>

                </View>
                <View style={styles.Right}>
                    <Text style={styles.title}>Total Students: {item.TotalStudents}</Text>
                    <Text style={styles.title}>{item.LastUpdated}</Text>
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
        fontFamily: 'Roboto',
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