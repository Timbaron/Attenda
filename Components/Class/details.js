import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ClassDetails({ navigation, route }) {
  const Class = route.params
  const attends = [
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.info}>{Class.className}</Text>
        <Text style={styles.info}>Total Students: {Class.TotalStudents}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  header: {
    width: '90%',
    height: '110px',
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px',
    backgroundColor: 'black',
    borderRadius: '12px',
    alignItems: 'center',
    padding: '10px',
  },
  info: {
    padding: '10px',
    color: '#FFFFFF',
    fontFamily: 'Cursive',
    fontSize: '20px'
  },
});
