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
    backgroundColor: 'black',
    margin: '5px',
    width: '95%',
    height: '100px',
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
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Right: {
    // border: '1px solid black',
    width: '60%',
    alignItems: 'center'
  }

})
