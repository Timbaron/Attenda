import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function AttendanceList({ item, navigation }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Class', item)}
        >
            <View style={styles.item}>
                <View style={styles.Left}>
                    <Text style={styles.title}>TA: {item.Total}</Text>

                </View>
                <View style={styles.Right}>
                    <Text style={styles.title}>Date: {item.Date}</Text>
                    <Text style={styles.title}>Remarks: {item.Remarks}</Text>
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