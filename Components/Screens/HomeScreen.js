import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ClassList from '../Class/list';
import { useState } from 'react';
import { Constants } from 'expo'

export default function HomeScreen({ navigation }) {
    const [totalClasses,setTotalClasses] = useState(0)
    const [classess,setClassess] = useState([]);
    const attends = [
        {
            id: 1,
            className: 'CMP 221',
            TotalStudents: 50,
            TotalAttendees: 24,
            Remarks: "Good",
            LastUpdated: '6-July-2022'
        },
        {
            id: 2,
            className: 'CMP 224',
            TotalStudents: 45,
            TotalAttendees: 44,
            Remarks: "Excellent",
            LastUpdated: '6-July-2022'
        },
        {
            id: 3,
            className: 'CMP 223',
            TotalStudents: 70,
            TotalAttendees: 34,
            Remarks: "Not Good",
            LastUpdated: '6-July-2022'
        },
        {
            id: 4,
            className: 'CMP 421',
            TotalStudents: 30,
            TotalAttendees: 26,
            Remarks: "Good",
            LastUpdated: '6-July-2022'
        },
        {
            id: 5,
            className: 'CMP 222',
            TotalStudents: 50,
            TotalAttendees: 44,
            Remarks: "Excellent",
            LastUpdated: '6-July-2022'
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={require('../../assets/head.jpeg')}
                />
                <Text style={styles.info}>Welcome, Samuel</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.ContentHeaderText}>Total Classes: {totalClasses}</Text>
                    <Button
                        title="Create class"
                        color="#EA256F"
                        touchSoundDisabled={true}
                    />
                </View>
                <View style={styles.OldClasses}>
                    <FlatList
                        data={classess}
                        renderItem={
                            ({ item }) => (
                                <ClassList item={item} navigation={navigation} />
                            )
                        }
                        keyExtractor={(item) => item.id}
                    // extraData={selectedId}
                    />

                </View>
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
        height: 120,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#E8F0F7',
        borderRadius: 12,
        alignItems: 'center',
        padding: 10,
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
    }
});
