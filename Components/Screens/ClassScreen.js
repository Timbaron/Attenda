import React, {useState, useEffect} from 'react'
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import CreateAttendance from '../Attendance/create'
import AttendanceList from '../Attendance/list'

export default function ClassScreen({ navigation, route }) {
  const [totalAttendance, setTotalAttendance] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [attendance, setAttendance] = useState([])
  const [makeRequest, setMakeRequest] = useState(false)
  const [AttendancemodalVisible, setAttendanceModalVisible] = useState(false)
  // const [classes, setClassess] = useState()
  const { Class,token, user} = route.params
  function requestHandler(result) {
    setTotalAttendance(result.attendance.length)
    setAttendance(result.attendance)
  }
  const getCourseDetails = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + `${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(baseUrl + "course/" + `${Class.id}`, requestOptions)
      .then(response => response.json())
      .then(result => requestHandler(result))
      .catch(error => console.error('error', error));
    setIsLoading(false)


  };
  useEffect(() => {
    setIsLoading(true)
    getCourseDetails();
  },[])
  useEffect(() => {
    setIsLoading(true)
    getCourseDetails();
  }, [makeRequest])

  return (
    <View style={styles.container}>
      <CreateAttendance user={user} courseid={Class.course_id} makeRequest={makeRequest} setMakeRequest={setMakeRequest} token={token} AttendancemodalVisible={AttendancemodalVisible} setAttendanceModalVisible={setAttendanceModalVisible} />
      <View style={styles.header}>
        <Text style={styles.info}>{Class.code}</Text>
        <Text style={styles.info}>Total Students: {Class.total_students}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.ContentHeaderText}>Total: {totalAttendance}</Text>
          <Button
            title="Create Attendance"
            color="#EA256F"
            touchSoundDisabled={true}
            onPress={() => setAttendanceModalVisible(true)}
          />
        </View>
        <View style={styles.OldAttendance}>
          {
          (isLoading == true) ?
          <>
                <View>
                  <ActivityIndicator size="large" color="#EA256F" />
                  <Text style={{ fontSize: 17, color: "red", fontFamily: 'Roboto' }}>Loading classes</Text>
                </View>
          </>
          :

          <FlatList
                data={attendance}
            renderItem={
              ({ item }) => (
                <AttendanceList ClassHeld={item} token={token} Class={Class} navigation={navigation} />
              )
            }
            keyExtractor={(item) => item.id}
          // extraData={selectedId}
          />
           }

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
