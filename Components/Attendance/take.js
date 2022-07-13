import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, SafeAreaView, TouchableOpacity, Alert, ActivityIndicator, ToastAndroid } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Take({ navigation, route }) {
  const { attendanceId, token, makeRequest, setMakeRequest} = route.params
  const [student, onChangeStudent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const resultHandler = async (result) => {
    setIsLoading(false)
    if (result.status == 'error') {
      ToastAndroid.showWithGravity(
        result.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
    if (result.status == 'success') {
      ToastAndroid.showWithGravity(
        result.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setMakeRequest(!makeRequest)
      navigation.pop(2)
    }
  }

  const AttendanceHandler = async () => {
    setIsLoading(true)
    if (student.length == '') {
      Alert.alert('Form Error', 'Please enter a valid student matric number')
      setIsLoading(false)
    }
    else if (student.length < 8) {
      Alert.alert('Form Error', 'Matric Number must be at least 8 characters')
      setIsLoading(false)
    }
    else {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + `${token}`);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };

      await fetch(baseUrl + "attendance/mark?attendance_id=" + `${attendanceId}` + "&student_id=" + `${student}`, requestOptions)
        .then(response => response.json())
        .then(result => resultHandler(result))
        .catch(error => console.log('error', error));
        setIsLoading(false)
    }
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + `${API_token}`);



  }
  // const [hasPermission, setHasPermission] = useState(null);
  // const [scanned, setScanned] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  return (
    <View style={styles.container}>
      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : () => handleBarCodeScanned()}
        style={StyleSheet.absoluteFillObject}
      />
      {console.log(scanned)}
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
      <View style={styles.content}>
        <Text style={styles.title}>Enter Student ID</Text>
        <SafeAreaView>
          <Text style={{ color: 'black', fontWeight: 'bold', margin: 15, fontSize: 15, marginBottom: 5 }}>Student Matric Number:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeStudent}
            value={student}
            underlineColorAndroid='transparent'
            placeholder="Stuednt Matric Number"
          />
          {(isLoading) && (
            <>
              <ActivityIndicator size="large" color="#00ff00" />
              <Text>Marking Attendance......</Text>
            </>
          )}
          <TouchableOpacity onPress={() => AttendanceHandler()}
            style={styles.btn}>
            <Text style={styles.btnText}>Mark Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Alert.alert('Feature Alert!!', 'This feature is coming soon')
          }}
            style={styles.btn}>
            <Text style={styles.btnText}>Scan Barcode</Text>
          </TouchableOpacity>

        </SafeAreaView>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 370,
    height: 400,
    flexDirection: 'column',
    backgroundColor: 'white',
    // borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: 'white',
    height: 400,
    width: 400,
    alignItems: 'center',
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    height: 50,
    width: 300,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA256F',
    borderRadius: 10,
    marginLeft: 12,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  }
})