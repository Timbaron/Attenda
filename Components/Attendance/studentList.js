import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function StudentList({ student }) {
  return (
    <View style={styles.item}>
      <View style={styles.Left}>
        <Text style={styles.title}>Name: {student.fullname}</Text>
        <Text style={styles.title}>Matric Number: {student.matricNumber}</Text>
        <Text style={styles.title}>Date: {student.registeredAt.toDateString()}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#D52366',
    margin: 2,
    width: 300,
    height: 100,
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
    width: 300,
    // height:200,
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
