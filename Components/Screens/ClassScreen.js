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
    width: 300,
    height: 110,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'black',
    borderRadius: 12,
    alignItems: 'center',
    padding: 10,
  },
  info: {
    padding: 10,
    color: '#FFFFFF',
    fontFamily: 'Cursive',
    fontSize: 20
  },
  content: {
    flex: 1,
    margin: 5,
    backgroundColor: 'black',
    width: 300,
    height: 100,
    borderRadius: 12,
    alignItems: 'center'
  },
  contentHeader: {
    height: 70,
    width: 280,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    margin: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  ContentHeaderText: {
    fontFamily: 'Cursive',
    fontSize: 15
  },
  OldAttendance: {
    backgroundColor: 'grey',
    width: 300,
    height: 100,
    flex: 1,
    margin: 10,
    marginBottom: 4,
    borderRadius: 10,
    // justifyContent: 'space-around',
  }
});
