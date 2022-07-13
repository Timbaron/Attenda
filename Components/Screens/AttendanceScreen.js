import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { faker } from '@faker-js/faker';
import StudentList from '../Attendance/studentList';

export default function AttendanceScreen({ navigation, route }) {
  const { ClassHeld, Class, attendanceId, token, makeRequest, setMakeRequest} = route.params
  const attendees = JSON.parse(ClassHeld.attendees)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.info}>{Class.code}</Text>
        <Text style={styles.info}>Total Students: {Class.total_students}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.ContentHeaderText}>Total: {attendees.length}</Text>
          <Button
            title="Take Attendance"
            color="#EA256F"
            touchSoundDisabled={true}
            onPress={() => navigation.navigate('TakeAttendance', {
              attendanceId: attendanceId,
              token: token,
              makeRequest, 
              setMakeRequest
            })}
            // {console.log(attendanceId, token)}
          />
        </View>
        <View style={styles.OldAttendance}>
          <FlatList
            data={attendees}
            renderItem={
              ({ item }) => (
                <StudentList student={item} />
              )
            }
            keyExtractor={(item) => faker.datatype.uuid()}
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
    backgroundColor: '#EA256F'
  },
  header: {
    width: 300,
    height: 110,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#E8F0F7',
    borderRadius: 12,
    alignItems: 'center',
    padding: 10,
  },
  info: {
    padding: 10,
    color: '#EA256F',
    fontFamily: 'Roboto',
    fontSize: 20
  },
  content: {
    flex: 1,
    margin: 5,
    backgroundColor: '#EA256F',
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
    backgroundColor: '#FFFFFF',
    margin: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  ContentHeaderText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#EA256F'
  },
  OldAttendance: {
    backgroundColor: 'white',
    width: 300,
    height: 100,
    flex: 1,
    margin: 10,
    marginBottom: 4,
    borderRadius: 10,
    // justifyContent: 'space-around',
  }
});
