import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PessoalList from '../pages/PessoalList';
import TrabalhoList from '../pages/TrabalhoList';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 84,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontFamily: 'Roboto_700Bold',
                    fontSize: 16,
                    marginLeft: 16
                },
                inactiveBackgroundColor: '#BCB99A',
                activeBackgroundColor: '#832E61',
                inactiveTintColor: '#832E61',
                activeTintColor: '#BCB99A'
            }}
        >
            <Screen 
                name="PessoalList" 
                component={PessoalList}
                options={{
                    tabBarLabel : 'Pessoal'
                }}
                ></Screen>
            <Screen 
                name="TrabalhoList" 
                component={TrabalhoList}
                options={{
                    tabBarLabel : 'Trabalho'
                }}
            ></Screen>
        </Navigator>
    );
}

export default StudyTabs;