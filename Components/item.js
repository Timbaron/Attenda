import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Item({item}) {
  return (
      <View style={styles.item}>
          {/* <Text style={styles.title}>{item.className}</Text> */}
      </View>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        margin: '8px',
        width: '95%',
        height: '100px',
        borderRadius: '10px'
    },
    title: {
        fontSize: 32,
        fontFamily: 'Cursive',
    },
})