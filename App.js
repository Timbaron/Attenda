import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/Screens/HomeScreen';
import ClassScreen from './Components/Screens/ClassScreen';
import AttendanceScreen from './Components/Screens/AttendanceScreen';
import { StatusBar } from 'react-native';
import Login from './Components/Screens/login';
import Take from './Components/Attendance/take';

export default function App() {
  const Stack = createNativeStackNavigator();
  global.baseUrl = "https://attenda10.herokuapp.com/api/";
  const token ="2|MI5Zn9LaYWCfE5n79nrVcGkSrmieoqPNnE8jT5vp"
  global.API_token = token;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#D52366'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Welcome',
          }}
        />
        <Stack.Screen name="ClassScreen" component={ClassScreen} options={{ title: 'Class'}}/>
        <Stack.Screen name="Attendance" component={AttendanceScreen} options={{ title: 'Attendance' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="TakeAttendance" component={Take} options={{ title: 'Taking Attendance' }}
          setOptions={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
      {/* <StatusBar
        animated={true}
        hidden={false}
        networkActivityIndicatorVisible={true}
        showHideTransition="fade"
        translucent={false} // <----------------- add false to translucent
      /> */}
    </NavigationContainer>
  );
}

