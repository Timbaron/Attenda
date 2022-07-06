import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Item({ item }) {
    return (
        <TouchableOpacity on>
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
        margin: '5px',
        width: '95%',
        height: '50px',
        borderRadius: '10px',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    title: {
        fontSize: 15,
        fontFamily: 'Cursive',
        color: '#FFFFFF',
    },
    Left: {
        // border: '1px solid black',
        width: '70px',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Right: {
        // border: '1px solid black',
        width: '60%',
        alignItems: 'center'
    }

})