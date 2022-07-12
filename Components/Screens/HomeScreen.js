import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import ClassList from '../Class/list';
import { useState, useEffect } from 'react';
import Login from './login'
import Register from './register';
import CreateClass from '../Class/create';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Modal from "react-native-modal";

export default function HomeScreen({ navigation }) {
    // console.log(API_token)
    const [totalClasses, setTotalClasses] = useState(0)
    const [classess, setClassess] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [LoginmodalVisible, setLoginModalVisible] = useState(false);
    const [loginToken, setLoginToken] = useState('')
    const [RegistermodalVisible, setRegisterModalVisible] = useState(false);
    const [ClassmodalVisible, setClassModalVisible] = useState(false);
    const [user, setuser] = useState({});


    function requestHandler(result) {
        setuser(result.user);
        setTotalClasses(result.total)
        setClassess(result.courses)
    }
    const getUserCouses = async () => {
        setIsLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + `${loginToken}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(baseUrl + 'course', requestOptions)
            .then(response => response.json())
            .then(result => requestHandler(result))
            .catch(error => console.error('error', error));
        setIsLoading(false)
    };
    const IsUserLoggedIn = async () => {
        await AsyncStorage.getItem('token')
            .then((token) => {
                if (token !== null) {
                    setLoginToken(token);
                    setIsLoggedIn(true)
                } else {
                    setLoginToken('');
                    setIsLoggedIn(false)
                    console.log('No token found')
                }
            })
    }
    useEffect(() => {
        if (loginToken !== '') {
            getUserCouses(loginToken)
        }
    }, [loginToken !== ''])
    useEffect(() => {
        IsUserLoggedIn();
    }, [])

    const logoutHandler = async (result) => {
        if(result.message !== null){
            await AsyncStorage.removeItem('token')
                .then(() => {                    
                    setIsLoggedIn(false)
                    setLoginToken('')
                    setClassess([])
                    setTotalClasses(0)
                    ToastAndroid.showWithGravity(
                        result.message,
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                })
        }
    }
    const Logout = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + `${loginToken}`);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(baseUrl + 'logout', requestOptions)
            .then(response => response.json())
            .then(result => logoutHandler(result))
            .catch(error => console.error('error', error));
        setIsLoading(false)
        // IsUserLoggedIn()

    }
    return (
        <View style={styles.container}>
            {/* <Login LoginmodalVisible={LoginmodalVisible} setLoginModalVisible={setLoginModalVisible} /> */}
            <Register RegistermodalVisible={RegistermodalVisible} setRegisterModalVisible={setRegisterModalVisible} />
            <CreateClass user={user} token={loginToken} ClassmodalVisible={ClassmodalVisible} setClassModalVisible={setClassModalVisible} />
            <View style={styles.header}>
                {
                    (isLoggedIn == false) ?
                        <View style={styles.auth}>
                            <Button
                                title="Login"
                                color="#EA256F"
                                touchSoundDisabled={false}
                                onPress={() => navigation.navigate('Login')}
                            />
                            <Button
                                title="Register"
                                color="#EA256F"
                                touchSoundDisabled={false}
                                onPress={() => setRegisterModalVisible(true)}
                            />
                        </View>
                        :
                        <View>
                            <View style={styles.leftHeader}>

                                <Image
                                    style={styles.image}
                                    source={require('../../assets/head.jpeg')}
                                />
                                <Text style={styles.info}>Welcome, {user.first_name}</Text>
                                <TouchableOpacity onPress={() => Logout()} style={styles.logoutbox}>
                                    <Text style={styles.logoutText}>Logout</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                }
            </View>
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.ContentHeaderText}>Total Classes: {totalClasses}</Text>
                    <Button
                        title="Create class"
                        color="#EA256F"
                        touchSoundDisabled={true}
                        onPress={() => setClassModalVisible(true)}
                    />
                </View>
                {(isLoading) ?
                    <View>
                        <ActivityIndicator size="large" color="#E8F0F7" />
                        <Text style={{ fontSize: 17, color: "#FFFFFF", fontFamily: 'Roboto' }}>Loading classes</Text>
                    </View>
                    :
                    <>
                        <View style={styles.OldClasses}>
                            <FlatList
                                data={classess}
                                renderItem={
                                    ({ item }) => (
                                        <ClassList token={loginToken} Class={item} navigation={navigation} />
                                    )
                                }
                                keyExtractor={(item) => item.id}
                            // extraData={selectedId}
                            />

                        </View>
                    </>
                }
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EA256F',
        alignItems: 'center',
    },
    Listcontainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        width: 300,
        height: 150,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#E8F0F7',
        borderRadius: 12,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
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
        backgroundColor: '#D52366',
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
        backgroundColor: 'white',
        margin: 5,
        marginTop: 10,
        borderRadius: 10,
    },
    ContentHeaderText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#D52366'
    },
    OldClasses: {
        backgroundColor: '#FFFFFF',
        width: 300,
        height: 100,
        flex: 1,
        margin: 10,
        marginBottom: 4,
        borderRadius: 10,
        justifyContent: 'space-around',
    },
    auth: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: 200
    },
    btn1: {
        margin: 3,
        padding: 10,
        width: 300
    },
    // logoutbox: {
    //     width: 60,
    //     height: 30,
    //     backgroundColor: 'red',
    //     alignSelf: 'flex-end',
    //     textAlign: 'right'
    // },
    logoutText: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#D52366'
    },
    leftHeader: {
        width: 280,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        margin: 10
    },
});
