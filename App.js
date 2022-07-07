import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/Screens/HomeScreen';
import ClassScreen from './Components/Screens/ClassScreen';
import AttendanceScreen from './Components/Screens/AttendanceScreen';
import { StatusBar } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();
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

