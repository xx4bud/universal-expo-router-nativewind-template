import React from 'react';
import { Tabs } from 'expo-router';
import { useWindowDimensions } from 'react-native';

export default function TabsLayout() {
  const width = useWindowDimensions().width;
  const isDesktop = width > 768;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          display: isDesktop ? 'none' : 'flex',
        },
      }}>
      <Tabs.Screen
        name="(home)"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: 'Profile' }}
      />
    </Tabs>
  );
}
