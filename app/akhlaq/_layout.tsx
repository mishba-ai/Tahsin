import { Stack } from "expo-router";
import React from "react";
import { Platform } from "react-native";

// Make sure you have this default export
export default function AkhlaqLayout() {
  return (
    <Stack
      screenOptions={{
        // Remove the bottom border/shadow from all screens in this stack
        headerShadowVisible: false,
        // Ensure the header doesn't have a border on iOS or Android
        headerStyle: {
          backgroundColor: '#9EA37D',
          // Remove elevation for Android
          // elevation: 0,
          // Remove border for iOS
          // borderBottomWidth: 0,
        },
      }}
    >
      <Stack.Screen
        name="divine"
        options={{
          title: "Akhlaq ma'Allah",
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'medium',
          },
          headerTintColor: '#7D882F',
          headerStyle: {
            backgroundColor: '#9EA37D',
          },
          // Add safe area top padding for iOS
          ...Platform.select({
            ios: {
              headerStatusBarHeight: 50,
            },
          }),
        }}
      />
      <Stack.Screen
        name="social"
        options={{
          title: "Akhlaq ma‘ an-nas",
          headerShown: true
        }}
      />
      <Stack.Screen
        name="self"
        options={{
          title: "Akhlaq ma‘ an-nafs",
          headerShown: true
        }}
      />
      <Stack.Screen
        name="[id]"
        options={({ route }) => ({
          title: `akhlaq/${route.params?.id}`,
          headerShown: true
        })}
      />
    </Stack>
  );
}