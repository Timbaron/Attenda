import { View, Text, Modal, StyleSheet, DevSettings, SafeAreaView, TextInput, TouchableOpacity, Alert, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

export default function CreateClass({ user, makeRequest, setMakeRequest, token, ClassmodalVisible, setClassModalVisible }) {
    const [title, onChangeTitle] = useState('');
    const [code, onChangeCode] = useState('');
    const [totalStudents, onChangeTotalStudents] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    function closeModalHandler() {
        setClassModalVisible(false)
    }
    function requestHandler(result) {
        if (result.status == 'error') {
            console.log(result)
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
            setClassModalVisible(false)

        }
    }
    const createClassHandler = async () => {
        setIsLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + `${token}`);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch(baseUrl + `course/create?title=${title}&code=${code}&total_students=${totalStudents}&lecturer=${user.id}`, requestOptions)
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
                visible={ClassmodalVisible}
                onRequestClose={() => {
                    setRegisterModalVisible(!ClassmodalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Create a new class</Text>
                        <View style={styles.form}>
                            <SafeAreaView>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeTitle}
                                    value={title}
                                    placeholder="Enter Course Title"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeCode}
                                    value={code}
                                    placeholder="Enter Course Code"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeTotalStudents}
                                    value={totalStudents}
                                    placeholder="Total number of students"
                                    keyboardType='numeric'
                                />
                            </SafeAreaView>
                        </View>
                        {(isLoading) && (
                            <>
                                <ActivityIndicator size="large" color="#00ff00" />
                                <Text>Creating your class, Hold on....</Text>
                            </>
                        )}
                        {/* <Button title="Close" onPress={closeModealHandler} /> */}
                        <View style={styles.btnGroup}>
                            <TouchableOpacity onPress={closeModalHandler} style={styles.btn}>
                                <Text style={styles.btnText}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => createClassHandler()}
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
        height: 200,
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