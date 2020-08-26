import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ListTabs from './ListTabs';
import CreateActivity from '../pages/CreateActivity';
import EditActivity from '../pages/EditActivity';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="Home" component={Home}/>
                <Screen name="Register" component={Register}/>
                <Screen name="Login" component={Login}/>
                <Screen name="CreateActivity" component={CreateActivity}/>
                <Screen name="EditActivity" component={EditActivity}/>
                <Screen name="ListTabs" component={ListTabs}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;