import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Jobs from './pages/Jobs';
import Favorites from './pages/Favorites';
import Detail from './pages/Detail';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const JobStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Jobs' component={Jobs} />
            <Stack.Screen name='Job Detail' component={Detail} options={({route}) => ({
                headerTintColor: '#f05351',
                title: route.params.job.title.length > 20 ? route.params.job.title.substring(0, 20) + '...' : route.params.job.title,
            })}/>
        </Stack.Navigator>
    )
}

const FavoritesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Favorites' component={Favorites} />
            <Stack.Screen name='Job Detail' component={Detail} options={({route}) => ({
                headerTintColor: '#f05351',
                title: route.params.job.title.length > 20 ? route.params.job.title.substring(0, 20) + '...' : route.params.job.title,
            })}/>
        </Stack.Navigator>
    )
}

const Router = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Jobs" component={JobStack} options={{headerShown: false}} />
                <Drawer.Screen name="Favorites" component={FavoritesStack} options={{headerShown: false}} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Router;