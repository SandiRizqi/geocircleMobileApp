import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import Home from "../components/Home";
import ProjectsList from "../components/ProjectsList";
import Peformance from "../components/Peformance";
import Profile from "../components/Profile";
import Products from "../components/Products";


const Tab = createBottomTabNavigator();

export default function Tabs() {

  return (
    <Tab.Navigator 
    tabBarOptions={{
        style: {
            position: 'absolute',
            bottom: 25,
            borderRadius:15,
        }
    }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Projects" component={ProjectsList} />
        <Tab.Screen name="Peformance" component={Peformance} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}