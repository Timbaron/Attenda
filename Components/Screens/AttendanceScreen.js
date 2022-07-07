import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

export default function AttendanceScreen({ navigation, route }) {
  const {ClassHeld, Class} = route.params
  const attends = [
    {
      Date: '12-04-2021',
      Total: 45,
      Remarks: "Good"
    },
    {
      Date: '12-04-2021',
      Total: 20,
      Remarks: "Bad"
    },
    {
      Date: '12-04-2021',
      Total: 46,
      Remarks: "Good"
    },
    {
      Date: '12-04-2021',
      Total: 34,
      Remarks: "Fair"
    },
    {
      Date: '12-04-2021',
      Total: 10,
      Remarks: "Too Bad"
    },
    {
      Date: '12-04-2021',
      Total: 45,
      Remarks: "Good"
    },
    {
      Date: '12-04-2021',
      Total: 50,
      Remarks: "Excelent"
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
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.ContentHeaderText}>Total: {ClassHeld.TotalAttendees}</Text>
          <Button
            title="Mark Attendance"
            color="grey"
            touchSoundDisabled={true}
          />
        </View>
        <View style={styles.OldAttendance}>
          
        </View>
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
  content: {
    flex: 1,
    margin: '5px',
    backgroundColor: 'black',
    width: '90%',
    height: '100%',
    borderRadius: '12px',
    alignItems: 'center'
  },
  contentHeader: {
    height: '70px',
    width: '90%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    margin: '5px',
    marginTop: '10px',
    borderRadius: '10px',
  },
  ContentHeaderText: {
    fontFamily: 'Cursive',
    fontSize: '15px'
  },
  OldAttendance: {
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
    flex: 1,
    margin: '10px',
    marginBottom: '4px',
    borderRadius: '10px',
    // justifyContent: 'space-around',
  }
});
