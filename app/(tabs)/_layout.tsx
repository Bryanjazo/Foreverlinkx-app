import { Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { CustomTabBarButton } from '@/components/CustomTabBarButton';
export default function TabLayout() {

  return (
   <Tabs
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveBackgroundColor: 'dark-grey',
    tabBarButton: (props) => <CustomTabBarButton {...props} />,
    tabBarStyle: {
      height: 90
    }
   
  }}
>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house" color={color} />,
        }}
      />
       <Tabs.Screen
        name="book"
        options={{
          title: 'Book',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="handbag" color={color} />,
        }}
      />
       
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
