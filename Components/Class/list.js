import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ClassList({user, token, Class, navigation }) {
    var date = new Date(Class.created_at);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ClassScreen', {
                Class: Class,
                token: token,
                user, user
            })}
        >
            <View style={styles.item}>
                <View style={styles.Left}>
                    <Text style={styles.title}>{Class.code}</Text>

                </View>
                <View style={styles.Right}>
                    <Text style={styles.title}>Total Students: {Class.total_students}</Text>
                    <Text style={styles.title}>{date.toDateString()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#D52366',
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