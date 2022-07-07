import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import AttendanceList from '../Attendance/list'

export default function ClassScreen({ navigation, route }) {
  const Class = route.params
  const attends = [
    {
      id: 1,
      TotalAttendees: 24,
      Remarks: "Good",
      LastUpdated: '6-July-2022'
    },
    {
      id: 2,
      TotalAttendees: 44,
      Remarks: "Excellent",
      LastUpdated: '6-July-2022'
    },
    {
      id: 3,
      TotalAttendees: 34,
      Remarks: "Not Good",
      LastUpdated: '6-July-2022'
    },
    {
      id: 4,
      TotalAttendees: 26,
      Remarks: "Good",
      LastUpdated: '6-July-2022'
    },
    {
      id: 5,
      TotalAttendees: 44,
      Remarks: "Excellent",
      LastUpdated: '6-July-2022'
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.info}>{Class.className}</Text>
        <Text style={styles.info}>Total Students: {Class.TotalStudents}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.ContentHeaderText}>Total: {attends.length}</Text>
          <Button
            title="Mark Attendance"
            color="grey"
            touchSoundDisabled={true}
          />
        </View>
        <View style={styles.OldAttendance}>
          <FlatList
            data={attends}
            renderItem={
              ({ item }) => (
                <AttendanceList ClassHeld={item} Class={Class} navigation={navigation} />
              )
            }
            keyExtractor={(item) => item.id}
          // extraData={selectedId}
          />

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
