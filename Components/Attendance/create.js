import { View, Text, Modal, StyleSheet, DevSettings, SafeAreaView, TextInput, TouchableOpacity, Alert, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

export default function CreateAttendance({ user, courseid, makeRequest, setMakeRequest, token, AttendancemodalVisible, setAttendanceModalVisible }) {
    const [title, onChangeTitle] = useState('');
    const [code, onChangeCode] = useState('');
    const [totalStudents, onChangeTotalStudents] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    function closeModalHandler() {
        setAttendanceModalVisible(false)
    }
    function requestHandler(result) {
        if (result.status == 'error') {
            ToastAndroid.showWithGravity(
                result.message[0],
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );
        }
        if (result.status == 'success') {
            ToastAndroid.showWithGravity(
                result.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
            setMakeRequest(!makeRequest)
            setAttendanceModalVisible(false)

        }
    }
    // console.log(baseUrl + `attendance/create/?course_id=${courseid}`)
    const createAttendanceHandler = async () => {
        setIsLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + `${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch(baseUrl + `attendance/create/${courseid}`, requestOptions)
            .then(response => response.json())
            .then(result => requestHandler(result))
            .catch(error => console.error('error', error));
        setIsLoading(false)
    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={AttendancemodalVisible}
                onRequestClose={() => {
                    setAttendanceModalVisible(!AttendancemodalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Create Attendance</Text>
                        <View style={styles.form}>
                            <SafeAreaView>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeTitle}
                                    value={courseid}
                                    placeholder="Enter Course Title"
                                    editable={false}
                                />                                
                            </SafeAreaView>
                        </View>
                        {(isLoading) && (
                            <>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text>Creating Attendance, Hold on....</Text>
                            </>
                        )}
                        {/* <Button title="Close" onPress={closeModealHandler} /> */}
                        <View style={styles.btnGroup}>
                            <TouchableOpacity onPress={closeModalHandler} style={styles.btn}>
                                <Text style={styles.btnText}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => createAttendanceHandler()}
                                style={styles.btn}>
                                <Text style={styles.btnText}>Create</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "transparent"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        width: 300,
        height: 500,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    modalText: {
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#EA256F',
        marginBottom: 60
    },
    form: {
        width: 280,
        backgroundColor: 'transparent',
        height: 100,
        marginBottom: 5,
        borderRadius: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
    },
    btn: {
        height: 50,
        width: 100,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EA256F',
        borderRadius: 10,
    },
    btnGroup: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 250,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    }
});